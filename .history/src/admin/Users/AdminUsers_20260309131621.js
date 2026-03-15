// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import userService from "../../services/userService";

// const AdminUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     role: "",
//     search: "",
//     page: 1,
//     limit: 10,
//   });
//   const [pagination, setPagination] = useState({
//     total: 0,
//     pages: 0,
//   });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [confirmName, setConfirmName] = useState("");
//   const [deleteError, setDeleteError] = useState("");
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [modalUser, setModalUser] = useState(null);
//   const [copySuccess, setCopySuccess] = useState("");

//   useEffect(
//     function () {
//       fetchUsers();
//     },
//     [filters.page, filters.role, filters.search],
//   );

//   const fetchUsers = async function () {
//     try {
//       setLoading(true);
//       var response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || "Failed to load users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = function (e) {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleExport = async function () {
//     try {
//       await userService.exportUsersPDF(filters);
//     } catch (err) {
//       alert("Failed to export users: " + (err.error || err.message));
//     }
//   };

//   const handleDeleteClick = function (user) {
//     setSelectedUser(user);
//     setConfirmName("");
//     setDeleteError("");
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async function () {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers();
//     } catch (err) {
//       setDeleteError(err.error || "Failed to delete user");
//     }
//   };

//   const handleAddUser = function () {
//     navigate("/admin/users/new");
//   };

//   const handleEditUser = function (id) {
//     navigate("/admin/users/" + id);
//   };

//   const handleViewUser = function (user) {
//     setModalUser(user);
//     setShowUserModal(true);
//   };

//   const closeModal = function () {
//     setShowUserModal(false);
//     setModalUser(null);
//     setCopySuccess("");
//   };

//   const handleCopyHyperlink = function () {
//     if (!modalUser) return;

//     navigator.clipboard
//       .writeText(
//         modalUser.userHyperlink || "https://crm.com/user/" + modalUser._id,
//       )
//       .then(function () {
//         setCopySuccess("✅ Hyperlink copied!");
//         setTimeout(function () {
//           setCopySuccess("");
//         }, 3000);
//       });
//   };

//   const handleCopyPassword = function () {
//     if (!modalUser) return;

//     navigator.clipboard
//       .writeText(modalUser.password || "********")
//       .then(function () {
//         setCopySuccess("✅ Password copied!");
//         setTimeout(function () {
//           setCopySuccess("");
//         }, 3000);
//       });
//   };

//   if (loading && users.length === 0) {
//     return React.createElement(
//       "div",
//       {
//         style: {
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           fontSize: "18px",
//           color: "#6b7280",
//         },
//       },
//       "Loading users...",
//     );
//   }

//   return React.createElement(
//     "div",
//     {
//       style: {
//         padding: "20px",
//         backgroundColor: "#f3f4f6",
//         minHeight: "100vh",
//         fontFamily: "system-ui, -apple-system, sans-serif",
//         width: "100%",
//         boxSizing: "border-box",
//       },
//     },
//     // Header Section
//     React.createElement(
//       "div",
//       {
//         style: {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "20px",
//           flexWrap: "wrap",
//           gap: "12px",
//           width: "100%",
//         },
//       },
//       React.createElement(
//         "h1",
//         {
//           style: {
//             fontSize: "24px",
//             fontWeight: "700",
//             color: "#111827",
//             margin: 0,
//           },
//         },
//         "User Management",
//       ),

//       React.createElement(
//         "div",
//         {
//           style: {
//             display: "flex",
//             gap: "10px",
//             flexWrap: "wrap",
//           },
//         },
//         React.createElement(
//           "button",
//           {
//             onClick: handleAddUser,
//             style: {
//               padding: "10px 16px",
//               backgroundColor: "#3b82f6",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               fontSize: "14px",
//               fontWeight: "500",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "6px",
//             },
//           },
//           "➕ Add New User",
//         ),

//         React.createElement(
//           "button",
//           {
//             onClick: handleExport,
//             style: {
//               padding: "10px 16px",
//               backgroundColor: "#10b981",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               fontSize: "14px",
//               fontWeight: "500",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "6px",
//             },
//           },
//           "📥 Export PDF",
//         ),
//       ),
//     ),

//     // Search and Filter
//     React.createElement(
//       "div",
//       {
//         style: {
//           backgroundColor: "#ffffff",
//           borderRadius: "8px",
//           padding: "16px",
//           marginBottom: "20px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//           width: "100%",
//           boxSizing: "border-box",
//         },
//       },
//       React.createElement(
//         "form",
//         {
//           onSubmit: handleSearch,
//           style: {
//             display: "flex",
//             gap: "12px",
//             flexWrap: "wrap",
//             alignItems: "flex-end",
//           },
//         },
//         React.createElement(
//           "div",
//           {
//             style: {
//               flex: "2",
//               minWidth: "200px",
//             },
//           },
//           React.createElement(
//             "label",
//             {
//               style: {
//                 display: "block",
//                 fontSize: "13px",
//                 fontWeight: "500",
//                 color: "#374151",
//                 marginBottom: "4px",
//               },
//             },
//             "Search",
//           ),

//           React.createElement("input", {
//             type: "text",
//             value: filters.search,
//             onChange: function (e) {
//               setFilters({ ...filters, search: e.target.value });
//             },
//             placeholder: "Search users...",
//             style: {
//               width: "100%",
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "14px",
//               boxSizing: "border-box",
//             },
//           }),
//         ),

//         React.createElement(
//           "div",
//           {
//             style: {
//               flex: "1",
//               minWidth: "120px",
//             },
//           },
//           React.createElement(
//             "label",
//             {
//               style: {
//                 display: "block",
//                 fontSize: "13px",
//                 fontWeight: "500",
//                 color: "#374151",
//                 marginBottom: "4px",
//               },
//             },
//             "Role",
//           ),

//           React.createElement(
//             "select",
//             {
//               value: filters.role,
//               onChange: function (e) {
//                 setFilters({ ...filters, role: e.target.value, page: 1 });
//               },
//               style: {
//                 width: "100%",
//                 padding: "8px 12px",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "6px",
//                 fontSize: "14px",
//                 backgroundColor: "white",
//               },
//             },
//             React.createElement("option", { value: "" }, "All"),
//             React.createElement("option", { value: "admin" }, "Admin"),
//             React.createElement("option", { value: "user" }, "User"),
//           ),
//         ),

//         React.createElement(
//           "button",
//           {
//             type: "submit",
//             style: {
//               padding: "8px 20px",
//               backgroundColor: "#3b82f6",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               fontSize: "14px",
//               fontWeight: "500",
//               cursor: "pointer",
//               height: "38px",
//             },
//           },
//           "Search",
//         ),
//       ),
//     ),

//     // Error message
//     error
//       ? React.createElement(
//           "div",
//           {
//             style: {
//               backgroundColor: "#fee2e2",
//               color: "#dc2626",
//               padding: "10px",
//               borderRadius: "6px",
//               marginBottom: "16px",
//               fontSize: "14px",
//             },
//           },
//           error,
//         )
//       : null,

//     // Users Table
//     React.createElement(
//       "div",
//       {
//         style: {
//           backgroundColor: "#ffffff",
//           borderRadius: "8px",
//           padding: "16px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//           overflowX: "auto",
//           width: "100%",
//           boxSizing: "border-box",
//         },
//       },
//       users.length === 0
//         ? React.createElement(
//             "p",
//             {
//               style: {
//                 textAlign: "center",
//                 padding: "40px",
//                 color: "#6b7280",
//                 fontSize: "14px",
//               },
//             },
//             "No users found",
//           )
//         : React.createElement(
//             "table",
//             {
//               style: {
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 minWidth: "700px",
//                 fontSize: "14px",
//               },
//             },
//             React.createElement(
//               "thead",
//               null,
//               React.createElement(
//                 "tr",
//                 {
//                   style: {
//                     borderBottom: "1px solid #e5e7eb",
//                     backgroundColor: "#f9fafb",
//                   },
//                 },
//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Photo",
//                 ),

//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Name",
//                 ),

//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Email",
//                 ),

//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Role",
//                 ),

//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Status",
//                 ),

//                 React.createElement(
//                   "th",
//                   {
//                     style: {
//                       textAlign: "left",
//                       padding: "12px 8px",
//                       fontWeight: "600",
//                       color: "#374151",
//                     },
//                   },
//                   "Actions",
//                 ),
//               ),
//             ),

//             React.createElement(
//               "tbody",
//               null,
//               users.map(function (user) {
//                 var fullName =
//                   (
//                     (user.firstName || "") +
//                     " " +
//                     (user.lastName || "")
//                   ).trim() || "N/A";

//                 return React.createElement(
//                   "tr",
//                   {
//                     key: user._id,
//                     style: {
//                       borderBottom: "1px solid #e5e7eb",
//                     },
//                   },
//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                       },
//                     },
//                     user.profilePhotoPreview
//                       ? React.createElement("img", {
//                           src: user.profilePhotoPreview,
//                           alt: "Profile",
//                           style: {
//                             width: "32px",
//                             height: "32px",
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                           },
//                         })
//                       : React.createElement(
//                           "div",
//                           {
//                             style: {
//                               width: "32px",
//                               height: "32px",
//                               borderRadius: "50%",
//                               backgroundColor: "#3b82f6",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               color: "white",
//                               fontSize: "14px",
//                               fontWeight: "600",
//                             },
//                           },
//                           user.firstName ? user.firstName.charAt(0) : "U",
//                         ),
//                   ),

