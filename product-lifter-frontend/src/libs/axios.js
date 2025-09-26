import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/getAllProducts`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveProduct(data) {
  try {
    console.log(data);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    const response = await axios({
      url: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/product`,
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
