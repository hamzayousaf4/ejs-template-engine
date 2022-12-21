const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(req,resp)=>{
    const user={
        name:'Hamza yousaf',
        email:'hamzayousif420@gmail.com',
        city:'Multan'
    }
    resp.render('pofile',{user});
});

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});


app.listen(5000);