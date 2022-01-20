const bank = [
  { msg: "missing params", code: 400 },
  { msg: "internal server errors", code: 500 },
  { msg: "unrecognizable word", code: 400 },
  { msg: "DB issues", code: 500 },
  { msg: "Not Found!", code: 404 },
];
const errorHandler = (error, req, res, next) => {
  const { msg, code } = bank.filter(({ msg }) => msg === error)[0];
  if (!msg) return res.status(500).send("something went wrong!");
  res.status(code).send(msg);
};

module.exports = errorHandler;
