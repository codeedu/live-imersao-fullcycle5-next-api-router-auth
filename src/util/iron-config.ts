const ironConfig = {
  password: "01234567890123456789012345678912345",
  cookieName: "fullcycle-cookie",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      name: string;
    };
  }
}

export default ironConfig;
