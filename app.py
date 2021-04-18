from flask import Flask,render_template,request,redirect, session
from werkzeug.utils import secure_filename
from flask_mysqldb import MySQL
from DB_script import DB as database
import os
import filetype
from make_files_ext import add_a_tag
app = Flask(__name__)
app.config['SECRET_KEY'] = '12345#'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'file_storage'
db = MySQL(app)
SESSION_TYPE = 'redis'
################
################
@app.route('/')
def index():
    if session.get('username'):
        return render_template('index.html')
    else:
        return redirect('/login')
@app.route('/category1')
def category1():
    user_files = os.listdir('static/user_files/'+session.get('username'))
    image_list=[]
    for files in user_files:
        src= 'static/user_files/'+session.get('username')+'/'+files
        image_list.append(add_a_tag(src,files))

    return render_template('backend/page-alexa.html',image_list=image_list)

@app.route('/login',methods=['GET','POST'])
def login():
    try:
        param = ''
        if request.method == 'GET':
            param = request.args
        if request.method == 'POST':
            param = request.form
        username= param.get('username')
        password=param.get('password')
        DB= database()
        dbsession = DB.session
        User = DB.classes.user
        user = dbsession.query(User).filter(User.username == username).scalar()
        if user:
            if user.password == password:
                session['username'] = username
                session['name'] = user.name
                session['user_id'] = user.id
                return redirect('/')
            else:
                return render_template('backend/auth-sign-in.html')
        else:
            return render_template('backend/auth-sign-in.html')
    except:
        return render_template('backend/auth-sign-in.html')

@app.route('/signup',methods=['GET','POST'])
def signup():
    try:
        param = ''
        if request.method == 'GET':
            param = request.args
        if request.method == 'POST':
            param = request.form
        fname = param.get('fname')
        lname = param.get('lname')
        full_name = fname + " " +lname
        username= param.get('username')
        password=param.get('password')
        DB= database()
        dbsession = DB.session
        User = DB.classes.user
        new_user = User(username=username,password=password,name=full_name)
        dbsession.add(new_user)
        dbsession.commit()
        return redirect('/')


    except:
        return render_template('backend/auth-sign-up.html')

@app.route('/logout',methods=['GET','POST'])
def logout():
    session.clear()
    return redirect('/')

@app.route('/file_upload',methods=['GET','POST'])
def file_upload():
    if 'file' not in request.files:
        print('No file')
    f = request.files['file']
    print(f)
    try:
        os.makedirs('static/user_files/'+session.get('username'))
    except:
        pass
    f.save('static/user_files/'+session.get('username')+'/'+f.filename)
    return redirect('/category1')

@app.route('/delete_file_strd',methods=['GET','POST'])
def delete_file():
    try:
        param = ''
        if request.method == 'GET':
            param = request.args
        if request.method == 'POST':
            param = request.form
        file= param.get('file')
        print(file)
        os.remove(os.getcwd()+'/'+file)
        return {'success': True}
    except:
        return {'success': False}
