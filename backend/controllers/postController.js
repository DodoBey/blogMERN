const asyncHandler = require('express-async-handler');
const Post = require("../models/postModel")

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user._id })
    res.json(posts)
})

const createPost = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body

    if (!title || !content || !category) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const post = new Post({ user: req.user._id, title, content, category })

        const publishedPost = await post.save()

        res.status(201).json(publishedPost)
    }
}
)

module.exports = { getPosts, createPost }