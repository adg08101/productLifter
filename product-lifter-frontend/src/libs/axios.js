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
