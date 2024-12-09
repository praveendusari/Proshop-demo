import React from 'react'
import products from '../../Products';
import { Row, Col } from 'react-bootstrap';
import Product from '../Product';

export const HomeScreen = () => {
  return (
    <div>
        <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product}></Product>
            </Col>
        ))}
        </Row>
    </div>
  )
}
