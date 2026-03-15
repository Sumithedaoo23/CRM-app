
// @desc    Register admin
// @route   POST /api/auth/register-admin
const registerAdmin = async (req, res) => {
  try {
    res.json({ message: 'Register admin endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login admin
// @route   POST /api/auth/login-admin
const loginAdmin = async (req, res) => {
  try {
    res.json({ message: 'Login admin endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login-user
const loginUser = async (req, res) => {
  try {
    res.json({ message: 'Login user endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  try {
    res.json({ message: 'Get me endpoint', user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  loginUser,
  getMe
};