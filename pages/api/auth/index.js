export default function handler(req, res) {
  console.debug("/api/auth/index", req.query);
  const responseUrl = `${req.query?.redirect_uri}?code=${"fdgggggfg"}&state=${
    req.query?.state
  }`;
  const redirectUrl = `/auth/login?response_url=${encodeURIComponent(
    responseUrl
  )}`;
  console.debug("redirect:", redirectUrl);
  return res.redirect(redirectUrl);
}
