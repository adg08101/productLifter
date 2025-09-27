import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  Heading,
  Box,
  Block,
  Notification,
} from "react-bulma-components";

const ProductModal = function ProductModal({
  show,
  closeFunction,
  submitFunction,
}) {
  const generateSku = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 11; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const inputFileRef = useRef();

  const defaultState = (sku) => {
    return {
      name: "",
      description: "",
      price: 0,
      category: "",
      stock: 0,
      images: "",
      brand: "",
      sku: "",
      ratings: {},
      isActive: false,
      sku: sku,
    };
  };

  const [seeRatings, setSeeRatings] = useState(false);
  const [seeSku, setSeeSku] = useState(false);
  const [formValues, setFormValues] = useState(defaultState(generateSku()));
  const [hasImage, setHasImage] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseStyle, setResponseStyle] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    type === "checkbox"
      ? setFormValues({ ...formValues, [name]: checked })
      : setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await submitFunction({
      ...formValues,
      image: inputFileRef.current.files[0],
    });

    setResponse(response);
    if (response.status === 201) {
      setResponseStyle("success");
      setResponseMessage("Product successfully added");
      setTimeout(() => {
        setResponse(null);

        handleReset();
      }, 5000);
    } else {
      setResponseMessage(response.response.data.error);
      setResponseStyle("danger");
    }
  };

  const checkHasImage = () => {
    try {
      return inputFileRef.current.files.length > 0;
    } catch {
      return false;
    }
  };

  const handleReset = () => {
    setResponse(null);
    setFormValues(defaultState(generateSku()));
    setHasImage(checkHasImage());
  };

  useEffect(() => {
    handleReset();
  }, [show]);

  return (
    <>
      <Modal show={show}>
        <form>
          <Modal.Content>
            <Modal.Card>
              <Modal.Card.Header>
                {response ? (
                  <Block>
                    <Notification color={responseStyle}>
                      {response ? responseMessage : null}
                    </Notification>
                  </Block>
                ) : (
                  <Heading subtitle>Add new product</Heading>
                )}
              </Modal.Card.Header>
              <Modal.Card.Body>
                <Box>
                  <Form.Label
                    style={{ cursor: "pointer" }}
                    onClick={() => setSeeSku(!seeSku)}
                  >
                    Product id
                  </Form.Label>
                  {seeSku ? (
                    <Form.Field>
                      <Form.Label>Use / Update random created id</Form.Label>

                      <Form.Control>
                        <input
                          type="text"
                          className="input"
                          placeholder="Product sku"
                          name="sku"
                          value={formValues.sku}
                          onChange={handleChange}
                        />
                      </Form.Control>
                    </Form.Field>
                  ) : null}
                </Box>
                <Form.Field kind="group">
                  <Form.Label>Upload product picture</Form.Label>
                  <Form.Control>
                    <div className="file has-name is-boxed">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="image"
                          ref={inputFileRef}
                          onChange={() => setHasImage(checkHasImage())}
                          accept="image/*"
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label">
                            {hasImage
                              ? "File chosen, change?"
                              : "Choose file..."}
                          </span>
                        </span>
                        <span className="file-name">
                          {checkHasImage()
                            ? inputFileRef.current.files[0].name
                            : null}
                        </span>
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
                  <Form.Control>
                    <Button
                      color="link"
                      colorVariant="danger"
                      onClick={handleReset}
                    >
                      Reset
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
