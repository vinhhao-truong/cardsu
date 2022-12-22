import axios from "axios";

export const getAPI = (url: string) => async () => {
  const res = await axios.get(url);
  return res.data;
};

export const postAPI = (url: string, headers?: any) => async (data?: any) => {
  const reqData = data ? { data: data } : {};
  const reqHeaders = data ? { headers: headers } : {};

  const res = await axios.post(url, {
    ...reqData,
    ...reqHeaders,
  });
  return res.data;
};
