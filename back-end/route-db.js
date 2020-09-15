import * as express from 'express';
import config from './config/db';
import Blog from './db/blog'; 

import DB from './db/index';

const router = express.Router();

router.get('/studentData', async(req, res) => {
    try{
        let blogs = await DB.Blogs.all();
        res.json(blogs);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

})

export default router;