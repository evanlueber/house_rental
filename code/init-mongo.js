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
