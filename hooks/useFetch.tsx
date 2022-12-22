import { QueryKey, useQuery } from "@tanstack/react-query";
import getAPI from "../lib/fetchAPI";

interface fetchInterface {
  url: string;
  key: QueryKey;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: any;
  reqData?: any;
}
export default function useFetch({
  url,
  method,
  key,
  reqData,
  headers,
}: fetchInterface) {
  const query = useQuery(
    key,
    getAPI(url, method ? method : "GET", reqData, headers)
  );

  return { ...query };
}
