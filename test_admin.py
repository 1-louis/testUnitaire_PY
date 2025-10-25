import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
                                   
from urllib import response
import pytest
from server import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_admin_unauthorized_access(client):
    response = client.get('/admin')
    assert response.status_code == 302
    assert 'login' in response.location

def test_admin_login_logout(client):
    # Test si le mot de passe et l'email sont corrects 
    response = client.post('/login', data=dict(email='admin@admin.com', password='admin'), follow_redirects=True)
    assert response.status_code == 200
    assert b'Admin Dashboard' in response.data

    # si c'est bien connecté dans admin
    response = client.get('/admin')
    assert response.status_code == 200
    assert b'Admin Dashboard' in response.data
# ##################################
    response = client.get('/logout', follow_redirects=True)
    assert response.status_code == 200
    assert b'Welcome to the GUDLFT Registration Portal!' in response.data
  
    # response = client.get('/logout', follow_redirects=True)  # Suivre les redirections
    # assert  response.status_code == 200 # URL après redirection
    # assert response.location.endswith('/')  # Vérifier que la redirection est vers la page d'accueil
    # assert b'deconnexion dervice admin' in response.data
# ##################################

# Test si le mot de passe ou l'email est incorrect
def test_admin_invalid_login(client):
    response = client.post('/login', data=dict(email='wrong@wrong.com', password='wrong'), follow_redirects=True)
    assert response.status_code == 404
    assert b"Invalid mot de passe ou email" in response.data
    print(response.data)

# Test si page existe
def test_admin_404(client):
    response = client.get('/nonexistent-admin')  # Accessing a non-existent route
    assert response.status_code == 404  # Expecting a 404 status code
    assert b'Not Found' in response.data

# 2è sol (efficace) : paramétrer le test
# Les diff param sont indiqués ds une string et les diff values sont stockées ds une liste de tuples
@pytest.mark.parametrize('email, password, result', [('admin@admin.com', 'admin' , 200), ('wrong', 'wrong', 404)])
def test_admin(email, password, result, client):
    response = client.post('/login', data=dict(email=email, password=password), follow_redirects=True)
    assert response.status_code == result