//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                         fontWeight: "500",
//                       },
//                     },
//                     fullName,
//                   ),

//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                         color: "#3b82f6",
//                       },
//                     },
//                     user.email || "N/A",
//                   ),

//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                       },
//                     },
//                     React.createElement(
//                       "span",
//                       {
//                         style: {
//                           padding: "4px 8px",
//                           borderRadius: "4px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor:
//                             user.role === "admin" ? "#dbeafe" : "#f3f4f6",
//                           color: user.role === "admin" ? "#3b82f6" : "#6b7280",
//                         },
//                       },
//                       user.role === "admin" ? "Admin" : "User",
//                     ),
//                   ),

//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                       },
//                     },
//                     React.createElement(
//                       "span",
//                       {
//                         style: {
//                           padding: "4px 8px",
//                           borderRadius: "4px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor: user.isActive
//                             ? "#d1fae5"
//                             : "#fee2e2",
//                           color: user.isActive ? "#10b981" : "#ef4444",
//                         },
//                       },
//                       user.isActive ? "Active" : "Inactive",
//                     ),
//                   ),

//                   React.createElement(
//                     "td",
//                     {
//                       style: {
//                         padding: "12px 8px",
//                       },
//                     },
//                     React.createElement(
//                       "div",
//                       {
//                         style: {
//                           display: "flex",
//                           gap: "6px",
//                         },
//                       },
//                       React.createElement(
//                         "button",
//                         {
//                           onClick: function () {
//                             handleViewUser(user);
//                           },
//                           style: {
//                             padding: "4px 8px",
//                             backgroundColor: "#3b82f6",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "4px",
//                             fontSize: "12px",
//                             cursor: "pointer",
//                           },
//                         },
//                         "View",
//                       ),

