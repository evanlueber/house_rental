export default function POST(req) {
    const { username, password, name, address, city, postalCode } = req.body;
  
    if (!username || !password || !name || !address || !city || !postalCode) {
      return res
        .json({ success: false, message: "Username and password are required" });
    } 
}