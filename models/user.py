import sqlite3
from db import db

class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80))
    lname = db.Column(db.String(80))
    company = db.Column(db.String(80))
    city = db.Column(db.String(80))
    prov = db.Column(db.String())
    post = db.Column(db.String())
    
    def __init__(self, fname, lname, company, city, prov, post):
        self.fname = fname
        self.lname = lname
        self.company = company
        self.city = city
        self.prov = prov
        self.post = post

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first() 

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()