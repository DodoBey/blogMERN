import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import "./Posts.css";
import axios from 'axios';


const Posts = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {

    }

    const fetchPosts = async () => {
        const { data } = await axios.get('/api/notes');
        setNotes(data);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <Row xs={1} md={4} className="allPosts g-4">
            {notes.map((note) => (
                <Col key={note._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body style={{ paddin: '10px 0' }}>
                            <Card.Title>{note.title}</Card.Title>
                            <Card.Text>
                                {note.content}
                            </Card.Text>
                            <Badge>{note.category}</Badge>
                            <div className="postButtons">
                                <Button variant="primary" size="sm" href={`/blog/posts/${note._id}`}>Update</Button>
                                <Button variant="outline-primary" size="sm" onClick={deleteHandler}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default Posts
