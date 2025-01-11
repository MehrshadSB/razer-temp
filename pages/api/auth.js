const { serialize } = require("cookie");

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  const { email, password } = req.body;

  const result = await fetch("http://127.0.0.1:8000/account/login/", {
    method: "POST",
    body: JSON.stringify({ username: email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();

  if (data.access) {
    res
      .status(200)
      .setHeader("Set-Cookie", [
        serialize("accessToken", data.access, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 7 * 86400,
          sameSite: "Strict",
          path: "/",
        }),
        serialize("refreshToken", data.refresh, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          maxAge: 30 * 86400,
          path: "/",
        }),
      ])
      .json({ status: "success", message: "Cookies Set" });
  } else {
    res.status(400).json({ status: "faild", message: data.detail });
  }
}
