import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';
const App = ()=>{
    return (

        <>
        <Header />
        <Container>
            <Outlet></Outlet>
          </Container>
          <Footer />
        </>
    )
}

export default App;