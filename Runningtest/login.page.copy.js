const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'Sign in'

class LoginPage {
    static visit() {
        cy.visit(URL);
        return this
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username);
        return this
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
        return this
    }

    static signIn() {
        cy.contains(SIGN_IN).click();
        return this
    }
}

export default LoginPage;