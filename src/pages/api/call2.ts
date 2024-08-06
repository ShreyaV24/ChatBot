import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
const backendUrl =
  "https://mbfnk3bs7vc2tt2cwdwbcj2pyy0baumk.lambda-url.us-east-1.on.aws/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user_id, prompt, thread_id } = req.body;

  try {
    const response = await axios.post(backendUrl, {
      user_id: user_id,
      prompt: prompt,
      thread_id: thread_id,
    });

    const data = response.data;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error" });
  }
}
