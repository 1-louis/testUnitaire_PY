for install 
run serveur:  python server.py
for test: python -m pytest
test un admin serveur: client
test page admin redirection login: test_admin_unauthorized_access 
Test si le mot de passe et l'email sont corrects : test_admin_login_logout 
test si c'est bien connecté dans admin : test_admin_login_admin_ok
si c'est bien emeil et mdp n'est pas bon login: test_admin_invalid_login
Test si page existe : test_admin_404
Les diff param sont indiqués ds une string et les diff values sont stockées ds une liste de tuples : parametrize