//                       React.createElement(
//                         "button",
//                         {
//                           onClick: function () {
//                             handleEditUser(user._id);
//                           },
//                           style: {
//                             padding: "4px 8px",
//                             backgroundColor: "#10b981",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "4px",
//                             fontSize: "12px",
//                             cursor: "pointer",
//                           },
//                         },
//                         "Edit",
//                       ),

//                       React.createElement(
//                         "button",
//                         {
//                           onClick: function () {
//                             handleDeleteClick(user);
//                           },
//                           style: {
//                             padding: "4px 8px",
//                             backgroundColor: "#ef4444",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "4px",
//                             fontSize: "12px",
//                             cursor: "pointer",
//                           },
//                         },
//                         "Delete",
//                       ),
//                     ),
//                   ),
//                 );
//               }),
//             ),
//           ),
//     ),

//     // Pagination
//     pagination.pages > 1
//       ? React.createElement(
//           "div",
//           {
//             style: {
//               marginTop: "16px",
//               display: "flex",
//               justifyContent: "center",
//               gap: "6px",
//             },
//           },
//           Array.from({ length: pagination.pages }, function (_, i) {
//             return i + 1;
//           }).map(function (page) {
//             return React.createElement(
//               "button",
//               {
//                 key: page,
//                 onClick: function () {
//                   setFilters({ ...filters, page: page });
//                 },
//                 style: {
//                   padding: "6px 10px",
//                   backgroundColor: page === filters.page ? "#3b82f6" : "white",
//                   color: page === filters.page ? "white" : "#374151",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "4px",
//                   fontSize: "13px",
//                   cursor: "pointer",
//                 },
//               },
//               page,
//             );
//           }),
//         )
//       : null,

//     // Delete Confirmation Modal
//     showDeleteModal
//       ? React.createElement(
//           "div",
//           {
//             style: {
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               zIndex: 1000,
//             },
//           },
//           React.createElement(
//             "div",
//             {
//               style: {
//                 backgroundColor: "white",
//                 borderRadius: "8px",
//                 padding: "24px",
//                 maxWidth: "350px",
//                 width: "90%",
//               },
//             },
//             React.createElement(
//               "h3",
//               {
//                 style: {
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   color: "#111827",
//                   marginBottom: "12px",
//                 },
//               },
//               "Delete User",
//             ),

//             React.createElement(
//               "p",
//               {
//                 style: {
//                   fontSize: "14px",
//                   color: "#6b7280",
//                   marginBottom: "16px",
//                 },
//               },
//               'Type "' +
//                 (selectedUser?.firstName || "") +
//                 " " +
//                 (selectedUser?.lastName || "") +
//                 '" to confirm',
//             ),

//             React.createElement("input", {
//               type: "text",
//               value: confirmName,
//               onChange: function (e) {
//                 setConfirmName(e.target.value);
//               },
//               placeholder: "Full name",
//               style: {
//                 width: "100%",
//                 padding: "8px 12px",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "4px",
//                 fontSize: "14px",
//                 marginBottom: "16px",
//                 boxSizing: "border-box",
//               },
//             }),

//             deleteError
//               ? React.createElement(
//                   "p",
//                   {
//                     style: {
//                       color: "#ef4444",
//                       fontSize: "13px",
//                       marginBottom: "12px",
//                     },
//                   },
//                   deleteError,
//                 )
//               : null,

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   gap: "10px",
//                   justifyContent: "flex-end",
//                 },
//               },
//               React.createElement(
//                 "button",
//                 {
//                   onClick: function () {
//                     setShowDeleteModal(false);
//                   },
//                   style: {
//                     padding: "8px 16px",
//                     backgroundColor: "white",
//                     color: "#374151",
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "4px",
//                     fontSize: "13px",
//                     cursor: "pointer",
//                   },
//                 },
//                 "Cancel",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: handleDeleteConfirm,
//                   disabled: !confirmName,
//                   style: {
//                     padding: "8px 16px",
//                     backgroundColor: confirmName ? "#ef4444" : "#9ca3af",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     fontSize: "13px",
//                     cursor: confirmName ? "pointer" : "not-allowed",
//                   },
//                 },
//                 "Delete",
//               ),
//             ),
//           ),
//         )
//       : null,

//     // User Profile Modal
//     showUserModal && modalUser
//       ? React.createElement(
//           "div",
//           {
//             style: {
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               zIndex: 1000,
//               padding: "16px",
//               boxSizing: "border-box",
//             },
//           },
//           React.createElement(
//             "div",
//             {
//               style: {
//                 backgroundColor: "white",
//                 borderRadius: "12px",
//                 padding: "24px",
//                 maxWidth: "500px",
//                 width: "100%",
//                 maxHeight: "85vh",
//                 overflowY: "auto",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//                 position: "relative",
//               },
//             },
//             // Close button
//             React.createElement(
//               "button",
//               {
//                 onClick: closeModal,
//                 style: {
//                   position: "absolute",
//                   top: "12px",
//                   right: "12px",
//                   background: "none",
//                   border: "none",
//                   fontSize: "20px",
//                   cursor: "pointer",
//                   color: "#9ca3af",
//                 },
//               },
//               "×",
//             ),

