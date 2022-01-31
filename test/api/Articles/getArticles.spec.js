

describe(`API :: GET /api/${version}/articles/:articleId`,function(){
    let token
    let articleId

    beforeEach((done)=>{
        token = '123'
        articleId = '23'
        done()
    })
    context('when token is valid and authorized',function(){
        it('gets article and its comment, return 200',function(done){
            request
            .get(`/api/${version}/articles/${articleId}`)
            .set('Authorization',`JWT ${token}`)
            .expect(200)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.data).have.keys(['id','title','article','comments','createdOn'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data.comments).to.be.an('array')
                expect(res.body.data.comments[0]).have.keys(['commentId','comment','authorId'])
                done(err)
            })
        })
    })
})