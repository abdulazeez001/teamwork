describe(`API :: PATCH /api/${version}/articles/:articleId`, function () {
  let token;
  let articleId;
  beforeEach((done) => {
    token = "123";
    articleId = "23";
    done();
  });

  context("when article and title are ok", function () {
    it("saves the article, return 200 and article information", function (done) {
      request
        .put(`/api/${version}/articles/${articleId}`)
        .set("Authorization", `JWT ${token}`)
        .send({
          article: "hello whats up",
          title: "article test",
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys(["message", "title"]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.message).to.equal(
            "Article successfully updated"
          );
          done(err);
        });
    });
  });

  context("when article or/and title is/are not ok", function () {
    it("doesnt save the article, return 400 with error message", function (done) {
      request
        .put(`/api/${version}/articles/${articleId}`)
        .set("Authorization", `JWT ${token}`)
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
