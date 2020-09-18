import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakedata from '../../fakedata/index'
import Header from '../Header/Header';

const Book = () => {
    const history = useHistory();
    const handleclick = (id) => {
        const url = `/destination/${id}`;
        history.push(url)

    }
    const { bookid } = useParams();
    const bookData = fakedata.find(data => data.id === bookid)
    const { name, id, description, origin, destination } = bookData;
    return (
        <div className="homeimage">

            <div>
                <Header></Header>

            </div>
            <div className="container">
                <div className="row" style={{ color: 'white', marginTop: '100px' }}>
                    <div className="col-md-6">
                        <h1 >
                            {name}
                        </h1>
                        <br />
                        {description}
                    </div>


                    <div className="col-md-6 bg-white" style={{ border: '1px solid white', borderRadius: '5px' }}>

                        <Form>
                            <Form.Group>
                                <Form.Label style={{ color: 'gray' }}>Origin</Form.Label>
                                <Form.Control type="text" placeholder={origin} disabled />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label style={{ color: 'gray' }}>Destination</Form.Label>
                                <Form.Control type="text" placeholder={destination} disabled />
                            </Form.Group>
                            <Form.Group >
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Form.Label style={{ color: 'gray' }}>From</Form.Label>
                                        <Form.Control type="date" placeholder={destination} />
                                    </div>
                                    <div>
                                        <Form.Label style={{ color: 'gray' }}>To</Form.Label>
                                        <Form.Control type="date" placeholder={destination} />
                                    </div>

                                </div>

                            </Form.Group>

                        </Form>
                        <div className="d-flex justify-content-center">
                            {/* <Link to ={`/destination/${id}`}>Confirm Now</Link> */}
                            <Button onClick={() => handleclick(id)} variant="warning"> Booking Now </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Book;