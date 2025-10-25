import os
import json
from flask import Flask,render_template,request,redirect,flash,url_for, session


def loadClubs():
    chemin = os.path.join(os.path.dirname(__file__), 'clubs.json')
    with open(chemin) as c:
        listOfClubs = json.load(c)['clubs']
        return listOfClubs
    
def loadCompetitions():
    chemin = os.path.join(os.path.dirname(__file__), 'competitions.json')
    with open(chemin) as comps:
        listOfCompetitions = json.load(comps)['competitions']
        return listOfCompetitions


app = Flask(__name__)
app.secret_key = 'something_special'

competitions = loadCompetitions()
clubs = loadClubs()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    if 'user' not in session:
        return redirect(url_for('login'))
    return render_template('admin/admin_dashboard.html', clubs=clubs, competitions=competitions)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        try:
            for club in clubs:
                email = 'admin@admin.com'
                password = 'admin'

                if request.form['email'] == email and request.form['password'] == password:

                    session['user'] = club['name']
                    return redirect(url_for('admin'))
            flash('Invalid mot de passe ou email')
            return render_template('admin/login.html'), 404
        except KeyError:
            flash('Connexion impossible le mot de passe ou l\'email est incorrect')
            return render_template('admin/login.html'), 404
    return render_template('admin/login.html')


@app.route('/showSummary',methods=['POST'])
def showSummary():
    club = [club for club in clubs if club['email'] == request.form['email']][0]
    return render_template('welcome.html',club=club,competitions=competitions)

@app.route('/book/<competition>/<club>')
def book(competition,club):
    foundClub = [c for c in clubs if c['name'] == club][0]
    foundCompetition = [c for c in competitions if c['name'] == competition][0]
    if foundClub and foundCompetition:
        return render_template('booking.html',club=foundClub,competition=foundCompetition)
    else:
        flash("Something went wrong-please try again")
        return render_template('welcome.html', club=club, competitions=competitions)


@app.route('/purchasePlaces',methods=['POST'])
def purchasePlaces():
    competition = [c for c in competitions if c['name'] == request.form['competition']][0]
    club = [c for c in clubs if c['name'] == request.form['club']][0]
    placesRequired = int(request.form['places'])
    competition['numberOfPlaces'] = int(competition['numberOfPlaces'])-placesRequired
    flash('Great-booking complete!')
    return render_template('welcome.html', club=club, competitions=competitions)


# TODO: Add route for points display


@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)    