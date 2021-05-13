from flask import Flask,render_template,request,redirect, session
from werkzeug.utils import secure_filename
from flask_mysqldb import MySQL
from DB_script import DB as database
import os
from dataBase_info import db_info
import filetype
from make_files_ext import add_a_tag
app = Flask(__name__)
app.config['SECRET_KEY'] = db_info['SECRET_KEY']
app.config['MYSQL_HOST'] = db_info['MYSQL_HOST']
app.config['MYSQL_USER'] = db_info['MYSQL_USER']
app.config['MYSQL_PASSWORD'] = db_info['MYSQL_PASSWORD']
app.config['MYSQL_DB'] = db_info['MYSQL_DB']
db = MySQL(app)
SESSION_TYPE = 'redis'
################
################
@app.route('/')
def index():
    if session.get('username'):
        return render_template('/categories/dashboard.html')
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

@app.route('/index',methods=['POST','GET'])
def index2():
    param = ''
    cat = ''
    try:
        if request.method == 'GET':
            param = request.args
        if request.method == 'POST':
            param = request.form
        cat = param.get('cat')
        if cat == None or cat == '':
            cat = 'departments'
    except:
        pass
    print(cat)
    file_list2 = make_files2(cat)
    page_name = (cat).replace('_',' ')
    page_name = page_name.replace('cat','')
    session['catgory_page'] = page_name.capitalize()
    print(file_list2)
    return render_template('categories/dashboard.html',file_list=file_list2)



@app.route('/login',methods=['POST','GET'])
def login():
    # try:
        param = ''
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
                    session['name'] = username
                    session['user_id'] = user.id
                    return redirect('/')
                else:
                    return render_template('backend/auth-sign-in.html')
        else:
            return render_template('backend/auth-sign-in.html')

    # except:
    #     return render_template('backend/auth-sign-in.html')

@app.route('/signup',methods=['GET','POST'])
def signup():
    # try:
        param = ''
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
        else:
            return render_template('backend/auth-sign-up.html')
    # except:
    #     return render_template('backend/auth-sign-up.html')

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


def make_files(cat):
    cat_files = 'static/user_files/' + session.get('username') + '/'+cat
    image_list = []
    image_dict = {}
    new_file_list = []
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
            new_file_list.append(add_table(str(count),final_path,src,cat_folder,u_folders))
            count = count + 1
    return image_list,new_file_list

def make_files2(cat):
    cat_files = 'static/user_files/' + session.get('username') + '/'+cat
    image_list = []
    image_dict = {}
    new_file_list = []
    try:
        make_directories(cat_files)
    except:
        pass
    user_folder = os.listdir(cat_files)
    count = 1
    for u_folders in user_folder:
        cat_folder = os.listdir(cat_files + '/' + u_folders)
        for src in cat_folder:
            final_path = cat_files + '/' + u_folders + '/' + src
            new_file_list.append(add_table(str(count),final_path,src,cat_folder,u_folders))
            count = count + 1
    return new_file_list


def add_table(count,final_path,file_name,u_folders,cat_folder):
    import datetime
    date = datetime.datetime.today()
    tr_str=""""
    <tr class='{} cat_tr'>
    <td>{}</td>  <td> <a href={} class='text_link' target="_blank"> {} </a> </td>  <td>{}</td>  <td>{}</td>
    </tr>""".format(cat_folder,count,final_path,file_name,cat_folder,date)
    return tr_str

@app.route('/fileUploader',methods=['GET','POST'])
def file_uploader():
    param = ''
    main_dep = 'no_category'
    sec_dep = ''
    tag = 'no_tag'
    print('++++++ +++++++ +++++++')
    try:
        try:
            if request.method == 'GET':
                param = request.args
            if request.method == 'POST':
                param = request.form
            main_dep = param.get('main_dep')
            sec_dep = param.get('sec_dep')
            print(main_dep,sec_dep)
        except:
            pass
        print(main_dep)
        if 'file' not in request.files:
            print('No file')
        f = request.files['file']
        print(f)
        dir_ = 'static/user_files/'+session.get('username')+'/'+main_dep+'/'+sec_dep
        try:
            os.makedirs(dir_)
        except:
            pass
        f.save(dir_+'/'+f.filename)
        if main_dep == 'no_category':
            return redirect('/')
        return redirect('/')
    except:
        return redirect('/')