from flask import Blueprint, jsonify

hero_bp = Blueprint("hero", __name__, url_prefix="/api/hero")


@hero_bp.route("")
def get_hero():
    hero =  {
        "id": 2,
    "name": "Hero",
    "heroDetails": """I turn ambiguity into buildable plans — and plans into shipped systems.

                    AI‑forward full‑stack engineer, technical product manager, and solutions architect who owns workflow‑driven web experiences end‑to‑end. I design and deliver systems where correctness matters, requirements are messy, and the environment is regulated enough that tradeoffs must be explicit.

                    I currently lead a team of 15 developers and QA engineers through the modernization of the Washington State Medical Cannabis Registry — owning system architecture, mentoring engineers through code review, and driving an on‑schedule statewide launch that gave the agency its first owned, reportable view of nearly 30,000 registered users.

                    My engineering foundation spans JavaScript/HTML/CSS, server‑rendered UI (EJS/Handlebars), Node/Express services, REST APIs, and relational data models. I raise delivery quality through clear technical design, crisp acceptance criteria, and disciplined execution — partnering closely with product and QA, using practical test automation (Jest), and pushing for maintainable patterns that reduce regressions and future rework.

                    I operate comfortably at the product/engineering seam: translating stakeholder needs into wireframes, user stories, and executable plans, then driving delivery through UAT and release without losing the original intent.

                    PhD‑trained researcher and writer with rigorous analytical discipline, deep‑work focus, and documentation that stands up to scrutiny — communicated clearly to both technical and non‑technical audiences."""                        
    }
    return jsonify(hero)