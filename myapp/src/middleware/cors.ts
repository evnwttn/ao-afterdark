//@ts-ignore
export function cors(req, res, next) {
  console.log("cors middleware");
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });

  next();
}
