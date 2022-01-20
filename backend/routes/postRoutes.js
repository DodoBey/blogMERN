const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route('/').get(protect, getPosts)
router.route('/create').post(protect, createPost)
// router.route('/:id').get().put().delete()

module.exports = router