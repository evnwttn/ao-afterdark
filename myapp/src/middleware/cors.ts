export const corsOptions = {
  methods: "POST, PUT, GET, OPTIONS",
  allowedHeaders:
    "Access-Control-Allow-Headers, Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  credentials: true,
  preflightContinue: true,
};
