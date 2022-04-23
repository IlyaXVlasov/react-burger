import { baseUrl } from "./App";

const PostOrder = async () => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ingredients: ["60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733cc"],
    }),
  };
  try {
    const response = await fetch(`${baseUrl}/orders`, request);
    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${baseUrl}, статус ошибки ${response.status}`
      );
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.error(error);
  }
};

export default PostOrder;
