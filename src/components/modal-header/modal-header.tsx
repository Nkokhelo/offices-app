import './modal-header.scss';
import { Modal, Stack } from "react-bootstrap";
import { BackIcon, CloseIcon } from "../../assets/icons";

function Header({title, hasBack = false, titleCentered = false, closeButton= false}: any) {
  return (
    <Modal.Header>
      <Modal.Title className="header w-100">
        <Stack direction="horizontal">
          {hasBack && <BackIcon />}
          <span className={`w-100 ${titleCentered ? "text-center" : ""}`}>{title}</span>
          {closeButton && <CloseIcon />}
        </Stack>
      </Modal.Title>
    </Modal.Header>
  );
}

export default Header;