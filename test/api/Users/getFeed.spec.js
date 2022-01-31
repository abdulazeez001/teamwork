

describe(`API :: GET /api/${version}/feed`,function(){
    let token

    beforeEach((done)=>{
        token = '123'
        done()
    })
    context('when token is valid and authorized',function(){
        it('all articles or gifs, showing the most recently posted articlesor gifs first., return 200',function(done){
            request
            .get(`/api/${version}feed`)
            .set('Authorization',`JWT ${token}`)
            .expect(200)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data).to.be.an('array')
                expect(res.body.data[0]).have.keys(['id','title','comments','authorId','createdOn'])
                done(err)
            })
        })
    })
})