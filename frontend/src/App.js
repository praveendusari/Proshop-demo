import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
const App = ()=>{
    return (

        <>
        <Header />
        <Container>
            <HomeScreen />
          </Container>
          <Footer />
        </>
    )
}

export default App;