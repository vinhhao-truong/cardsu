// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ResDataType from "../../interfaces/ResDataType";

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResDataType>
) {
  if (req.method === "POST") {
    const userInfo = req.body.data;

    res.status(200).send({
      status: "success",
      data: {
        email: userInfo.email,
        password: userInfo.password,
      },
    });
  }
}
