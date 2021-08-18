import { v4 as uuidv4 } from 'uuid';

class Blogs {
    getPosts = (posts: any) => {
        return posts
    }



    getPostById = (posts: any[], _id: any) => {
        const foundPost = posts.find((post) => post.id === _id)
        return foundPost
    }


    createPost = (posts: any[], req: { body: any }) => {
        const post = req.body

        return posts.push({ id: uuidv4(), ...post })
    }

    deletePost = (posts: any[], _id: any) => {
        posts = posts.filter((post) => post.id !== _id)
        return posts
    }

    updatePost = (posts: any[], _id: any, title: String, text: String) => {
        const post = posts.find((post) => post.id === _id)

        if (title) {
            post.title = title
        }

        if (text) {
            post.text = text
        }

        return post
    }
}

export const blogs = new Blogs()