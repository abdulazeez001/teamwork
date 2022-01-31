

describe(`API :: POST /api/${version}/articles`,function(){
    let token

    beforeEach((done)=>{
        token='123'
        done()
    })
    context('when article and title are ok',function(){
        it('saves the article, return 200 and article information',function(done){

            request
            .post(`/api/${version}/articles`)
            .set('Authorization', `JWT ${token}`)
            .send({
                'article':'hello world',
                'title':'article test'
            })
            .expect(200)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','data'])
                expect(res.body.data).have.keys(['message','title','articleId','createdOn'])
                expect(res.body.status).to.equal('success')
                expect(res.body.data.message).to.equal('Article successfully posted')
                done(err)
            })

        })
        
    })

    context('when article or/and title is/are not ok',function(){
        it('doesnt save the article, return 400 with error message',function(done){

            request
            .post(`/api/${version}/articles`)
            .set('Authorization', `JWT ${token}`)
            .expect(400)
            .end((err,res)=>{
                expect(res.body).have.keys(['status','error'])
                expect(res.body.status).to.equal('error')
                expect(res.body.error).to.equal('ValidationError')
                done(err)
            })

        })
        
    })
   
})


