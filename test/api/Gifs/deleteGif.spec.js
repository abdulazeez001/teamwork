
describe(`API :: DELETE /api/${version}/gifs/:gifId`,function(){
    let token
    let gifId

    beforeEach((done)=>{
        token = '123'
        gifId = '23'
        done()
    })

    context('when token is okay',function(){
        it('deletes the article and return 200',function(done){
            request
            .delete(`/api/${version}/gifss/${gifId}`)
            .set('Authorization',`JWT ${token}`)
            .expect(200)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.data).have.keys(['message'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data.message).to.equal('Gif successfully deleted')
                done(err)
            })

        })
    })
})