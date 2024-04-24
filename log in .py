import sqlite3
import hashlib


# Funcție pentru crearea tabelului
def create_table():
    conn = sqlite3.connect('user.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                username TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
                )''')
    conn.commit()
    conn.close()

# Funcție pentru adăugarea unui utilizator nou
def add_user(username, email, password):
    conn = sqlite3.connect('user.db')
    c = conn.cursor()
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    c.execute("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)", (username, email, password_hash))
    conn.commit()
    conn.close()

# Funcție pentru verificarea utilizatorului după email și parolă
def check_user(email, password):
    conn = sqlite3.connect('user.db')
    c = conn.cursor()
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    c.execute("SELECT * FROM users WHERE email=? AND password_hash=?", (email, password_hash))
    user = c.fetchone()
    conn.close()
    return user

# Funcție pentru recuperarea utilizatorului după email
def retrieve_user(email):
    conn = sqlite3.connect('user.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=?", (email,))
    user = c.fetchone()
    conn.close()
    return user

# Creăm tabelul la pornirea aplicației
create_table()
