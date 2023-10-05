import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", { withCredentials: true });

    setAuth((previous) => {
      console.log(JSON.stringify(previous));
      console.log(response.data.accesstoken);

      return { ...previous, accessToken: response.data.accesstoken };
    });

    return response.data.accesstoken;
  };

  return refresh;
};

export default useRefreshToken;
