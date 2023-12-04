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
    cursor.close()
    connection.close()

def getUserInfo():
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM userinfo")
    users = cursor.fetchall()
    for u in users:
        user = []
        user.append(u[1])
        user.append(u[2])
        user.append(u[3])
        list.append(user)
    print(users)
    cursor.close()
    connection.close()
    return list

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

def getEmailList():
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select distinct u.email from userinfo u")
    users = cursor.fetchall()
    for u in users:
        list.append(u[0])
    cursor.close()
    connection.close()
    return list

def getUserList():
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select distinct u.username from userinfo u")
    users = cursor.fetchall()
    for u in users:
        list.append(u[0])
    cursor.close()
    connection.close()
    return list

def getChatList(user):
    list = []
    if (user != 'T2Admin'):
        list = ["Help"]
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select distinct u.username from userinfo u, userinfo i, messages m where i.username = '%s' and u.username <> i.username and (u.role = 'Professional' or (i.username = m.mto and u.username = m.mfrom)) and u.role != 'Admin'"%(user))
    users = cursor.fetchall()
    for u in users:
        list.append(u[0])
    cursor.close()
    connection.close()
    return list

def getProList(user):
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select distinct u.username from userinfo u where u.role = 'Professional' and u.username != '%s'"%(user))
    users = cursor.fetchall()
    for u in users:
        list.append(u[0])
    cursor.close()
    connection.close()
    return list

def getMessagesBetween(userOne, userTwo):
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select * from messages where (mfrom = '%s' and mto = '%s') or (mto = '%s' and mfrom = '%s') order by mtime;"%(userOne, userTwo, userOne, userTwo))
    messages = cursor.fetchall()
    for m in messages:
        message = []
        message.append(m[0])
        message.append(m[2])
        list.append(message)
    cursor.close()
    connection.close()
    return list

def sendMessageto(userOne, userTwo, message):
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO messages values ('%s','%s','%s')"%(userOne, userTwo, message))
    connection.commit()
    cursor.execute("select * from messages where (mfrom = '%s' and mto = '%s') or (mto = '%s' and mfrom = '%s') order by mtime;"%(userOne, userTwo, userOne, userTwo))
    messages = cursor.fetchall()
    print(messages)
    cursor.close()
    connection.close()

def addCalendarEvent(user, year, month, day, eventName):
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO calendarEvents values ('%s', %s, %s, %s, '%s', false)"%(user, year, month, day, eventName))
    connection.commit()
    cursor.close()
    connection.close()

def getCalendarEvents(user):
    list = []
    connection = psycopg2.connect(user="team2",
                                  password="q8QkJWu5LzF0rHtjGhxc0egteyw9Zk5f",
                                  host="dpg-ckc404esmu8c73didn0g-a.ohio-postgres.render.com",
                                  port="5432",
                                  database="wellnessappdb")
    cursor = connection.cursor()
    cursor.execute("select * from calendarEvents where username = ('%s') order by 2,3,4"%(user))
    events = cursor.fetchall()
    for e in events:
        event = []
        event.append(e[1])
        event.append(e[2])
        event.append(e[3])
        event.append(e[4])
        list.append(event)
    connection.commit()
    cursor.close()
    connection.close()
    return list
    
@app.route('/users', methods=['GET']) 
def allUsers(): 
    userList = getUserList()
    return jsonify(userList)

@app.route('/userInfo', methods=['GET']) 
def allUserinfo(): 
    userInfoList = getUserInfo()
    return jsonify(userInfoList)

@app.route('/emails', methods=['GET']) 
def allEmails(): 
    emailList = getEmailList()
    return jsonify(emailList)

@app.route('/chat/<username>', methods=['GET']) 
def showUser(username): 
    if uniqueUserName(username):
        return jsonify([])
    else:
        chatList = getChatList(username)
        return jsonify(chatList)
    
@app.route('/procalendars/<username>', methods=['GET']) 
def showCalendarList(username): 
    proList = getProList(username)
    return jsonify(proList)
    
@app.route('/event/<username>', methods=['GET']) 
def showEvents(username): 
    if uniqueUserName(username):
        return jsonify([])
    else:
        eventList = getCalendarEvents(username)
        return jsonify(eventList)
    
@app.route('/chat/<usernameOne>/<usernameTwo>', methods=['GET']) 
def showMessages(usernameOne, usernameTwo):
    if(usernameTwo == 'Help'):
        messageList = getMessagesBetween(usernameOne, 'T2Admin')
        return jsonify(messageList) 
    if uniqueUserName(usernameOne):
        return jsonify([])
    if uniqueUserName(usernameTwo):
        return jsonify([])
    else:
        messageList = getMessagesBetween(usernameOne, usernameTwo)
        return jsonify(messageList)

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

@app.route('/message', methods=['POST'])
def sendMessage():
    data = request.data
    string = data.decode('UTF-8')
    data = eval(string)
    if (data[0] == 'Help'):
        data[0] = 'T2Admin'
    if (data[1] == 'Help'):
        data[1] = 'T2Admin'
    if not(uniqueUserName(data[0])):
        if not(uniqueUserName(data[1])):
            sendMessageto(data[0], data[1], data[2])
    return "Ok", 200

@app.route('/calendar', methods=['POST'])
def postEvent():
    data = request.data
    string = data.decode('UTF-8')
    data = eval(string)
    addCalendarEvent(str (data[0]), str (data[1]), str(data[2]), str (data[3]), str (data[4]))
    return "Ok", 200

app.run()