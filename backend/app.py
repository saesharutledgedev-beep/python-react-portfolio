from flask import Flask
from flask_cors import CORS

from routes.projects import projects_bp

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
app.register_blueprint(projects_bp)


@app.route("/")
def index():
    return "Backend is running."


if __name__ == "__main__":
    app.run(debug=True, port=5000)
