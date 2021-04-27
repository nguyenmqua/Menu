import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Item from "../components/Item"

const ModalExample = (props) => {
  const {
    buttonLabel,
    category
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info"className="categoryButton" block onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className="category" toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody className="modalBody">
            <Item category = {category} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;   