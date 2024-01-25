db = db.getSiblingDB("rentmyhome");

db.createCollection("users");

db.createCollection("entry");

db.users.insert({
  _id: ObjectId("5f9f9f9f9f9f9f9f9f9f9f9f"),
  name: "admin",
  email: "" + Math.random() + "@gmail.com",
  password: "admin",
  address: "adminstrasse 1",
  city: "adminCity",
  postalCode: "1111",
});

db.entry.insert({
  _id: ObjectId("5f9f9f9f9f9f9f9f9f9f9f9f"),
  title: "Test",
  description: "Test",
  price: 100,
  location: "Test",
  image: "Test",
  userId: ObjectId("5f9f9f9f9f9f9f9f9f9f9f9f"),
});


db.createUser({
  user: "rent",
  pwd: "rent123",
  roles: [
    {
      role: "readWrite",
      db: "rentmyhome",
    },
  ],
});
