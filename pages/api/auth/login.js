export default function handler(req, res) {
  console.debug("/api/auth/login", req.query, req.body);
  // console.log(req);
  // Here, you should validate the user account.
  // In this sample, we do not do that.
  const responseUrl = decodeURIComponent(req.body?.response_url);
  console.debug("redirect:", responseUrl);
  return res.status(200).json({
    response_url: responseUrl,
  });
}
