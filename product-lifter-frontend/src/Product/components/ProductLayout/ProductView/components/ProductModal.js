import React, { useState } from "react";
import { Button, Modal, Form, Heading, Box } from "react-bulma-components";

const ProductModal = function ProductModal({ show, closeFunction }) {
  const [seeRatings, setSeeRatings] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    images: "",
    image: "",
    brand: "",
    sku: "",
    ratings: {},
    isActive: false,
  });

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    type === "checkbox"
      ? setFormValues({ ...formValues, [name]: checked })
      : setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

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
                        <input
                          className="file-input"
                          type="file"
                          name="image"
                          value={formValues.image}
                          onChange={handleChange}
                          multiple
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label"> Choose a file… </span>
                        </span>
                        <span className="file-name">{formValues.image}</span>
                      </label>
                    </div>
                  </Form.Control>
                  <Form.Control>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={formValues.isActive}
                        onChange={handleChange}
                      />{" "}
                      Active
                    </label>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product description</Form.Label>
                  <Form.Control>
                    <textarea
                      className="textarea"
                      placeholder="Product description"
                      name="description"
                      value={formValues.description}
                      onChange={handleChange}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Write product name</Form.Label>
                  <Form.Control>
                    <input
                      type="text"
                      className="input"
                      placeholder="Product name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field kind="group">
                  <Form.Label>Select product category</Form.Label>
                  <Form.Control>
                    <div className="select">
                      <select
                        name="category"
                        value={formValues.category}
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>Audio</option>
                        <option>Video</option>
                      </select>
                    </div>
                  </Form.Control>
                  <Form.Label>Select product brand</Form.Label>
                  <Form.Control>
                    <div className="select">
                      <select
                        name="brand"
                        value={formValues.brand}
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>JBL</option>
                        <option>JVC</option>
                      </select>
                    </div>
                  </Form.Control>
                </Form.Field>
                <Form.Field kind="group" className="is-pulled-left">
                  <Form.Label>Write product stock</Form.Label>
                  <Form.Control style={{ width: 20 + "%" }}>
                    <input
                      name="stock"
                      value={formValues.stock}
                      onChange={handleChange}
                      className="input"
                      type="number"
                      placeholder="Text input"
                      min={0}
                    />
                  </Form.Control>

                  <Form.Label>Write product price</Form.Label>
                  <Form.Control style={{ width: 20 + "%" }}>
                    <input
                      name="price"
                      value={formValues.price}
                      onChange={handleChange}
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
                <Box>
                  <Form.Label
                    style={{ cursor: "pointer" }}
                    onClick={() => setSeeRatings(!seeRatings)}
                  >
                    Product ratings
                  </Form.Label>
                  {seeRatings ? (
                    <Form.Field kind="group">
                      <Form.Label>Write product ratings rate/count</Form.Label>
                      <Form.Control>
                        <div className="select">
                          <select>
                            <option></option>
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
                            <option></option>
                            <option>- 100</option>
                            <option>100 - 200</option>
                            <option>200 - 500</option>
                            <option>500 - 1000</option>
                            <option>+ 1000</option>
                          </select>
                        </div>
                      </Form.Control>
                    </Form.Field>
                  ) : null}
                </Box>
              </Modal.Card.Body>
              <Modal.Card.Footer>
                <Form.Field kind="group">
                  <Form.Control>
                    <Button type="submit" onClick={handleSubmit} color="link">
                      Submit
                    </Button>
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
