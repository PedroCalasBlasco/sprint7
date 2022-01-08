import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({children, showModal, setShowModal}) =>{

    return(
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ModalComponent;