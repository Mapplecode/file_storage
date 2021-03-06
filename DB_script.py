from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import sessionmaker, scoped_session
from dataBase_info import db_info
class DB(object):
    def __init__(self):
        dbhost = db_info['MYSQL_HOST']
        dbuser = db_info['MYSQL_USER']
        dbpass = db_info['MYSQL_PASSWORD']
        dbname = db_info['MYSQL_DB']

        url = 'mysql+pymysql://{}:{}@{}/{}?charset=utf8'.format(
            dbuser, dbpass, dbhost, dbname)
        base = automap_base()
        engine = create_engine(url, pool_recycle=3600, pool_pre_ping=True, pool_timeout=60)
        base.prepare(engine, reflect=True)
        self.classes = base.classes
        scope_session = scoped_session(sessionmaker(bind=engine, autocommit=False, autoflush=True))
        self.session = scope_session()
        self.engine = engine