import { Container,Row,Col } from "react-bootstrap";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3'>Mutual fund Protfolio manager &copy; {currentYear} </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;