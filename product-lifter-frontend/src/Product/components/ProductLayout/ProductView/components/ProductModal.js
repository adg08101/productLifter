import React from "react";
import { Button, Modal, Media, Image, Content } from "react-bulma-components";

const ProductModal = function ProductModal({ show, closeFunction }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>Title</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item align="left" renderAs="figure">
                <Image
                  alt="64x64"
                  size={64}
                  src="http://bulma.io/images/placeholders/128x128.png"
                />
              </Media.Item>
              <Media.Item>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    If the children of the Modal is a card, the close button
                    will be on the Card Head instead than the top-right corner
                    You can also pass showClose = false to Card.Head to hide the
                    close button
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer align="right" hasAddons>
            <Button color="success">Add</Button>
            <Button color="danger" onClick={closeFunction}>
              Close
            </Button>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductModal;
