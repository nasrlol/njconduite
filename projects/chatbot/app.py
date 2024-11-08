from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/chatbot/login.html', methods=['POST'])
def login():
  name = request.form['name']
  last_name = request.form['last-name']
  email = request.form['email']
  phone = request.form['phone']
  
  with open('login.txt', 'a') as f:
    f.write(f"Name: {name}, Last Name: {last_name}, Email: {email}, Phone: {phone}\n")
  
  return redirect('/chatbot/login.html')

if __name__ == '__main__':
  app.run(debug=True)
