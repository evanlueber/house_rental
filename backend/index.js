const express = require("express");
const http = require("http");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const server = http.createServer(app);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }

  const user = await db.login(email, password);

  if (user) {
    return res.json({ success: true, message: "Logged in", user });
  } else {
    return res.json({ success: false, message: "Invalid credentials" });
  }
});

app.post("/register", async (req, res) => {
  const { email, password, name, address, city, postalCode } = req.body;

  if (!email || !password || !name || !address || !city || !postalCode) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }

  const user = await db.checkUser(email);

  if (user) {
    return res.json({ success: false, message: "User already exists" });
  }

  const newUser = await db.register(
    email,
    name,
    password,
    address,
    city,
    postalCode
  );
  if (!newUser) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  return res.json({ success: true, message: "Register successful", user });
});

app.get("/entrys", async (req, res) => {
  const entrys = await db.getEntrys();
  if (!entrys) {
    return res.json({ success: false, message: "No entrys found" });
  }
  return res.json({ success: true, entrys });
});

app.get("/entry/:id", async (req, res) => {
  const entry = await db.getEntry(req.params.id);
  if (!entry) {
    return res.json({ success: false, message: "No entry found" });
  }
  return res.json({ success: true, entry });
});

app.get("/entrys/:userId", async (req, res) => {
  const entrys = await db.getEntrysByUserId(req.params.userId);
  if (!entrys) {
    return res.json({ success: false, message: "No entrys found" });
  }
  return res.json({ success: true, entrys });
});

app.post("/entry", async (req, res) => {
  const { userId, title, description, address, city, postal, price, rooms, image, amenities } = req.body;

  if (!title || !description || !address || !city || !postal || !price || !rooms || !image || !userId) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const entry = await db.createEntry(
    title,
    description,
    address,
    city,
    postal,
    price,
    rooms,
    image,
    userId,
    amenities
  );

  if (!entry) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  return res.json({ success: true, message: "Entry added", entry });
});


server.listen(port, () => console.log(`Listening on port ${port}`));
