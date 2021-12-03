import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import ironConfig from "../../util/iron-config";

export default withIronSessionApiRoute(usersList, ironConfig);

async function usersList(req: NextApiRequest, res: NextApiResponse) {

  const {session} = req;

  if(!session.user){
    res.status(401).json({ message: "Unauthenticated" });
    return;
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  res.status(200).json(data);
}

// /api/hello
