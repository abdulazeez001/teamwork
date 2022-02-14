describe(`API :: POST /api/${version}/gifs`, function () {
  let token;

  beforeEach((done) => {
    token = "123";
    done();
  });
  context("when image url and title are ok", function () {
    it("saves the gif, return 200 and gif data", function (done) {
      request
        .post(`/api/${version}/gifs`)
        .set("Authorization", `JWT ${token}`)
        .send({
          image: "https://gif.com",
          title: "gif test",
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).have.keys(["status", "data"]);
          expect(res.body.data).have.keys([
            "message",
            "title",
            "gifId",
            "imageUrl",
            "createdOn",
          ]);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.message).to.equal(
            "GIF image successfully posted"
          );
          done(err);
        });
    });
  });

  context("when image url and title are not ok", function () {
    it("doesnt save the gif, return 400 with error message", function (done) {
      request
        .post(`/api/${version}/gifs`)
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
