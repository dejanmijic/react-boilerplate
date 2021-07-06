import Axios from "axios";

import { BROWSER_STORAGE_KEY_ACCESS_TOKEN } from "../../shared/constants/localStorageConstants";
import { SecurityHttpHeaders } from "../../shared/constants/securityHttpHeaders";
import { getValueForKeyInBrowserStorage } from "../shared/browserStorageService";
import { isSignInRoute } from "./util";

Axios.interceptors.request.use((req) => {
  if (isSignInRoute(req.url)) {
    return req;
  }

  const token = getValueForKeyInBrowserStorage(
    BROWSER_STORAGE_KEY_ACCESS_TOKEN
  );
  if (token) {
    req.headers[SecurityHttpHeaders.authorization] = `Bearer ${token}`;
  }

  return req;
});

Axios.interceptors.response.use(
  (data) => data,
  async (error) => {
    const { response } = error;

    if (response && response.status === 502) {
        // TODO: Handle 502 Error Do logout or something (redirect)
    }
    if (response && response.status === 401) {
      // TODO: Handle 401 Error Do logout or something (redirect)
    }

    return Promise.reject(error);
  }
);
