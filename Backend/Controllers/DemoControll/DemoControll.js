// Retrieve a single user by email (or any other unique field)
const getUserByEmail = async (req, res, next) => {
  const email = req.params.email;

  let user;
  try {
      // Search DemoStu by email
      user = await User.findOne({ email });
  } catch (err) {
      return res.status(500).json({ message: "Server error" });
  }

  // User not found
  if (!user) {
      return res.status(404).json({ message: "User not found" });
  }

  // Send user data as response
  return res.status(200).json({ user });
};

exports.getUserByEmail = getUserByEmail;
