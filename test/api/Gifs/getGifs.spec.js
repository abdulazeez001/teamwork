describe(`API :: GET /api/${version}/gifs/:gifId`, function () {
  let token;
  let gifId;

  beforeEach((done) => {
    token = "123";
    gifId = "23";
    done();
  });
  context("when token is valid and authorized", function () {
    it("gets gif and its comment, return 200", function (done) {
      request
        .get(`/api/${version}/gifs/${gifId}`)
        .set("Authorization", `JWT ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys([
            "id",
            "title",
            "url",
            "comments",
            "createdOn",
          ]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.comments).to.be.an("array");
          expect(res.body.data.comments[0]).have.keys([
            "commentId",
            "comment",
            "authorId",
          ]);
          done(err);
        });
    });
  });
});
