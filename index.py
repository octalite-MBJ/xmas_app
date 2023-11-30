from flask import *
# my flask project
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/x-mas', methods=['POST'])
def hello():
    username = request.form['username']
    if username == "":
        print("error")
        return render_template('index.html')
    else:
        return render_template('home.html',  username=username)


if __name__ == "__main__":
    app.run(debug=False,host='0.0.0.0')
