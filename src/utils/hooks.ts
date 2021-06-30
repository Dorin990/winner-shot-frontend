import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

export const useSecureFetch = (path: string, method: string, data?: any) => {
  const { getAccessTokenSilently } = useAuth0();

  const result = useCallback(async () => {
    const token = await getAccessTokenSilently();
    return await fetch(`${process.env.REACT_APP_SERVER_URL}/${path}`, {
      method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    }).then((response) => {
      if (!response.ok) throw new Error(`[Secure Fetch]: Failed ${path}`);
      return response.json();
    });
  }, [data, getAccessTokenSilently, method, path]);

  return result;
};
