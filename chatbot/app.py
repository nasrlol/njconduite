from flask import Flask, request

app = Flask(__name__)

@app.route('login.html', methods=['POST'])
def login():
  
  print(request.form)  
  # Debugging to see what's being received
  # Rest of your logic here
  
  # Get the data from the front-end chatbot
  # Remove the unused variables
  request.form['name']
  request.form['last-name']
  request.form['email']



  # Extract the necessary information
  from_number = request.form['from_number']
  to_number = request.form['to_number']
  body = request.form['body']

  # Store the message or any other relevant information in a file
  with open('/home/nasr/web-dev/login.txt', 'a') as file:
    file.write(f"From: {from_number}\n")
    file.write(f"To: {to_number}\n")
    file.write(f"Body: {body}\n\n")
    file.flush()  # Flush the buffer to ensure immediate write

  # Return a response to the front-end chatbot
  return {'message': 'Message received successfully'}



if __name__ == '__main__':
  app.run()
