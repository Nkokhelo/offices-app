import './Home.scss'
import OfficeCard from "../../components/OfficeCard/OfficeCard";
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container className='home'>
      <Row className="header">
        <Col><h3 className='header'>All Offices</h3></Col>
      </Row>
      <Row>
        <Col><OfficeCard/></Col>
      </Row>
    </Container>
  )
}

export default Home;