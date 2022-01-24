import React, { useEffect } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import "./Posts.css";
import { useDispatch, useSelector } from 'react-redux'
import { deletePostAction, listPosts } from '../../actions/postsActions';
import { useNavigate, useParams } from 'react-router';


const Posts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    const postList = useSelector(state => state.postList)
    const { posts, error } = postList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const postUpdate = useSelector((state) => state.postUpdate);
    const { success: successUpdate } = postUpdate;

    const postDelete = useSelector((state) => state.postDelete)
    const { success: successDelete } = postDelete

    const deleteHandler = (id) => {
        dispatch(deletePostAction(id));
    }

    useEffect(() => {
        dispatch(listPosts())
        if (!userInfo) {
            navigate("/")
        }
    }, [dispatch, userInfo, successUpdate, successDelete])



    return (
        <Row xs={1} md={posts == "" ? 12 : 4} className="allPosts g-4">
            {posts == "" && <h2>You don't have any post yet. Please go back and create one.</h2>}
            {posts?.reverse().map((post) => (
                <Col key={post._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body style={{ paddin: '10px 0' }}>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                            <Badge>{post.category}</Badge>
                            <div className="postButtons">
                                <Button variant="primary" size="sm" href={`/blog/posts/${post._id}`}>Update</Button>
                                <Button variant="outline-primary" size="sm" onClick={() => deleteHandler(post._id)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default Posts;
