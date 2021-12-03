import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import ironConfig from "../../util/iron-config";

export default withIronSessionApiRoute(login, ironConfig);

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === "user1@user.com" && password === "123456") {
    const user = {
      id: 1,
      name: "User",
    };
    req.session.user = user;
    await req.session.save();
    res.status(200).json(user);
    return;
  }

  res.status(401).json({ message: "Unauthenticated" });
}

//Nest.js 

//- orders de pagamento
// - contas - token auth


//Next.js

//login - login - digite seu token - api routes -> Nest.js token
//cookie token

//verificar ordens de pagamento - api routes -> Nest.js header token 
