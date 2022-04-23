import "./OfficesCard.scss";
import { Card, Stack, Accordion } from "react-bootstrap";
import {
  EmailIcon,
  LocationIcon,
  PenIcon,
  PeopleIcon,
  PhoneIcon,
  PlainPIcon,
} from "../../assets/icons";
import { oCardProps } from "../../services/props/props";

export default function OfficeCard({office} : oCardProps) {
  return (
    <Card className="officeCard" style={{ borderLeft: "red 15px solid" }}>
      <Header name={office.name} staff={5} />
      <Body  phone={office.phone} email={office.email} capacity={office.capacity} address={office.address}/>
    </Card>
  );
}

const Header = ({ name, staff }: any) => (
  <Card.Header>
    <Stack direction="horizontal">
      <h3 className="officeHeader">{name}</h3>
      <PenIcon className="ms-auto" />
    </Stack>
    <Stack direction="horizontal">
      <PeopleIcon />
      <span className="count">
        <b>{staff}</b> Staff Members in the office
      </span>
    </Stack>
  </Card.Header>
);

const Body = ({phone, email, capacity, address} : any) => (
  <Card.Body>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>More Info</Accordion.Header>
        <Accordion.Body>
          <Stack direction="horizontal">
            <PhoneIcon /> <span>{phone}</span>
          </Stack>
          <Stack direction="horizontal">
            <EmailIcon /> <span>{email}</span>
          </Stack>
          <Stack direction="horizontal">
            <PlainPIcon /> <span>Office Capacity : {capacity}</span>
          </Stack>
          <Stack direction="horizontal">
            <LocationIcon /> <span>{address}</span>
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Card.Body>
);