//             // Header with profile photo and name
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "16px",
//                   marginBottom: "20px",
//                 },
//               },
//               modalUser.profilePhotoPreview
//                 ? React.createElement("img", {
//                     src: modalUser.profilePhotoPreview,
//                     alt: "Profile",
//                     style: {
//                       width: "70px",
//                       height: "70px",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                       border: "3px solid #e5e7eb",
//                     },
//                   })
//                 : React.createElement(
//                     "div",
//                     {
//                       style: {
//                         width: "70px",
//                         height: "70px",
//                         background:
//                           "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "28px",
//                         color: "white",
//                         fontWeight: "600",
//                       },
//                     },
//                     (
//                       (modalUser.firstName
//                         ? modalUser.firstName.charAt(0)
//                         : "") +
//                       (modalUser.lastName ? modalUser.lastName.charAt(0) : "")
//                     ).toUpperCase(),
//                   ),

//               React.createElement(
//                 "div",
//                 null,
//                 React.createElement(
//                   "h2",
//                   {
//                     style: {
//                       fontSize: "22px",
//                       fontWeight: "600",
//                       color: "#111827",
//                       marginBottom: "4px",
//                     },
//                   },
//                   (
//                     (modalUser.firstName || "") +
//                     " " +
//                     (modalUser.lastName || "")
//                   ).trim(),
//                 ),

//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       display: "flex",
//                       gap: "8px",
//                       flexWrap: "wrap",
//                     },
//                   },
//                   React.createElement(
//                     "span",
//                     {
//                       style: {
//                         padding: "4px 10px",
//                         borderRadius: "4px",
//                         fontSize: "12px",
//                         backgroundColor:
//                           modalUser.role === "admin" ? "#dbeafe" : "#f3f4f6",
//                         color:
//                           modalUser.role === "admin" ? "#3b82f6" : "#6b7280",
//                       },
//                     },
//                     modalUser.role === "admin" ? "👑 Admin" : "👤 User",
//                   ),

//                   React.createElement(
//                     "span",
//                     {
//                       style: {
//                         padding: "4px 10px",
//                         borderRadius: "4px",
//                         fontSize: "12px",
//                         backgroundColor: modalUser.isActive
//                           ? "#d1fae5"
//                           : "#fee2e2",
//                         color: modalUser.isActive ? "#10b981" : "#ef4444",
//                       },
//                     },
//                     modalUser.isActive ? "✅ Active" : "❌ Inactive",
//                   ),
//                 ),
//               ),
//             ),

//             // Copy success message
//             copySuccess
//               ? React.createElement(
//                   "div",
//                   {
//                     style: {
//                       padding: "8px",
//                       backgroundColor: copySuccess.includes("✅")
//                         ? "#d1fae5"
//                         : "#fee2e2",
//                       color: copySuccess.includes("✅") ? "#065f46" : "#991b1b",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       textAlign: "center",
//                       marginBottom: "16px",
//                     },
//                   },
//                   copySuccess,
//                 )
//               : null,

//             // Hyperlink Section
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   marginBottom: "20px",
//                   padding: "16px",
//                   backgroundColor: "#f0f9ff",
//                   borderRadius: "8px",
//                   border: "1px solid #bae6fd",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     marginBottom: "8px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: "#0369a1",
//                     },
//                   },
//                   "🔗 User Hyperlink",
//                 ),

//                 React.createElement(
//                   "button",
//                   {
//                     onClick: handleCopyHyperlink,
//                     style: {
//                       padding: "4px 12px",
//                       backgroundColor: "#0369a1",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       cursor: "pointer",
//                     },
//                   },
//                   "📋 Copy",
//                 ),
//               ),

//               // React.createElement('div', {
//               //   style: {
//               //     padding: '10px',
//               //     backgroundColor: 'white',
//               //     borderRadius: '6px',
//               //     border: '1px solid #e5e7eb',
//               //     fontSize: '13px',
//               //     fontFamily: 'monospace',
//               //     wordBreak: 'break-all'
//               //   }
//               // }, modalUser.userHyperlink || 'https://crm.com/user/' + modalUser._id),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "10px",
//                     backgroundColor: "white",
//                     borderRadius: "6px",
//                     border: "1px solid #e5e7eb",
//                     fontSize: "13px",
//                     fontFamily: "monospace",
//                     wordBreak: "break-all",
//                   },
//                 },
//                 modalUser.userHyperlink || "No hyperlink provided",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: function () {
//                     window.open(
//                       modalUser.userHyperlink ||
//                         "https://crm.com/user/" + modalUser._id,
//                       "_blank",
//                     );
//                   },
//                   style: {
//                     marginTop: "8px",
//                     padding: "6px 12px",
//                     backgroundColor: "white",
//                     color: "#0369a1",
//                     border: "1px solid #0369a1",
//                     borderRadius: "4px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                     width: "100%",
//                   },
//                 },
//                 "🔗 Open Link",
//               ),
//             ),

//             // Password Section
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   marginBottom: "20px",
//                   padding: "16px",
//                   backgroundColor: "#f0fdf4",
//                   borderRadius: "8px",
//                   border: "1px solid #bbf7d0",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     marginBottom: "8px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: "#166534",
//                     },
//                   },
//                   "🔑 Password",
//                 ),

//                 React.createElement(
//                   "button",
//                   {
//                     onClick: handleCopyPassword,
//                     style: {
//                       padding: "4px 12px",
//                       backgroundColor: "#166534",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       cursor: "pointer",
//                     },
//                   },
//                   "📋 Copy",
//                 ),
//               ),

