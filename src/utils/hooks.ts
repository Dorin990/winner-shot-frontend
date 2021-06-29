import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

export const useSecureFetch = (path: string) => {
  const { getAccessTokenSilently } = useAuth0();

  const result = useCallback(async () => {
    const token = getAccessTokenSilently();
    try {
      return await fetch(`${process.env.REACT_APP_SERVER_URL}/${path}`, {
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        if (!response.ok) throw new Error(`[Secure Fetch]: Failed ${path}`);
        return response.json();
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [getAccessTokenSilently, path]);

  return result;
};
