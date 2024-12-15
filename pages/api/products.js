async function handler(req, res) {
  
  if (req.method !== "GET") return;
  
  res.status(200).json({status: "success", message: "data Fetched"})
  
}

export default handler