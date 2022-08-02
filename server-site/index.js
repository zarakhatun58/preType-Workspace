const express =require('express')
const app=  express()
//const port= process.env()
const port =5000;

app.get('/', (req,res)=>{

    res.send('HELLO WORLD Social Media')
})

const users=[
    { id:1, name :'zara', email:'jkhatun@gmail.com', phone:'57987790'},
    { id:2, name :'sara', email:'jkhatun3@gmail.com', phone:'57987700'},
    { id:3, name :'sabina', email:'jkhatun23@gmail.com', phone:'57987730'},
]

//query Parameter
app.get('/users', (req,res)=>{
    const search =req.query.search;
   // console.log(req.query.search);
    //res.send(users);
if(search){
    const searchResult=users.filter(user =>user.name.toLocaleLowerCase().includes(search))
} else{
    res.send(searchResult);
}
})

app.get('/fruits/mango/fazli', (req,res)=>{
    res.send(fruits, ' yammi')
})

// Dynamic Api
app.get('/users/:id' , (req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
    console.log(req.params.id);
})

app.get('/fruits', (req,res)=>{
    res.send('mango');
})
//https://www.linkedin.com/developers/apps/verification/3a965047-816b-4ee2-995a-4b2af197f44a

// LinkedIn API route
app.get('/linkedin/people', function(req,res){
    request.get('http://api.linkedin.com/v1/people/~', {
        'host': 'api.linkedin.com',
        'connection': 'Keep-Alive',
        'auth': {
            'bearer': req.user.linkedin.token
        }
    }, function(error,apiRes,body){
        res.send(apiRes);
    });
});

app.listen(port , ()=>{
    console.log(`all social media api ${port}`);
})


//workspace