from flask import Blueprint, jsonify

hero_bp = Blueprint("hero", __name__, url_prefix="/api/hero")


@hero_bp.route("")
def get_hero():
    hero =  {
        "id": 2,
    "name": "Hero",
    "heroDetails": """From ambiguity into buildable plans.

                    AI‑forward full‑stack engineer, technical product manager.

                    High stakes system design and implementation.                

                    Exceptional delivery quality with clear technical design and acceptance criteria.

                    Bridging product and engineering by shaping requirements.

                    PhD‑trained published researcher."""                        
    }
    return jsonify(hero)