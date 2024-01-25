export default function DELETE(req) {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out: " + err.stack);
      return res.json({ success: false, message: "Logout failed" });
    }
    return res.json({ success: true, message: "Logout successful" });
  });
};
