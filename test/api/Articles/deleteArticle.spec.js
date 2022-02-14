describe(`API :: DELETE /api/${version}/articles/:articleId`, function () {
  let token;
  let articleId;

  beforeEach((done) => {
    token = "123";
    articleId = "23";
    done();
  });

  context("when token is okay", function () {
    it("deletes the article and return 200", function (done) {
      request
        .delete(`/api/${version}/articles/${articleId}`)
        .set("Authorization", `JWT ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys(["message"]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.message).to.equal(
            "Article successfully deleted"
          );
          done(err);
        });
    });
  });
});
