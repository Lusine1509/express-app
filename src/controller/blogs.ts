import { Request, Response } from "express";
import { blogs } from '../services/blogservice';
import { v4 as uuidv4 } from 'uuid';

let posts: any[] = [
    {
        id: uuidv4(),
        title: 'about john smith',
        text: 'some text inside',

    },
    {
        id: uuidv4(),
        title: 'about Mike Doe',
        text: 'some another text about Mike Doe',

    },
]


class BlogController {
    public getPosts(req: Request, res: Response) {
        res.send(blogs.getPosts(posts))
    }


    public getPostById(req: Request, res: Response) {
        res.status(200).json({
            message: 'success',
            data: blogs.getPostById(posts, req.params.id)
        });
    }


    public createPost(req: Request, res: Response) {
        blogs.createPost(posts, req.body);
        res.status(201).json({ message: `post with the name ${req.body.title} added to the data.` });
    }


    public updatePost(req: Request, res: Response) {
        blogs.updatePost(posts, req.params.id, req.body.title, req.body.text);
        res.status(200).json({ message: `Post with the id ${req.params.id} has been updated` })
    }


    public deletePost(req: Request, res: Response) {
        blogs.deletePost(posts, req.params.id);
        res.status(200).json({ message: `post with the id ${req.params.id} deleted from the data.` })
    }
}


export const blogController = new BlogController();




