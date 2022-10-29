export const sessionOptions = {
  name: "test123",
  secret: "test321",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};
