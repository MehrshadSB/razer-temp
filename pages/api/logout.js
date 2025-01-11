import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "GET") return;

  res
    .status(200)
    .setHeader("Set-Cookie", [
      serialize("accessToken", "", { maxAge: 0, path: "/" }),
      serialize("refreshToken", "", { maxAge: 0, path: "/" }),
    ])
    .json({ status: "success", message: "you loged out!" });
}
