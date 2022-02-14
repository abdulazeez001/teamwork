describe(`API :: POST /api/${version}/auth/create-user`, function () {
  context("when sent data is ok", function () {
    it("creates and returns 201 and the new user", (done) => {
      request
        .post(`/api/${version}/auth/create-user`)
        .send({
          firstName: "Ola",
          lastName: "Shittu ",
          email: "ola@gmail.com",
          password: "ola123",
          gender: "male",
          jobRole: "user",
          department: "technology",
          address: "cameroun street mushin lagos",
        })
        .expect(201)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys(["message", "token", "userId"]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.success).to.equal(
            "User account successfully created"
          );
          done(err);
        });
    });
  });

  context(
    "when firstname, email, paswword, or jobRole does not exist",
    function () {
      it("does not create user and returns 400 with the validation error", function (done) {
        request
          .post(`/api/${version}/auth/create-user`)
          .expect(400)
          .end((err, res) => {
            expect(res.body).have.keys(["status", "error"]);
            expect(res.body.status).to.equal("error");
            expect(res.body.error).to.equal("ValidationError");
            done(err);
          });
      });
    }
  );
});

describe(`API :: POST /api/${version}/auth/signin`, function () {
  context("when password and email are ok", function () {
    it("sign user in, return 200 and generates a token", function (done) {
      request
        .post(`/api/${version}/auth/signin`)
        .send({
          email: "ola@gmail.com",
          password: "ola123",
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys(["token", "userId"]);
          expect(res.body.status).to.equal("success");
          done(err);
        });
    });
  });

  context("when password and email are not ok", function () {
    it("don't sign user in, return 400", function (done) {
      request
        .post(`/api/${version}/auth/signin`)
        .expect(400)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "error"]);
          expect(res.body.status).to.equal("error");
          expect(res.body.error).to.equal("ValidationError");
          done(err);
        });
    });
  });
});
