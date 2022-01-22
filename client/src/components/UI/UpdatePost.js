import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updatePostAction } from '../../actions/postsActions';
import ErrorMessage from './ErrorMessage';
import "./UpdatePost.css"

const UpdatePost = ({ match }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();
    const params = useParams()

    const dispatch = useDispatch();

    const postUpdate = useSelector((state) => state.postUpdate);
    const { error } = postUpdate;


    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/api/posts/${params.id}`)

            setTitle(data.title)
            setContent(data.content)
            setCategory(data.category)
        }
        fetching()
    }, [params.id])

    const resetHandler = () => {
        setTitle("")
        setContent("")
        setContent("")
    }

    const updateHandler = (e) => {
        e.preventDefault()
        dispatch(updatePostAction(params.id, title, content, category))

        if (!title || !content || !category) return

        resetHandler()
        navigate("/blog/posts")
    }

    return (
        <Row className="updatePost">
            <Card className='updateForm'>
                <Card.Header>Update Post</Card.Header>
                <Card.Body>
                    <Form onSubmit={updateHandler}>
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                value={title}
                                placeholder="Enter the title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={content}
                                placeholder="Enter the content"
                                rows={4}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="content">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="content"
                                value={category}
                                placeholder="Enter the Category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Update Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default UpdatePost
