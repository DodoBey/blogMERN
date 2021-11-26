import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blogMain">
            <Link to='createpost'>
                <Button>Create Post</Button>
            </Link>
            <Link to='posts'>
                <Button>View Post</Button>
            </Link>
        </div>
    )
}

export default Blog
