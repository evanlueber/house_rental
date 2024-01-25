  export default function POST(req) {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res
        .json({ success: false, message: "Username and password are required" });
    }
};