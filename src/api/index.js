import request from "../utils/request";
export const fsearch = (params) => {
  return request({
    url: "/api/show/fSearch",
    method: "get",
    params,
  });
};
