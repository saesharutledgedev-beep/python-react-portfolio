from flask import Flask
from flask_cors import CORS

from routes.projects import projects_bp
from routes.personal_info import personal_info_bp

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
app.register_blueprint(projects_bp)
app.register_blueprint(personal_info_bp)
from routes.education import education_info_bp
from routes.experience import experience_info_bp


@app.route("/")
def index():
    return "Backend is running."

app.register_blueprint(education_info_bp)
app.register_blueprint(experience_info_bp)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
