  
import express from 'express'

import {blogController} from '../controller/blogs';

const router = express.Router()

router.get('/', blogController.getPosts)

router.post('/', blogController.createPost)

router.get('/:id', blogController.getPostById)

router.delete('/:id', blogController.deletePost)

router.patch('/:id', blogController.updatePost)

export default router