
import { Container } from 'react-bootstrap';
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import '../public/assets/css/style.css'
export default function Pages() {
  return (
    <Container fluid>
      <Header/>
      <Home />
    </Container>

  )
}
