# -*- coding: utf-8 -*-

import serial
from flask import Flask
from flask.ext.cors import CORS

devices = ('/dev/ttyUSB0', '/dev/ttyACM0')

for device in devices:
    try:
        com = serial.Serial(device)
        break
    except:
        com = False
        continue

app = Flask(__name__)
CORS(app)

direcoes_andar = {
    'frente': '1',
    'tras': '2',
}

direcoes_girar = {
    'direita': '3',
    'esquerda': '4',
}


@app.route('/andar/<direcao>')
def andar(direcao):
    com.write(direcoes_andar[direcao])
    return 'PatoBot andou para %s!' % direcao


@app.route('/girar/<direcao>')
def girar(direcao):
    com.write(direcoes_girar[direcao])
    return 'PatoBot girou para %s!' % direcao


@app.route('/')
def main():
    status = 'on' if com else 'off'
    return 'PatoBot: %s' % status


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
