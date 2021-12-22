import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

function HomeScreen() {
    return (
        <div>
            <h1>Latest products
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
                       <Product product={product} />
                        </Col>
                    ) )}
                </Row>

            </h1>
        </div>
    )
}

export default HomeScreen
