from flask import Blueprint, jsonify

projects_bp = Blueprint("projects", __name__, url_prefix="/api/projects")


@projects_bp.route("")
def get_projects():
    projects = [
        {
            "id": 1,
            "name": "Portfolio Site",
            "description": "This site — a React/Redux frontend backed by a Flask API.",
            "url": "https://github.com/saesharutledgedev-beep/python-react-portfolio",
        },
    ]
    return jsonify(projects)
