export const corsOptions: any = {
  origin: "https://evnwttn.github.io",
  methods: "POST, PUT, GET, OPTIONS",
  allowedHeaders: "Content-Type",
  credentials: true,
  maxAge: 5,
  preflightContinue: true,
};

// chrome & firefox
// postman / test end point
// swap out axios
