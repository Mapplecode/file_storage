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


def make_directories(cat_files):
    try:
        os.makedirs(cat_files)
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'collections')
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'water')
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'police')
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'streets')
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'refuse')
    except:
        pass
    try:
        os.makedirs(cat_files+'/'+'fleet')
    except:
        pass
@app.route('/departments_cat')
def departments_cat():
    cat_files = 'static/user_files/'+session.get('username')+'/departments_cat'
    image_list = []
    image_dict = {}
    try:
        make_directories(cat_files)
    except:
        pass
    user_folder = os.listdir(cat_files)
    count = 0
    for u_folders in user_folder:
        cat_folder = os.listdir(cat_files+'/'+u_folders)
        for src in cat_folder:
            final_path =  cat_files+'/'+u_folders+'/'+src
            image_list.append(add_a_tag(final_path,final_path.split('/')[-1],u_folders,'dp'+str(count)))
            count = count+1
    return render_template('categories/department_cat.html',image_list=image_list,cat_name='departments_cat')

@app.route('/user_manual_cat')
def user_manual_cat():
    cat_files = 'static/user_files/' + session.get('username') + '/user_manual_cat'
    image_list = []
    image_dict = {}
    try:
        make_directories(cat_files)
    except:
        pass
    user_folder = os.listdir(cat_files)
    count = 0
    for u_folders in user_folder:
        cat_folder = os.listdir(cat_files + '/' + u_folders)
        for src in cat_folder:
            final_path = cat_files + '/' + u_folders + '/' + src
            image_list.append(add_a_tag(final_path, final_path.split('/')[-1], u_folders, 'um'+str(count)))
            count = count + 1
    return render_template('categories/user_manual_cat.html',image_list=image_list,cat_name='user_manual_cat')


@app.route('/tribal_knowledge_cat')
def tribal_knowledge_cat():
    cat_files = 'static/user_files/' + session.get('username') + '/tribal_knowledge_cat'
    image_list = []
    image_dict = {}
    try:
        make_directories(cat_files)
    except:
        pass
    user_folder = os.listdir(cat_files)
    count = 0
    for u_folders in user_folder:
        cat_folder = os.listdir(cat_files + '/' + u_folders)
        for src in cat_folder:
            final_path = cat_files + '/' + u_folders + '/' + src
            image_list.append(add_a_tag(final_path, final_path.split('/')[-1], u_folders, 'tk'+str(count)))
            count = count + 1
    return render_template('categories/tribal_knowledge_cat.html',image_list=image_list,cat_name='tribal_knowledge_cat')


@app.route('/qr_code_cat')
def qr_code_cat():
    cat_files = 'static/user_files/' + session.get('username') + '/qr_code_cat'
    image_list = []
    image_dict = {}
    try:
        make_directories(cat_files)
    except:
        pass
    user_folder = os.listdir(cat_files)
    count = 0
    for u_folders in user_folder:
        cat_folder = os.listdir(cat_files + '/' + u_folders)
        for src in cat_folder:
            final_path = cat_files + '/' + u_folders + '/' + src
            image_list.append(add_a_tag(final_path, final_path.split('/')[-1], u_folders, 'qr'+str(count)))
            count = count + 1
    return render_template('categories/qr_code_cat.html',image_list=image_list,cat_name='qr_code_cat')


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
    try:
        param = ''
        category = 'no_category'
        tag = 'no_tag'
        try:
            if request.method == 'GET':
                param = request.args
            if request.method == 'POST':
                param = request.form
            category = param.get('category')
            tag = param.get('tag')
        except:
            pass
        print(category)
        if 'file' not in request.files:
            print('No file')
        f = request.files['file']
        print(f)
        try:
            os.makedirs('static/user_files/'+session.get('username')+'/'+category+'/'+tag)
        except:
            pass
        f.save('static/user_files/'+session.get('username')+'/'+category+'/'+tag+'/'+f.filename)
        if category == 'no_category':
            return redirect('/')
        return redirect('/'+category)
    except:
        return redirect('/' + category)
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

