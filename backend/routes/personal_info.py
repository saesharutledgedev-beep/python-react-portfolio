from cProfile import label

from flask import Blueprint, jsonify

personal_info_bp = Blueprint("personal-info", __name__, url_prefix="/api/personal-info")


@personal_info_bp.route("")
def get_personal_info():
    personal_info = {
            "id": 2,
            "name": "Personal Info",
            "titles": [
                'Solutions Architect',
                'Product Owner',
                'Engineering Manager',
                'Full Stack Software Engineer',
            ],
            "tagline": "I turn ambiguity into buildable plans — and plans into shipped systems.",
            "contact_links": [
                { "label": 'Email', "href": 'mailto:saesha.rutledge.dev@gmail.com' },
                { "label": 'GitHub', "href": 'https://github.com/saesharutledgedev-beep' },
                {
                    "label": 'LinkedIn',
                    "href": 'https://www.linkedin.com/in/saesha-rutledge-profile-link/',
                },
            ],
            "description": "I turn ambiguity into buildable plans — and plans into shipped systems.",
            "hero": """AI‑forward full‑stack engineer, technical product manager, and solutions architect who owns workflow‑driven web experiences end‑to‑end. I design and deliver systems where correctness matters, requirements are messy, and the environment is regulated enough that tradeoffs must be explicit.

                    My engineering foundation spans JavaScript/HTML/CSS, server‑rendered UI (EJS/Handlebars), Node/Express services, REST APIs, and relational data models. I raise delivery quality through clear technical design, crisp acceptance criteria, and disciplined execution — partnering closely with product and QA, using practical test automation (Jest), and pushing for maintainable patterns that reduce regressions and future rework.

                    I operate comfortably at the product/engineering seam: translating stakeholder needs into wireframes, user stories, and executable plans, then driving delivery through UAT and release without losing the original intent.

                    PhD‑trained researcher and writer with rigorous analytical discipline, deep‑work focus, and documentation that stands up to scrutiny — communicated clearly to both technical and non‑technical audiences.
""",
            "technical_skills": [
                "Solution architecture",
                "Microservice architecture",
                "Integration design",
                "Data modeling",
                "JavaScript",
                "Python",
                "SQL",
                "Debugging",
                "API design (REST)",
                "Database design",
                "System design",
                "Application design",
                "Software architecture",
                "Node.js",
                "CSS/SCSS",
                "HTML",
                "TypeScript",
                "EJS",
            ],
            "professional_skills": [
                "Stakeholder management",
                "Requirements elicitation",
                "Technical documentation",
                "Code reviews",
                "Mentoring & technical leadership",
                "Risk/tradeoff analysis",
                "Root‑cause analysis",
                "Unit & functional testing",
                "Product design",
                "HIPAA compliance",
                "Peer review",
                "Autonomous coding",
                "Strong verbal communication",
                "Public Trust Clearance",
            ],
            "tooling": [
                "Figma",
                "PostgreSQL",
                "Oracle DB",
                "Sequelize",
                "Express",
                "Jest",
                "Jira",
                "GitHub Copilot",
                "Claude Code",
                "Miro",
                "Confluence",
                "Atlassian",
            ],
        }
    
    return jsonify(personal_info)
