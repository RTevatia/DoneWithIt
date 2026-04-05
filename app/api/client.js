import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://10.0.0.4:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const originalGet = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await originalGet(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  if (data) return { ok: true, data };

  return response;
};

export default apiClient;
