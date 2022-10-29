export const sessionOptions = {
  secret: "test321",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};
