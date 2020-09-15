import * as mysql from 'mysql';

import config from '../config/db';

import Blogs from './blog';
const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) {
        console.log(err);
    }
});


export default {
    Blogs
}




