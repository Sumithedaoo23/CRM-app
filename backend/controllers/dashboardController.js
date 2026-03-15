

// @desc    Get admin dashboard stats
const getAdminDashboardStats = async (req, res) => {
  try {
    res.json({ message: 'Admin dashboard stats endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user dashboard stats
const getUserDashboardStats = async (req, res) => {
  try {
    res.json({ message: 'User dashboard stats endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdminDashboardStats,
  getUserDashboardStats
};