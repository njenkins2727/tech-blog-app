const router = require('express').Router()
const { Post, Comment, User } = require("../models");

//PLAN
//get all posts for homepage
  //get items from post table 
  router.get('/', (req, res) => {
    try{
      const posts = Post.findAll()({
        include: [User],
      })
      res.render('home', {
        posts, 
        loggedIn: req.session.loggedIn
      })
    } catch (err){
      console.log(res);
      res.status(500).json(err)
    }
  })

//get all comments for when you click on a post  
  router.get('/comments-on-posts', (req, res) => {
    try{
      const comments = Comment.findAll()({
        include: [User, Post],
      })
      res.render('home', {
        comments, 
        loggedIn: req.session.loggedIn
      })
    } catch (err){
      console.log(err);
      res.status(500).json(err)
    }
  })

//Comment on a post 
  // router.post('/', (req, res) => {
  //   try{

  //   }
  // })
  //isauth to make comment  

  // if not auth redirect to login page 

//get dashboard view 
 // if not authenticated redirect to login
 
//get login view

//get signup view 