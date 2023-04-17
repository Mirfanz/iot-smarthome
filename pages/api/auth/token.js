export default function handler(req, res) {
  console.debug("/api/auth/token", req.body);
  const grantType = req.body.grant_type
    ? req.body.grant_type
    : req.body.grant_type;
  const secondsInDay = 86400; // 60 * 60 * 24
  const HTTP_STATUS_OK = 200;
  let token;
  if (grantType === "authorization_code") {
    // Mendapatkan authorization pertama kali
    token = {
      token_type: "bearer",
      access_token: "123access",
      refresh_token: "123refresh",
      expires_in: secondsInDay,
    };
  } else if (grantType === "refresh_token") {
    // Mendapatkan access_token yang baru dengan refresh_token
    token = {
      token_type: "bearer",
      access_token: "123access",
      expires_in: secondsInDay,
    };
  }
  console.debug("token:", token);
  res.status(HTTP_STATUS_OK).json(token);
}
