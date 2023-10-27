import flask
from flask import jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2 import Error

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

def insertUserInfo(name, email, username, password, role):
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO userinfo (name, email, username, password, role) VALUES (%s, %s, %s, %s, %s)",(name, email, username, password, role))
    connection.commit()
    cursor.execute("SELECT * FROM userinfo")
    users = cursor.fetchall()
    print(users)
    print(1)
    cursor.close()
    connection.close()

def deleteUserInfo(username):
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("DELETE FROM userinfo WHERE username = '%s'"%(username))
    connection.commit()
    cursor.execute("SELECT * FROM userinfo")
    users = cursor.fetchall()
    print(2)
    cursor.close()
    connection.close()

def uniqueUserName(username):
    unique = True
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("SELECT username FROM userinfo")
    users = cursor.fetchall()
    for u in users:
        if u[0] == username:
            unique = False
    cursor.close()
    connection.close()
    return unique

def uniqueEmail(email):
    unique = True
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("SELECT email FROM userinfo")
    users = cursor.fetchall()
    for u in users:
        if u[0] == email:
            unique = False
    cursor.close()
    connection.close()
    return unique

@app.route('/test', methods=['GET'])
def test():
    return "Test"

@app.route('/insert', methods=['POST'])
def insert():
    data = request.data
    string = data.decode('UTF-8')
    data = eval(string)
    print(data)
    if data.get('cPassword') == data.get('password'):
        if uniqueUserName(data.get('username')):
            if uniqueEmail(data.get('email')):
                insertUserInfo(data.get('name'), data.get('email'), data.get('username'), data.get('password'), data.get('role')[3:])
                return "Ok", 200
    return "Conflict", 409

app.run()