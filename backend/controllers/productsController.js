const products = require("../Products");
const crypto = require("crypto");

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);

};

exports.createProducts = (req, res) => {
  console.log("Received request body:", req.body);
  const { name, price, quantity, active } = req.body || {};

  console.log("Received request body:", req.body);

  if (!name) {
    return res.status(422).json({ message: "Name is required" });
  }
  const _id = crypto.randomUUID();
  products.push({
    _id: _id,
    name: name,
    price: price,
    quantity: quantity,
    active: active,
  });
  res.status(201).json({ message: "Product created sucessfully...", _id });
};

exports.getProductById = (req, res) => {
  const product = products.find((product) => product._id == req.params._id);

  if (!product) {
    // return res.status(204).send();

    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
};

exports.updateProduct = (req, res) => {
  const product = products.find((product) => product._id == req.params._id);

  if (!product) {
    // return res.status(204).send();
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, quantity, active } = req.body;

  if (name) {
    product.name = name;
  }

  if (price) {
    product.price = price;
  }

  if (quantity) {
    product.quantity = quantity;
  }
  if ("active" in req.body) {
    product.active = active;
  }
  res.status(200).json({ message: "Product updated sucessfully" });
};

exports.deleteProductById = (req, res) => {
  const productIdx = products.findIndex(
    (product) => product._id == req.params._id
  );

  if (productIdx == -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(productIdx, 1);

  res.status(200).json({ message: "Product deleted sucessfully" });
};