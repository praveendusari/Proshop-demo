import { useParams } from "react-router-dom";
import products from "../products";
import {Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Button,Card} from 'react-bootstrap';

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === parseInt(productId));
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
        Go Back</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Price: ${product.price}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Description: {product.desciption}</h3>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            </Row>
    </>
  )
}

export default ProductScreen