import './OfficesCard.scss'
import { ReactComponent as PenIcon } from '../../assets/icons/pen.svg' 
import { Card, Col, Row } from "react-bootstrap";

export default function OfficeCard() {
  return (
    <Card className="officeCard">
      <Card.Header>
        <Row>
          <Col xs={10}>
            <h3 className="officeHeader">Specno</h3>
          </Col>
          <Col xs={2}>
            <PenIcon/>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        
      </Card.Body>
    </Card>
  )
}
