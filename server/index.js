const express = require("express");

const PORT = 3001;

const app = express();

const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "http://localhost:3001" })
  );
};

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});