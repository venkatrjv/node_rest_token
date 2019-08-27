const chai = require('chai');
const expect = chai.expect;
// var request = require('request');
const app = require('../app.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//
// ──────────────────────────────────────────────────────────── AUTHORIZATION ─────
describe('Authorization', function () {
    it('With Authorization Header', function (done) {
        chai.request(app).get('/user').set(
            'Authorization', "Bearer 1Br4RPWEqvSB9pkox1Q6"
        ).end((error, response, body) => {
            expect(response).to.have.status(200);
            done();
        });
    });
    it('With-out Authorization Header', function (done) {
        chai.request(app).get('/user').end((error, response, body) => {
            expect(response).to.have.status(401);
            expect(response.text).to.equal("Invalid token.");
            done();
        });
    });
});

//
// ─────────────────────────────────────────────────────────── USER OPERATION ─────
describe('User', () => {
    describe("Get User's list", () => {
        it('Returns a 200 response', (done) => {
            chai.request(app)
                .get('/user').set(
                    'Authorization', "Bearer 1Br4RPWEqvSB9pkox1Q6"
                )
                .end((error, response) => {
                    if (error) done(error)
                    // check our response
                    expect(response).to.have.status(200)
                    done()
                });
        });
    });

    describe('Create User', () => {
        it('Returns a 200 response', () => {
            return chai.request(app)
                .post('/user').set(
                    'Authorization', "Bearer 1Br4RPWEqvSB9pkox1Q6"
                )
                .send({
                    "fName": "Sauncho",
                    "lName": "Sugge",
                    "email": "ssugge0@4shared.com",
                    "gender": "Male"
                })
                .then((response) => {
                    // check our response
                    expect(response).to.have.status(200)
                }).catch((error) => {
                    throw error
                })
        });
    });

    describe('Create User with invalid JSON body', () => {
        it('Returns a 400 response', () => {
            return chai.request(app)
                .post('/user').set(
                    'Authorization', "Bearer 1Br4RPWEqvSB9pkox1Q6"
                )
                .send({
                    "invalid": "Sauncho",
                })
                .then((response) => {
                    // check our response
                    expect(response).to.have.status(400)
                }).catch((error) => {
                    throw error
                })
        });
    });
});