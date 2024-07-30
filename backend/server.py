from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

@app.route("/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello world!"
    })





if __name__ == "__main__":
    app.run(debug=True, port=2000)