//               // React.createElement(
//               //   "div",
//               //   {
//               //     style: {
//               //       padding: "10px",
//               //       backgroundColor: "white",
//               //       borderRadius: "6px",
//               //       border: "1px solid #e5e7eb",
//               //       fontSize: "13px",
//               //       fontFamily: "monospace",
//               //       wordBreak: "break-all",
//               //     },
//               //   },
//               //   modalUser.password || "********",
//               // ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "10px",
//                     backgroundColor: "white",
//                     borderRadius: "6px",
//                     border: "1px solid #e5e7eb",
//                     fontSize: "13px",
//                     fontFamily: "monospace",
//                     wordBreak: "break-all",
//                   },
//                 },
//                 modalUser.password ? "•".repeat(10) : "No password set",
//               ),
//             ),

//             // User Details Grid
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "16px",
//                   marginBottom: "16px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "12px",
//                     backgroundColor: "#f9fafb",
//                     borderRadius: "6px",
//                   },
//                 },
//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "11px",
//                       color: "#6b7280",
//                       marginBottom: "4px",
//                     },
//                   },
//                   "Email",
//                 ),

//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "500",
//                       color: "#3b82f6",
//                       wordBreak: "break-all",
//                     },
//                   },
//                   modalUser.email || "N/A",
//                 ),
//               ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "12px",
//                     backgroundColor: "#f9fafb",
//                     borderRadius: "6px",
//                   },
//                 },
//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "11px",
//                       color: "#6b7280",
//                       marginBottom: "4px",
//                     },
//                   },
//                   "Phone",
//                 ),

//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "500",
//                       color: "#111827",
//                     },
//                   },
//                   modalUser.phone || "N/A",
//                 ),
//               ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "12px",
//                     backgroundColor: "#f9fafb",
//                     borderRadius: "6px",
//                   },
//                 },
//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "11px",
//                       color: "#6b7280",
//                       marginBottom: "4px",
//                     },
//                   },
//                   "Member Since",
//                 ),

//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "500",
//                       color: "#111827",
//                     },
//                   },
//                   modalUser.createdAt
//                     ? new Date(modalUser.createdAt).toLocaleDateString(
//                         "en-US",
//                         {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         },
//                       )
//                     : "N/A",
//                 ),
//               ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     padding: "12px",
//                     backgroundColor: "#f9fafb",
//                     borderRadius: "6px",
//                   },
//                 },
//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "11px",
//                       color: "#6b7280",
//                       marginBottom: "4px",
//                     },
//                   },
//                   "User ID",
//                 ),

//                 React.createElement(
//                   "div",
//                   {
//                     style: {
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#6b7280",
//                       fontFamily: "monospace",
//                     },
//                   },
//                   modalUser._id ? modalUser._id.slice(-8) : "N/A",
//                 ),
//               ),
//             ),

//             // Location Section
//             modalUser.location &&
//               (modalUser.location.city || modalUser.location.country)
//               ? React.createElement(
//                   "div",
//                   {
//                     style: {
//                       padding: "16px",
//                       backgroundColor: "#f9fafb",
//                       borderRadius: "8px",
//                       marginBottom: "20px",
//                     },
//                   },
//                   React.createElement(
//                     "div",
//                     {
//                       style: {
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "8px",
//                         marginBottom: "8px",
//                       },
//                     },
//                     React.createElement(
//                       "span",
//                       {
//                         style: {
//                           fontSize: "16px",
//                         },
//                       },
//                       "📍",
//                     ),

//                     React.createElement(
//                       "span",
//                       {
//                         style: {
//                           fontSize: "14px",
//                           fontWeight: "600",
//                           color: "#111827",
//                         },
//                       },
//                       "Location",
//                     ),
//                   ),

//                   React.createElement(
//                     "p",
//                     {
//                       style: {
//                         fontSize: "14px",
//                         color: "#4b5563",
//                         marginLeft: "24px",
//                       },
//                     },
//                     [
//                       modalUser.location.street,
//                       modalUser.location.city,
//                       modalUser.location.state,
//                       modalUser.location.zipCode,
//                       modalUser.location.country,
//                     ]
//                       .filter(Boolean)
//                       .join(", ") || "No address provided",
//                   ),
//                 )
//               : null,

//             // Action Buttons
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   gap: "10px",
//                   borderTop: "1px solid #e5e7eb",
//                   paddingTop: "20px",
//                 },
//               },
//               React.createElement(
//                 "button",
//                 {
//                   onClick: function () {
//                     closeModal();
//                     handleEditUser(modalUser._id);
//                   },
//                   style: {
//                     flex: 1,
//                     padding: "12px",
//                     backgroundColor: "#10b981",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "6px",
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     cursor: "pointer",
//                   },
//                 },
//                 "✏️ Edit",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: function () {
//                     closeModal();
//                     handleDeleteClick(modalUser);
//                   },
//                   style: {
//                     flex: 1,
//                     padding: "12px",
//                     backgroundColor: "#ef4444",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "6px",
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     cursor: "pointer",
//                   },
//                 },
//                 "🗑️ Delete",
//               ),
//             ),
//           ),
//         )
//       : null,
//   );
// };

// export default AdminUsers;












