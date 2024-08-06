import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
const backendUrl =
  "https://l2xmhwevluiaksp2je4beppkpq0xzhqq.lambda-url.us-east-1.on.aws/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, session_id, username } = req.body;

  try {
    const response = await axios.post(backendUrl, {
      prompt: prompt,
      session_id: session_id,
      username: username,
    });

    const data = response.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error" });
  }
}
