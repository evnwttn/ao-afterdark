export const corsOptions: any = {
  origin: "https://evnwttn.github.io",
  methods: "POST, PUT, GET, OPTIONS, HEAD",
  allowedHeaders: "Content-Type",
  credentials: true,
  maxAge: 5,
  preflightContinue: true,
};
