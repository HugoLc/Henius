from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class RankForm(FlaskForm):
    jogador = StringField("jogador", validators=[DataRequired()])
    pontuacao = StringField("pontuacao")