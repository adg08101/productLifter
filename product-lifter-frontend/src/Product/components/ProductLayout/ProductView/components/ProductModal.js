import React, { useState } from "react";
import { Button, Modal, Form, Heading } from "react-bulma-components";

const ProductModal = function ProductModal({ show, closeFunction }) {
  return (
    <>
      <Modal show={show}>
        <form>
          <Modal.Content>
            <Modal.Card>
              <Modal.Card.Header>
                <Heading subtitle>Add new product</Heading>
              </Modal.Card.Header>
              <Modal.Card.Body>
                <Form.Field kind="group">
                  <Form.Label>Upload product picture</Form.Label>
                  <Form.Control>
                    <div className="file has-name is-boxed">
                      <label className="file-label">
                        <input className="file-input" type="file" name="resume" />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label"> Choose a file… </span>
                        </span>
                        <span className="file-name">
                          {" "}
                          Screen Shot 2017-07-29 at 15.54.25.png{" "}
                        </span>
                      </label>
                    </div>
                  </Form.Control>
                  <Form.Control>
                    <label className="checkbox">
                      <input type="checkbox" /> Active
                    </label>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product description</Form.Label>
                  <Form.Control>
                    <textarea
                      className="textarea"
                      placeholder="e.g. Hello world"
                    ></textarea>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product name</Form.Label>
                  <Form.Control>
                    <input className="input" type="text" placeholder="Text input" />
                  </Form.Control>
                </Form.Field>
                <Form.Field kind="group">
                  <Form.Label>Select product category</Form.Label>
                  <Form.Control>
                    <div className="select">
                      <select>
                        <option>Audio</option>
                        <option>Video</option>
                      </select>
                    </div>
                  </Form.Control>
                  <Form.Label>Select product brand</Form.Label>
                  <Form.Control>
                    <div className="select">
                      <select>
                        <option>JBL</option>
                        <option>JVC</option>
                      </select>
                    </div>
                  </Form.Control>
                </Form.Field>
                <Form.Field kind="group" classNameName="is-pulled-left">
                  <Form.Label>Write product quantity</Form.Label>
                  <Form.Control style={{ width: 20 + "%" }}>
                    <input
                      className="input"
                      type="number"
                      placeholder="Text input"
                      min={0}
                    />
                  </Form.Control>

                  <Form.Label>Write product price</Form.Label>
                  <Form.Control style={{ width: 20 + "%" }}>
                    <input
                      className="input"
                      type="number"
                      placeholder="Text input"
                      min={0}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product price/cents</Form.Label>
                  <Form.Control>
                    <input
                      className="input"
                      type="range"
                      min={0}
                      max={100}
                      placeholder="Text input"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field kind="group">
                  <Form.Label>Write product ratings rate/count</Form.Label>
                  <Form.Control>
                    <div className="select">
                      <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </Form.Control>

                  <Form.Control>
                    <div className="select">
                      <select>
                        <option>- 100</option>
                        <option>100 - 200</option>
                        <option>200 - 500</option>
                        <option>500 - 1000</option>
                        <option>+ 1000</option>
                      </select>
                    </div>
                  </Form.Control>
                </Form.Field>
              </Modal.Card.Body>
              <Modal.Card.Footer>
                <Form.Field kind="group">
                  <Form.Control>
                    <Button color="link">Submit</Button>
                  </Form.Control>
                  <Form.Control>
                    <Button
                      color="link"
                      colorVariant="light"
                      onClick={closeFunction}
                    >
                      Cancel
                    </Button>
                  </Form.Control>
                </Form.Field>
              </Modal.Card.Footer>
            </Modal.Card>
          </Modal.Content>
        </form>
      </Modal>
    </>
  );
};

export default ProductModal;
