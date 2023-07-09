const express = require('express')
const {
    createBlog,
    getBlog,
    getBlogs,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')

const router = express.Router()

//GET all blog
router.get('https://mern-stack-steel.vercel.app/', getBlogs)

//GET single blog
router.get('https://mern-stack-steel.vercel.app/:id', getBlog)

//POST new blog
router.post('https://mern-stack-steel.vercel.app/', createBlog)

//UPDATE new blog
router.patch('https://mern-stack-steel.vercel.app/:id', updateBlog)

//DELETE blog
router.delete('https://mern-stack-steel.vercel.app/:id', deleteBlog)

module.exports = router