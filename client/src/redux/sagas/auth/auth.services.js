import { request } from "../../../services";
import {
  POST,
  AUTH_LOGIN_URL,
  AUTH_REGISTER_URL,
  AUTH_LOGOUT_URL,
} from "../../../services/api";

export async function register(body) {
  const headers = {
    "Content-Type": "application/json",
  };
  return request(AUTH_REGISTER_URL, POST, body, headers);
}

export async function login(body) {
  const headers = {
    "Content-Type": "application/json",
  };
  return request(AUTH_LOGIN_URL, POST, body, headers);
}
export async function authLogoutSession() {
  return request(`${AUTH_LOGOUT_URL}`);
}


