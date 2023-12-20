const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", require("./routes/productsRoute"));
app.listen(3000, () => {
  console.log("router listening on port 3000");
});
