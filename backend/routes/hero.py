from flask import Blueprint, jsonify

hero_bp = Blueprint("hero", __name__, url_prefix="/api/hero")


@hero_bp.route("")
def get_hero():
    hero =  {
        "id": 2,
    "name": "Hero",
    "heroDetails": """I turn ambiguity into buildable plans — and plans into shipped systems.

                    AI‑forward full‑stack engineer, technical product manager, and solutions architect who owns workflow‑driven web experiences end‑to‑end.

                    I design and deliver systems where correctness matters, requirements are messy, and the environment is regulated enough that tradeoffs must be explicit.                

                    I raise delivery quality through clear technical design, crisp acceptance criteria, and disciplined execution.

                    I operate comfortably at the product/engineering seam: translating stakeholder needs into wireframes, user stories, and executable plans, then driving delivery through UAT and release without losing the original intent.

                    PhD‑trained researcher and writer with rigorous analytical discipline, deep‑work focus, and documentation that stands up to scrutiny."""                        
    }
    return jsonify(hero)