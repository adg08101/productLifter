import React, { useState } from "react";
import { Button, Modal, Form, Heading } from "react-bulma-components";

const ProductModal = function ProductModal({ show, closeFunction }) {
  const [username, setUsername] = useState("bulma");
  const [email, setEmail] = useState("hello@");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [tocAgreed, setTocAgreed] = useState(false);
  const [questionValue, setQuestionValue] = useState("");

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
                <Form.Field>
                  <Form.Label>Upload product picture</Form.Label>
                  <Form.Control>
                    <div class="file has-name is-boxed">
                      <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label"> Choose a file… </span>
                        </span>
                        <span class="file-name">
                          {" "}
                          Screen Shot 2017-07-29 at 15.54.25.png{" "}
                        </span>
                      </label>
                    </div>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product description</Form.Label>
                  <Form.Control>
                    <textarea
                      class="textarea"
                      placeholder="e.g. Hello world"
                    ></textarea>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product name</Form.Label>
                  <Form.Control>
                    <input class="input" type="text" placeholder="Text input" />
                  </Form.Control>
                </Form.Field>
                <Form.Field kind="group">
                  <Form.Label>Select product category</Form.Label>
                  <Form.Control>
                    <div class="select">
                      <select>
                        <option>Audio</option>
                        <option>Video</option>
                      </select>
                    </div>
                  </Form.Control>
                  <Form.Label>Select product brand</Form.Label>
                  <Form.Control>
                    <div class="select">
                      <select>
                        <option>JBL</option>
                        <option>JVC</option>
                      </select>
                    </div>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product quantity</Form.Label>
                  <Form.Control>
                    <input
                      class="input"
                      type="number"
                      placeholder="Text input"
                      min={0}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product price</Form.Label>
                  <Form.Control>
                    <input
                      class="input"
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
                      class="input"
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
                    <div class="select">
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
                    <div class="select">
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
                <Form.Field>
                  <Form.Label>Active</Form.Label>
                  <Form.Control>
                    <label class="checkbox">
                      <input type="checkbox" /> Active
                    </label>
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
