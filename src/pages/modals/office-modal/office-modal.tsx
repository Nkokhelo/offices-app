import { Button, Col, Form, Modal, Stack } from "react-bootstrap";
import './office-modal.scss'
import { useForm } from "react-hook-form";
import Header from "../../../components/modal-header/modal-header";
import { colors, OfficesService } from "../../../services";
import { Office } from "../../../services/models/intefaces";
import { errorMessages } from "../../../services/constants/constants";
import { useEffect, useState } from "react";

function OfficeModal() {
  const officeService = new OfficesService();
  const { register, handleSubmit, formState: {errors}, setValue} = useForm<Office>();
  const [visible, setVisible] = useState(false);
  const onSubmit = handleSubmit(async (office) => {
    try {
      await officeService.add(office);
      setVisible(false);
    } catch ({message}) {
      console.log(message);
    }
  }); 
  return (
    <Modal show={visible} fullscreen={true}>
      <Header hasBack={true} title={"New Office"} titleCentered={true} />
      <Modal.Body className="d-flex flex-column">
          <Form className="mb-auto">
            <Form.Group className="mb-4" controlId="name">
              <Form.Control {...register("name", {required: true})} type="email" placeholder="Office Name" {...register("name", {required: true})}/>
              {errors.name && <ErrorMessage field={errors.name} />}
            </Form.Group>
            <Form.Group className="mb-4" controlId="address">
              <Form.Control {...register("address", {required: true})} type="text" placeholder="Physical Address" />
              {errors.address && <ErrorMessage field={errors.address} />}
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Control {...register("email", {required: true})} type="text" placeholder="Email Address" />
              {errors.email && <ErrorMessage field={errors.email} />}
            </Form.Group>
            <Form.Group className="mb-4" controlId="phone">
              <Form.Control {...register("phone", {required: true})} type="text" placeholder="Phone Number" />
              {errors.phone && <ErrorMessage field={errors.phone} />}
            </Form.Group>
            <Form.Group className="mb-4" controlId="capacity">
              <Form.Control {...register("capacity", {required: true, min: 3})} type="number" placeholder="Maximum Capacity" />
              {errors.capacity && <ErrorMessage field={errors.capacity} />}
            </Form.Group>
            <Form.Group className="mt-4 mb-4" controlId="Office Color">
              <h3>Office Color</h3>
              <Col className="d-flex flex-wrap gap-4 justify-content-center" >
                {/* {colors.map(col => <Color color={col} onClick={(col:string) => setValue("color",  col)}/>)} */}
                <input type="hidden" {...register("color", {required : true})}/>
                {colors.map(col => <Color color={col} setColor={(col:any) => setValue("color", col)}/>)}
              </Col>
              {errors.color && <ErrorMessage field={errors.color} />}
            </Form.Group>
          </Form>
          <Stack className="align-items-center h-20">
            <Button variant="primary" className="w-75" onClick={onSubmit}>ADD OFFICE</Button>
          </Stack>
      </Modal.Body>
    </Modal>
  );
}

function ErrorMessage({field}:any) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage(errorMessages.get(field.type)!);
  }, [field.type]);
  return (!field) ? null : <Form.Text className="text-muted">{message}</Form.Text>;
}

const Color = ({color, setColor}: any) =>  
  <Button className="colorBtn rounded-circle" style={{background: color}} onClick={() => {setColor(color)}}></Button>

export default OfficeModal;
