import express, {
  type NextFunction,
  type Request,
  type Response
} from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as DiscordStrategy, type Profile } from "passport-discord";
import {
  Scope,
  type User,
  type VerifyCallback
} from "@oauth-everything/passport-discord";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  console.log("Deserializing user", obj);
  done(null, obj);
});
let user: Profile | null = null;

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: process.env.CLIENT_REDIRECT_URI!,
      scope: [Scope.IDENTIFY, Scope.GUILDS],
      passReqToCallback: true
    },
    (
      _req: Request,
      _accessToken: string,
      _params: any,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback<User>
    ) => {
      user = profile;
      done(null, profile as any);
    }
  )
);

const server = express();
server.use(session({ secret: process.env.secret! }));
server.use(passport.initialize());
server.use(passport.session());

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true
  })
);

server.get("/auth/discord/login", passport.authenticate("discord"));
server.get("/auth/discord/logout", (req: Request, res: Response) => {
  if (req.user) {
    req.logout(() => {
      user = null;
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(200);
  }
});

server.get(
  "/auth/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: process.env.SITE_URL,
    successRedirect: process.env.SITE_URL
  })
);

server.get("/me", (req: Request, res: Response) => {
  if (user) {
    res.status(200).json(user);
  } else res.status(401).json({ error: "Not authenticated" });
});
function isAuth(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
}

export { server };
