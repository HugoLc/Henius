from flask import Blueprint, render_template, jsonify, request
from wtforms.compat import with_metaclass
from models.formRank import RankForm
import json

file = open('models/rank.json')

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")


@views.route("/rank", methods=["GET","POST"])
def rank():
    data = json.load(file)
    if request.method == "GET":
        print(type(jsonify(data)))
        return jsonify(data)
    elif request.method == "POST":
        nome = request.form['nome']
        pontuacao = request.form['pontuacao']
        print(nome)
        print(pontuacao)
        atualizarJson(nome, pontuacao, data)
        return "ok"


def atualizarJson(jogador, pontuacao, json_data):
    conteudo = json_data
    print(conteudo)
    pontuacao = int(pontuacao)
    registro = [{'jogador':jogador, 'pontuacao':pontuacao}]
    print(registro)

    nova_pontuacao = conteudo + registro
    print(nova_pontuacao)
    salvarArquivo(nova_pontuacao)

def salvarArquivo(conteudo_json):
    with open('models/rank.json', 'w') as rank:
        json.dump(conteudo_json, rank)

    
    



    