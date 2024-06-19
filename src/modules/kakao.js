const REST_API_KEY = "1e3f9599d178ab2d2c030ea32f6142ff";
const REDIRECT_URI = "http://localhost:5173/main";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
                                client_id=${REST_API_KEY}
                                &redirect_uri=${REDIRECT_URI}
                                &response_type=code`;