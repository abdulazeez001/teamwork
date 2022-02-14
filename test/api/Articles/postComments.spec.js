describe(`API :: POST /api/${version}/articles/:articleId/comment`, function () {
  let token;
  let articleId;

  beforeEach((done) => {
    token = "123";
    done();
  });
  context("when comment is ok", function () {
    it("saves the comment, return 200 and comment information", function (done) {
      request
        .post(`/api/${version}/articles/${articleId}/comment`)
        .set("Authorization", `JWT ${token}`)
        .send({
          comment: "hello world",
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys([
            "message",
            "articleTitle",
            "article",
            "comment",
            "createdOn",
          ]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.message).to.equal(
            "Comment successfully created"
          );
          done(err);
        });
    });
  });

  context("when comment is/are not ok", function () {
    it("doesnt save the comment, return 400 with error message", function (done) {
      request
        .post(`/api/${version}/articles/${articleId}/comment`)
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
