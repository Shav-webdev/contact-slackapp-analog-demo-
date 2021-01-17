import { GET } from "./api";
import { message } from "antd";

export const request = async (url, method = GET, body = null, headers = {}) => {
  try {
    const response = await fetch(url, { method, body, headers });
    if (response.status === 409) {
      throw new Error("Email already exist.");
    } else if (response.status === 422) {
      let result = await response.json();
      if (result.error) {
        result.error.map(el => {
          throw new Error(el);
        });
      }
    }else if (response.status === 401) {
      let result = await response.json();
      if (result?.message) {
          throw new Error(result?.message);
      }
    }

    return await response.json();
  } catch (e) {
    message.error(e.message || "Something went wrong !");
  }
};

export const setAuthDataToLocalStorage = responseAuth => {
  const expiresIn = new Date(
    new Date().getTime() + responseAuth.expiresIn * 1000
  );
  const authLS = {
    ...responseAuth,
    expiresIn,
  };
  localStorage.setItem("auth", JSON.stringify(authLS));
};

export const delay = time => {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
};
