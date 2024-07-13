const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe')

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3001;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({

  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
  address: String,
});

//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});


app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
      const existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
          res.status(400).json({ message: "Email id is already registered", alert: false });
      } else {
        //  saving in database
          const newUser = new userModel(req.body);
          await newUser.save();

          res.status(201).json({ message: "Successfully signed up", alert: true });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
});


// api login
app.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;
      
      const user = await userModel.findOne({ email: email });

      if (user) {
          if (password === user.password) {
              const userData = {
                  _id: user._id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  image: user.image,
              };
              res.status(200).json({ message: "Login successful", alert: true, data: userData });
          } else {
              res.status(401).json({ message: "Incorrect password", alert: false });
          }
      } else {
          res.status(404).json({ message: "Email not found, please sign up", alert: false });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
});


//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product",schemaProduct)



//save product in data 
//api
app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({message : "Upload successfully"})
})

//
app.get("/product",async(req,res)=>{
  const data = await productModel.find({})
  res.send(JSON.stringify(data))
})



// stripe payment gateway


const stripe = require('stripe')('sk_test_your_key');

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { body } = req;

    // Validate request body
    if (!Array.isArray(body) || body.length === 0) {
      return res.status(400).json({ error: "Invalid or empty request body" });
    }

    const { email } = body;

    // Map line items for the checkout session
    const lineItems = body.map(item => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qty
    }));

    const params = {
      submit_type: 'pay',
      mode: "payment",
      payment_method_types: ['card'],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ['IN'],
      },
      line_items: lineItems,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      customer_email: email,
      shipping_address: {
        country: any
      }
    };

    //checkout session with stripe
    const session = await stripe.checkout.sessions.create(params);
    console.log("Session ID:", session.id);
    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
