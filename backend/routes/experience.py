from flask import Blueprint, jsonify

experience_info_bp = Blueprint("experience-info", __name__, url_prefix="/api/experience-info")


@experience_info_bp.route("")
def get_experience_info():
    experience_info = {
            "id": 23,
            "name": "Experience Info",
            "summary": "Extensive experience in software engineering, product management, and solutions architecture, with a focus on delivering high-quality web applications and systems.",
            "experience_items": [
                { "label": 'VisualVault', 
                    'details': """•  Led and mentored a 12-engineer team through the full Agile software development lifecycle, conducting requirements elicitation and technical discovery, managing stakeholder communication, analyzing implementation risks and tradeoffs, and prioritizing delivery across interconnected systems.  
•  Served as lead architect, product owner, and product design lead for system, UI, and database components supporting the Washington State Medical Cannabis Registry (MCR), translating client data structures and business rules into relational models, REST API integrations, and end-to-end workflows. Led legacy data migration and data validation efforts while maintaining HIPAA compliance and PII handling requirements.  
•  Collaborated with the Washington State Department of Health to define requirements, establish business rules, validate solution behavior, and resolve implementation dependencies while balancing legal requirements, data quality, and end-user needs.  
•  Built and maintained scalable JavaScript, EJS, and TypeScript services with Node.js and Express, using SQL-backed persistence through Sequelize to deliver modular business-critical workflows, API integrations, and data transformations.  
•  Improved development quality through technical documentation, code reviews, functional testing, debugging, and root-cause analysis, using Claude Code and GitHub Copilot to support implementation and continuous improvement.  
•  Partnered with QA on functional testing and solution validation to identify data mismatches, transformation issues, and defects before release.""" },
                { "label": "Macy's", 
                    "details": """•  Delivered enhancements and feature flags for high-traffic e-commerce web experiences on macys.com and bloomingdales.com, collaborating with product and QA teams to elicit requirements, assess dependencies, implement features, and coordinate releases.  

•  Strengthened application reliability through Jest unit and functional testing, debugging, and root-cause analysis during incidents and defects, validating functionality and performance across customer-facing workflows.  

•  Contributed to Agile planning by clarifying scope, acceptance criteria, technical approaches, and delivery priorities with product and IT leadership, demonstrating ownership and accountability from requirements through release."""},
                {
                    "label": 'Procom Consulting',
                    "details": """• Led development of payments and refunds components, emphasizing correctness across edge cases and business rules. 
• Designed and implemented a PayPal Payflow integration, coordinating requirements and validation scenarios with QA. 
• Documented system processes and mapped workflows to implementation so behavior was predictable and testable. 
• Supported engineers by clarifying code behavior and translating business rules into actionable technical guidance.""",
                },
                                {
                    "label": 'Salepoint LLC',
                    "details": """• Modernized legacy systems by migrating Oracle Forms services to Oracle APEX while preserving workflows and business logic. Required a Public Trust Clearance.
• Translated requirements into PL/SQL implementations and validated outcomes with business stakeholders. 
• Refactored enterprise systems supporting Department of Defense AAFES merchandising infrastructure. 
• Drove clarity in ambiguous problem spaces by eliciting processes, defining objectives, and aligning partners on expected behavior.""",
                },
            ]          
        }
    
    return jsonify(experience_info)
