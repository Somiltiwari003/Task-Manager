const express=require('express');
const app=express();

const path=require('path');
const fs=require('fs');

app.set("view engine",'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    fs.readdir('./files',(err,files)=>{
        res.render("index",{files:files});
    })
})
app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/');
        if(err){
            console.error(err);
        }
    });    // split(' ') separates the words from spaces and join('') joins them back as single word
})
app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
        if(err){
            console.error(err);
        }
        else{
            res.render("show",{filename:req.params.filename, data:data});
        }
    });
})
app.post('/edit_name',(req,res)=>{
    newName=req.body.new.split(' ').join('');
    fs.rename(`./files/${req.body.prev}`,`./files/${newName}`,(err)=>{
        res.redirect('/');
        if(err){
            console.error(err);
        }
    })
})
app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename:req.params.filename});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});