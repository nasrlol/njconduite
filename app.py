from flask import Flask, request

app = Flask(__name__)

@app.route('/chatbot/login', methods=['POST'])
def login():
  # Get the data from the front-end chatbot
  data = request.get_json()

  # Extract the necessary information
  from_number = data['from_number']
  to_number = data['to_number']
  body = data['body']

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
