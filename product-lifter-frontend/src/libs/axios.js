import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/getAllProducts`,
      method: "GET",
    });

    return response;
  } catch (e) {
    return e;
  }
}

export async function saveProduct(data) {
  try {
    const formData = new FormData();

    formData.append("name", String(data.name).trim());
    formData.append("description", String(data.description).trim());
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("image", data.image);
    formData.append("brand", data.brand);
    formData.append("sku", data.sku);
    formData.append("ratings", data.ratings);
    formData.append("isActive", data.isActive);

    const response = await axios({
      url: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/product`,
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    return e;
  }
}

export async function deleteProduct(data) {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/product`,
      method: "DELETE",
      data: data,
    });

    return response;
  } catch (e) {
    return e;
  }
}
