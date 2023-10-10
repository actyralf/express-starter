const rootHandler = (req, res) => {
  res.json({ message: "Welcome to the Express API" });
};

module.exports = { rootHandler };
