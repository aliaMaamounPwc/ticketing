import axios from "axios";

const buildClient = (context) => {
  if (typeof window === "undefined") {
    // we are on the server
    // request should be made to http://[SERVICENAME].[NAMESPACE].svc.cluster.local
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: context.req.headers,
    });
  } else {
    // we are on the browser
    // requests can be made with a base url of ''
    return axios.create({
      basUrl: "/",
    });
  }
};
export default buildClient;
