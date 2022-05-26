from flask import Blueprint, render_template
from utils.db import db
from models.property import Property

house = Blueprint("home", __name__)


@house.route("/<string:clasification>/<string:category>", methods=["GET", "POST"])
def home(clasification, category):
    if clasification == "all":
        listaPropiedades = Property.query.all()
    else:
        listaPropiedades = Property.query.filter_by(clasification=clasification, category=category).all()
    return render_template(
        "home.html",
        listaPropiedades=listaPropiedades,
    )
