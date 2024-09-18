import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './Component/ContactForm';
import { Container,Row,Col } from 'react-bootstrap';
import ContactList from './Component/ContactList';

function App() {
  return (
    <div className='app'>
      <h1 className='title'> Phone Book </h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