import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';
import { useAuth } from '../../context/AuthContext';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user: currentUser } = useAuth();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'user',
    isActive: true,
    isApproved: false,
    userHyperlink: '',
    profilePhoto: null,
    profilePhotoPreview: '',
    company: '',
    location: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getUser(id);
      const user = response.data;
      
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
        phone: user.phone || '',
        role: user.role || 'user',
        isActive: user.isActive !== undefined ? user.isActive : true,
        isApproved: user.isApproved !== undefined ? user.isApproved : false,
        userHyperlink: user.userHyperlink || '',
        profilePhoto: null,
        profilePhotoPreview: user.profilePhoto || '',
        company: user.company || '',
        location: user.location || {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        }
      });
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load user');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value
        }
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePhoto: file,
          profilePhotoPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(formData.password).then(() => {
      setCopySuccess('✅ Password copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    }).catch(() => {
      setCopySuccess('❌ Failed to copy password');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleCopyHyperlink = () => {
    navigator.clipboard.writeText(formData.userHyperlink).then(() => {
      setCopySuccess('✅ Hyperlink copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    }).catch(() => {
      setCopySuccess('❌ Failed to copy hyperlink');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('password', formData.password || 'password123');
      submitData.append('phone', formData.phone);
      submitData.append('role', formData.role);
      submitData.append('isActive', formData.isActive);
      submitData.append('isApproved', formData.isApproved);
      submitData.append('userHyperlink', formData.userHyperlink);
      submitData.append('company', formData.company);
      submitData.append('location', JSON.stringify(formData.location));
      
      if (formData.profilePhoto) {
        submitData.append('profilePhoto', formData.profilePhoto);
      }

      // Add admin ID to headers (optional - for tracking who created the user)
      if (currentUser?._id) {
        submitData.append('createdBy', currentUser._id);
      }

      let response;
      if (isEditMode) {
        response = await userService.updateUser(id, submitData);
        setSuccess('✅ User updated successfully!');
      } else {
        response = await userService.createUser(submitData);
        setSuccess('✅ User created successfully! They will need approval before login.');
      }
      
      const savedUserData = response.data || formData;
      if (formData.profilePhotoPreview) {
        savedUserData.profilePhotoPreview = formData.profilePhotoPreview;
      }
      
      setSavedUser(savedUserData);
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
        navigate('/admin/users');
      }, 5000);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.error || `Failed to ${isEditMode ? 'update' : 'create'} user`);
    } finally {
      setLoading(false);
    }
  };

  const handleHyperlinkClick = () => {
    if (formData.userHyperlink) {
      window.open(formData.userHyperlink, '_blank');
    }
  };

  if (loading && isEditMode) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading user data...');
  }

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '800px',
        margin: '0 auto'
      }
    },
      // Header
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '26px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }
        }, isEditMode ? '✏️ Edit User' : '➕ Create New User'),
        
        React.createElement('button', {
          onClick: () => navigate('/admin/users'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back')
      ),

      // Success/Error Messages
      error ? React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
          fontSize: '14px',
          border: '1px solid #fecaca'
        }
      }, error) : null,

      success ? React.createElement('div', {
        style: {
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
          fontSize: '14px',
          textAlign: 'center',
          border: '1px solid #a7f3d0'
        }
      }, success) : null,

      // Main Form
      React.createElement('form', {
        onSubmit: handleSubmit,
        encType: 'multipart/form-data',
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }
      },
        // Profile Photo Section
        React.createElement('div', {
          style: {
            marginBottom: '28px',
            textAlign: 'center'
          }
        },
          React.createElement('div', {
            onClick: () => document.getElementById('photo-upload').click(),
            style: {
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#f3f4f6',
              margin: '0 auto 16px',
              overflow: 'hidden',
              border: '3px solid #e5e7eb',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }
          },
            formData.profilePhotoPreview ? 
              React.createElement('img', {
                src: formData.profilePhotoPreview,
                alt: 'Profile',
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }) :
              React.createElement('div', {
                style: {
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  color: '#9ca3af',
                  backgroundColor: '#f3f4f6'
                }
              }, '📷')
          ),
          
          React.createElement('input', {
            id: 'photo-upload',
            type: 'file',
            accept: 'image/*',
            onChange: handlePhotoChange,
            style: {
              display: 'none'
            }
          }),
          
          React.createElement('p', {
            style: {
              fontSize: '13px',
              color: '#6b7280'
            }
          }, 'Click to upload profile photo (optional)')
        ),

        // Hyperlink Section
        React.createElement('div', {
          style: {
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: '#f0f9ff',
            borderRadius: '10px',
            border: '1px solid #bae6fd'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }
          },
            React.createElement('label', {
              style: {
                fontSize: '15px',
                fontWeight: '600',
                color: '#0369a1',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }
            }, '🔗 User Hyperlink (Optional)'),
            
            formData.userHyperlink ? React.createElement('button', {
              type: 'button',
              onClick: handleCopyHyperlink,
              style: {
                padding: '5px 12px',
                backgroundColor: '#0369a1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy') : null
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }
          },
            React.createElement('input', {
              type: 'url',
              name: 'userHyperlink',
              value: formData.userHyperlink,
              onChange: handleChange,
              placeholder: 'Enter custom hyperlink (optional)',
              style: {
                flex: 1,
                padding: '12px',
                border: '1px solid #bae6fd',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'monospace'
              }
            }),
            
            formData.userHyperlink ? React.createElement('button', {
              type: 'button',
              onClick: handleHyperlinkClick,
              style: {
                padding: '12px 16px',
                backgroundColor: 'white',
                color: '#0369a1',
                border: '1px solid #0369a1',
                borderRadius: '8px',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: '500'
              }
            }, 'Open') : null
          ),
          
          copySuccess ? React.createElement('p', {
            style: {
              marginTop: '10px',
              fontSize: '12px',
              color: copySuccess.includes('✅') ? '#10b981' : '#ef4444',
              textAlign: 'center'
            }
          }, copySuccess) : null
        ),

        // Password Section
        React.createElement('div', {
          style: {
            marginBottom: '24px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            borderRadius: '10px',
            border: '1px solid #bbf7d0'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }
          },
            React.createElement('label', {
              style: {
                fontSize: '15px',
                fontWeight: '600',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }
            }, '🔑 Password'),
            
            formData.password ? React.createElement('button', {
              type: 'button',
              onClick: handleCopyPassword,
              style: {
                padding: '5px 12px',
                backgroundColor: '#166534',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }
            }, '📋 Copy') : null
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }
          },
            React.createElement('div', {
              style: {
                flex: 1,
                position: 'relative'
              }
            },
              React.createElement('input', {
                type: showPassword ? 'text' : 'password',
                name: 'password',
                value: formData.password,
                onChange: handleChange,
                placeholder: isEditMode ? 'Leave blank to keep current' : 'Enter password',
                required: !isEditMode,
                style: {
                  width: '100%',
                  padding: '12px',
                  paddingRight: '45px',
                  border: '1px solid #bbf7d0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'monospace'
                }
              }),
              
              formData.password ? React.createElement('button', {
                type: 'button',
                onClick: () => setShowPassword(!showPassword),
                style: {
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#6b7280'
                }
              }, showPassword ? '👁️' : '👁️‍🗨️') : null
            )
          ),
          
          !isEditMode && React.createElement('p', {
            style: {
              marginTop: '10px',
              fontSize: '12px',
              color: '#6b7280',
              fontStyle: 'italic'
            }
          }, 'User will login with email + phone number (not password)')
        ),

        // Personal Information
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }
        }, '👤 Personal Information'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'First Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'firstName',
              value: formData.firstName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              },
              onFocus: (e) => e.target.style.borderColor = '#667eea',
              onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Last Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'lastName',
              value: formData.lastName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              },
              onFocus: (e) => e.target.style.borderColor = '#667eea',
              onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
            })
          )
        ),

        // Email Field
        React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Email *'),
          
          React.createElement('input', {
            type: 'email',
            name: 'email',
            value: formData.email,
            onChange: handleChange,
            required: true,
            style: {
              width: '100%',
              padding: '10px 14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        // Phone Field
        React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Phone Number *'),
          
          React.createElement('input', {
            type: 'tel',
            name: 'phone',
            value: formData.phone,
            onChange: handleChange,
            required: true,
            placeholder: '+1 234 567 8900',
            style: {
              width: '100%',
              padding: '10px 14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        // Company
        React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Company (Optional)'),
          
          React.createElement('input', {
            type: 'text',
            name: 'company',
            value: formData.company,
            onChange: handleChange,
            placeholder: 'Company name',
            style: {
              width: '100%',
              padding: '10px 14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        // Location Information
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }
        }, '📍 Location (Optional)'),

        React.createElement('div', {
          style: {
            marginBottom: '20px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Street Address'),
          
          React.createElement('input', {
            type: 'text',
            name: 'location.street',
            value: formData.location.street,
            onChange: handleChange,
            placeholder: 'Street address',
            style: {
              width: '100%',
              padding: '10px 14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'City'),
            
            React.createElement('input', {
              type: 'text',
              name: 'location.city',
              value: formData.location.city,
              onChange: handleChange,
              placeholder: 'City',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'State'),
            
            React.createElement('input', {
              type: 'text',
              name: 'location.state',
              value: formData.location.state,
              onChange: handleChange,
              placeholder: 'State',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '28px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Zip Code'),
            
            React.createElement('input', {
              type: 'text',
              name: 'location.zipCode',
              value: formData.location.zipCode,
              onChange: handleChange,
              placeholder: 'Zip code',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Country'),
            
            React.createElement('input', {
              type: 'text',
              name: 'location.country',
              value: formData.location.country,
              onChange: handleChange,
              placeholder: 'Country',
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Role & Status
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }
        }, '⚙️ Role & Status'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Role *'),
            
            React.createElement('select', {
              name: 'role',
              value: formData.role,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px 14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }
            },
              React.createElement('option', { value: 'user' }, '👤 User'),
              React.createElement('option', { value: 'admin' }, '👑 Admin')
            )
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Status'),
            
            React.createElement('div', {
              style: {
                padding: '10px 0'
              }
            },
              React.createElement('label', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer'
                }
              },
                React.createElement('input', {
                  type: 'checkbox',
                  name: 'isActive',
                  checked: formData.isActive,
                  onChange: handleChange,
                  style: {
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                  }
                }),
                
                React.createElement('span', {
                  style: {
                    fontSize: '14px',
                    color: '#374151'
                  }
                }, formData.isActive ? '✅ Active Account' : '❌ Inactive Account')
              )
            )
          )
        ),

        // Approval Status (for edit mode)
        isEditMode && React.createElement('div', {
          style: {
            marginBottom: '28px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }
          },
            React.createElement('input', {
              type: 'checkbox',
              name: 'isApproved',
              checked: formData.isApproved,
              onChange: handleChange,
              style: {
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }
            }),
            
            React.createElement('span', {
              style: {
                fontSize: '15px',
                fontWeight: '500',
                color: '#374151'
              }
            }, formData.isApproved ? '✅ User is Approved' : '⏳ User is Pending Approval')
          )
        ),

        // Submit Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end',
            borderTop: '2px solid #e5e7eb',
            paddingTop: '24px'
          }
        },
          React.createElement('button', {
            type: 'button',
            onClick: () => navigate('/admin/users'),
            style: {
              padding: '12px 28px',
              backgroundColor: 'white',
              color: '#374151',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
          }, 'Cancel'),
          
          React.createElement('button', {
            type: 'submit',
            disabled: loading,
            style: {
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'transform 0.2s',
              boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)'
            },
            onMouseEnter: (e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 8px rgba(102, 126, 234, 0.5)';
              }
            },
            onMouseLeave: (e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(102, 126, 234, 0.4)';
              }
            }
          }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
        )
      )
    ),

    // Success Popup
    showPopup && savedUser ? React.createElement('div', {
      style: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '32px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        zIndex: 2000,
        animation: 'slideIn 0.3s ease'
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: '24px'
        }
      },
        React.createElement('div', {
          style: {
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '36px',
            color: 'white',
            boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)'
          }
        }, '✅'),
        
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '8px'
          }
        }, isEditMode ? 'User Updated!' : 'User Created!')
      ),

      // Profile Photo in Popup
      savedUser.profilePhotoPreview ? React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: '20px'
        }
      },
        React.createElement('img', {
          src: savedUser.profilePhotoPreview,
          alt: 'Profile',
          style: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #e5e7eb'
          }
        })
      ) : null,

      // Hyperlink in popup
      savedUser.userHyperlink ? React.createElement('div', {
        style: {
          padding: '16px',
          backgroundColor: '#f0f9ff',
          borderRadius: '12px',
          marginBottom: '16px',
          border: '1px solid #bae6fd'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '15px',
              fontWeight: '600',
              color: '#0369a1'
            }
          }, '🔗 User Hyperlink'),
          
          React.createElement('button', {
            onClick: () => {
              navigator.clipboard.writeText(savedUser.userHyperlink);
              alert('Hyperlink copied!');
            },
            style: {
              padding: '4px 12px',
              backgroundColor: '#0369a1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '12px',
              cursor: 'pointer'
            }
          }, 'Copy')
        ),
        
        React.createElement('div', {
          style: {
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '8px',
            fontSize: '13px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            border: '1px solid #e5e7eb'
          }
        }, savedUser.userHyperlink),
        
        React.createElement('button', {
          onClick: () => window.open(savedUser.userHyperlink, '_blank'),
          style: {
            marginTop: '12px',
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#0369a1',
            border: '1px solid #0369a1',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: '500'
          }
        }, '🔗 Open Link')
      ) : null,

      // Password in popup
      savedUser.password ? React.createElement('div', {
        style: {
          padding: '16px',
          backgroundColor: '#f0fdf4',
          borderRadius: '12px',
          marginBottom: '16px',
          border: '1px solid #bbf7d0'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }
        },
          React.createElement('span', {
            style: {
              fontSize: '15px',
              fontWeight: '600',
              color: '#166534'
            }
          }, '🔑 Password'),
          
          React.createElement('button', {
            onClick: () => {
              navigator.clipboard.writeText(savedUser.password);
              alert('Password copied!');
            },
            style: {
              padding: '4px 12px',
              backgroundColor: '#166534',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '12px',
              cursor: 'pointer'
            }
          }, 'Copy')
        ),
        
        React.createElement('div', {
          style: {
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '8px',
            fontSize: '13px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            border: '1px solid #e5e7eb'
          }
        }, savedUser.password),
        
        React.createElement('p', {
          style: {
            marginTop: '10px',
            fontSize: '12px',
            color: '#6b7280',
            fontStyle: 'italic',
            textAlign: 'center'
          }
        }, 'Password is saved and visible in view profile.')
      ) : null,

      // User details in popup
      React.createElement('div', {
        style: {
          padding: '20px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }
        },
          React.createElement('div', null,
            React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Full Name'),
            React.createElement('p', { style: { fontSize: '15px', fontWeight: '600', color: '#111827' } }, 
              `${savedUser.firstName || ''} ${savedUser.lastName || ''}`.trim() || 'N/A'
            )
          ),
          
          React.createElement('div', null,
            React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Email'),
            React.createElement('p', { style: { fontSize: '14px', fontWeight: '500', color: '#3b82f6' } }, savedUser.email || 'N/A')
          ),
          
          React.createElement('div', null,
            React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Phone'),
            React.createElement('p', { style: { fontSize: '14px', fontWeight: '500' } }, savedUser.phone || 'N/A')
          ),
          
          React.createElement('div', null,
            React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Role'),
            React.createElement('p', { style: { fontSize: '14px', fontWeight: '500' } }, 
              savedUser.role === 'admin' ? 'Administrator' : 'User'
            )
          ),
          
          React.createElement('div', { style: { gridColumn: 'span 2' } },
            React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Status'),
            React.createElement('span', {
              style: {
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: savedUser.isActive ? '#d1fae5' : '#fee2e2',
                color: savedUser.isActive ? '#10b981' : '#ef4444',
                display: 'inline-block'
              }
            }, savedUser.isActive ? 'Active' : 'Inactive')
          )
        )
      ),

      React.createElement('p', {
        style: {
          textAlign: 'center',
          fontSize: '13px',
          color: '#6b7280',
          marginTop: '20px'
        }
      }, 'Redirecting to users list in 5 seconds...')
    ) : null
  );
};

export default UserForm;