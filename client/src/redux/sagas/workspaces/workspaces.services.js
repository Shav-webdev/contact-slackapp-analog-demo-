import { request } from "../../../services";
import { DELETE, GET, POST, PUT, WORKSPACE_URL } from "../../../services/api";
import qs from "query-string";

const baseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Expose-Headers": "authorization",
  "Content-Type": "application/json",
};

export async function createWorkspace(data) {
  const { body, token } = data;
  const headers = {
    ...baseHeaders,
    Authorization: token,
  };
  return request(WORKSPACE_URL, POST, JSON.stringify(body), headers);
}
export async function getWorkspace(workspaceId) {
  return request(`${WORKSPACE_URL}/${workspaceId}`);
}
export async function updateWorkspace(data) {
  const { body, param, token } = data;
  const headers = {
    ...baseHeaders,
    Authorization: token,
  };
  return request(
    `${WORKSPACE_URL}/${param}`,
    PUT,
    JSON.stringify(body),
    headers
  );
}
export async function deleteWorkspace(data) {
  const { workspaceId, token } = data;
  const headers = {
    ...baseHeaders,
    Authorization: token,
  };
  return request(`${WORKSPACE_URL}/${workspaceId}`, DELETE, null, headers);
}
export async function getWorkspaces(data) {
  const { token } = data;
  const headers = {
    ...baseHeaders,
    Authorization: token,
  };
  return request(`${WORKSPACE_URL}/all`, GET, null, headers);
}
