const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/UserDB")
//mongodb://localhost:27017/users
//mongodb://localhost:27017/UserDB
  .then(() => { console.log("DB connection established successfully") })
  .catch((error) => { console.log("Error in connection: " + error) });

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const ProductSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    stock: { type: Number, default: 0 }
});


const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);


app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ msg: "Error in hashing password" });

        const newUser = new User({
            name,
            email,
            password: Password
        });

        newUser.save()
            .then(() => res.status(200).json({ msg: "User registered successfully" }))
            .catch((error) => res.status(400).json({ msg: "Error in registration: " + error }));
    });
});


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((user) => {
            if (!user) return res.status(404).json({ msg: "User not found" });

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) return res.status(500).json({ msg: "Error in password comparison" });

                if (result) {
                    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
                    res.status(200).json({ msg: "Login successful", token });
                } else {
                    res.status(400).json({ msg: "Invalid credentials" });
                }
            });
        })
        .catch((error) => res.status(400).json({ msg: "Error in login: " + error }));
});


app.post('/api/products', (req, res) => {
    const newProduct = new Product(req.body);

    newProduct.save()
        .then(() => res.status(200).json({ msg: "Product added successfully" }))
        .catch((error) => res.status(400).json({ msg: "Error in adding product: " + error }));
});


app.get("/api/products", (req, res) => {
    Product.find()
        .then((products) => {
            if (products.length > 0) {
                res.status(200).json({ products });
            } else {
                res.status(404).json({ msg: "No products found" });
            }
        })
        .catch((error) => res.status(400).json({ msg: "Error in retrieving products: " + error }));
});


app.get("/api/products/:id", (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            if (product) {
                res.status(200).json({ product });
            } else {
                res.status(404).json({ msg: "Product not found" });
            }
        })
        .catch((error) => res.status(400).json({ msg: "Error in retrieving product: " + error }));
});


app.put("/api/products/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedProduct) => {
            if (updatedProduct) {
                res.status(200).json({ msg: "Product updated successfully", updatedProduct });
            } else {
                res.status(404).json({ msg: "Product not found" });
            }
        })
        .catch((error) => res.status(400).json({ msg: "Error in updating product: " + error }));
});

app.delete("/api/products/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            if (deletedProduct) {
                res.status(200).json({ msg: "Product deleted successfully" });
            } else {
                res.status(404).json({ msg: "Product not found" });
            }
        })
        .catch((error) => res.status(400).json({ msg: "Error in deleting product: " + error }));
});


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});

