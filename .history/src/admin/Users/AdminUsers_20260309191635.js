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
//     approved: "",
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
//   const [actionLoading, setActionLoading] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search, filters.approved]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || "Failed to load users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleApproveUser = async (userId) => {
//     setActionLoading(true);
//     try {
//       await userService.approveUser(userId);
//       fetchUsers();
//       if (modalUser && modalUser._id === userId) {
//         setModalUser({ ...modalUser, isApproved: true });
//       }
//     } catch (err) {
//       alert("Failed to approve user: " + (err.error || err.message));
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   const handleRejectUser = async (userId) => {
//     setActionLoading(true);
//     try {
//       await userService.rejectUser(userId);
//       fetchUsers();
//       if (modalUser && modalUser._id === userId) {
//         setModalUser({ ...modalUser, isApproved: false });
//       }
//     } catch (err) {
//       alert("Failed to reject user: " + (err.error || err.message));
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName("");
//     setDeleteError("");
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers();
//       if (modalUser && modalUser._id === selectedUser._id) {
//         setShowUserModal(false);
//         setModalUser(null);
//       }
//     } catch (err) {
//       setDeleteError(err.error || "Failed to delete user");
//     }
//   };

//   const handleAddUser = () => {
//     navigate("/admin/users/new");
//   };

//   const handleEditUser = (id) => {
//     navigate("/admin/users/" + id);
//   };

//   const handleViewUser = (user) => {
//     setModalUser(user);
//     setShowUserModal(true);
//   };

//   const closeModal = () => {
//     setShowUserModal(false);
//     setModalUser(null);
//     setCopySuccess("");
//   };

//   const handleCopyHyperlink = () => {
//     if (!modalUser) return;
//     navigator.clipboard
//       .writeText(modalUser.userHyperlink || `https://crm.com/user/${modalUser._id}`)
//       .then(() => {
//         setCopySuccess("✅ Hyperlink copied!");
//         setTimeout(() => setCopySuccess(""), 3000);
//       });
//   };

//   const handleCopyPassword = () => {
//     if (!modalUser) return;
//     navigator.clipboard
//       .writeText(modalUser.password || "********")
//       .then(() => {
//         setCopySuccess("✅ Password copied!");
//         setTimeout(() => setCopySuccess(""), 3000);
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
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
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
//               onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//               style: {
//                 width: "100%",
//                 padding: "8px 12px",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "6px",
//                 fontSize: "14px",
//                 backgroundColor: "white",
//               },
//             },
//             React.createElement("option", { value: "" }, "All Roles"),
//             React.createElement("option", { value: "admin" }, "Admin"),
//             React.createElement("option", { value: "user" }, "User"),
//           ),
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
//             "Approval",
//           ),
//           React.createElement(
//             "select",
//             {
//               value: filters.approved,
//               onChange: (e) => setFilters({ ...filters, approved: e.target.value, page: 1 }),
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
//             React.createElement("option", { value: "true" }, "Approved"),
//             React.createElement("option", { value: "false" }, "Pending"),
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
//     error &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             backgroundColor: "#fee2e2",
//             color: "#dc2626",
//             padding: "10px",
//             borderRadius: "6px",
//             marginBottom: "16px",
//             fontSize: "14px",
//           },
//         },
//         error,
//       ),

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
//                 minWidth: "900px",
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
//                   "Phone",
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
//                   "Approved",
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
//               users.map((user) => {
//                 const fullName = (
//                   (user.firstName || "") +
//                   " " +
//                   (user.lastName || "")
//                 ).trim() || "N/A";

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
//                     user.profilePhoto
//                       ? React.createElement("img", {
//                           src: user.profilePhoto,
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
//                     user.phone || "N/A",
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
//                       "span",
//                       {
//                         style: {
//                           padding: "4px 8px",
//                           borderRadius: "4px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor: user.isApproved
//                             ? "#d1fae5"
//                             : "#fef3c7",
//                           color: user.isApproved ? "#10b981" : "#d97706",
//                         },
//                       },
//                       user.isApproved ? "✅ Approved" : "⏳ Pending",
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
//                           flexWrap: "wrap",
//                         },
//                       },
//                       React.createElement(
//                         "button",
//                         {
//                           onClick: () => handleViewUser(user),
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
//                           onClick: () => handleEditUser(user._id),
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

//                       !user.isApproved &&
//                         user.role === "user" &&
//                         React.createElement(
//                           "button",
//                           {
//                             onClick: () => handleApproveUser(user._id),
//                             disabled: actionLoading,
//                             style: {
//                               padding: "4px 8px",
//                               backgroundColor: "#10b981",
//                               color: "white",
//                               border: "none",
//                               borderRadius: "4px",
//                               fontSize: "12px",
//                               cursor: actionLoading ? "not-allowed" : "pointer",
//                               opacity: actionLoading ? 0.5 : 1,
//                             },
//                           },
//                           "Approve",
//                         ),

//                       user.isApproved &&
//                         user.role === "user" &&
//                         React.createElement(
//                           "button",
//                           {
//                             onClick: () => handleRejectUser(user._id),
//                             disabled: actionLoading,
//                             style: {
//                               padding: "4px 8px",
//                               backgroundColor: "#f59e0b",
//                               color: "white",
//                               border: "none",
//                               borderRadius: "4px",
//                               fontSize: "12px",
//                               cursor: actionLoading ? "not-allowed" : "pointer",
//                               opacity: actionLoading ? 0.5 : 1,
//                             },
//                           },
//                           "Reject",
//                         ),

//                       React.createElement(
//                         "button",
//                         {
//                           onClick: () => handleDeleteClick(user),
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
//     pagination.pages > 1 &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             marginTop: "16px",
//             display: "flex",
//             justifyContent: "center",
//             gap: "6px",
//           },
//         },
//         Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//           React.createElement(
//             "button",
//             {
//               key: page,
//               onClick: () => setFilters({ ...filters, page }),
//               style: {
//                 padding: "6px 10px",
//                 backgroundColor: page === filters.page ? "#3b82f6" : "white",
//                 color: page === filters.page ? "white" : "#374151",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "4px",
//                 fontSize: "13px",
//                 cursor: "pointer",
//               },
//             },
//             page,
//           ),
//         ),
//       ),

//     // Delete Confirmation Modal
//     showDeleteModal &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//           },
//         },
//         React.createElement(
//           "div",
//           {
//             style: {
//               backgroundColor: "white",
//               borderRadius: "8px",
//               padding: "24px",
//               maxWidth: "350px",
//               width: "90%",
//             },
//           },
//           React.createElement(
//             "h3",
//             {
//               style: {
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 color: "#111827",
//                 marginBottom: "12px",
//               },
//             },
//             "Delete User",
//           ),

//           React.createElement(
//             "p",
//             {
//               style: {
//                 fontSize: "14px",
//                 color: "#6b7280",
//                 marginBottom: "16px",
//               },
//             },
//             'Type "' +
//               (selectedUser?.firstName || "") +
//               " " +
//               (selectedUser?.lastName || "") +
//               '" to confirm',
//           ),

//           React.createElement("input", {
//             type: "text",
//             value: confirmName,
//             onChange: (e) => setConfirmName(e.target.value),
//             placeholder: "Full name",
//             style: {
//               width: "100%",
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "4px",
//               fontSize: "14px",
//               marginBottom: "16px",
//               boxSizing: "border-box",
//             },
//           }),

//           deleteError &&
//             React.createElement(
//               "p",
//               {
//                 style: {
//                   color: "#ef4444",
//                   fontSize: "13px",
//                   marginBottom: "12px",
//                 },
//               },
//               deleteError,
//             ),

//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 gap: "10px",
//                 justifyContent: "flex-end",
//               },
//             },
//             React.createElement(
//               "button",
//               {
//                 onClick: () => setShowDeleteModal(false),
//                 style: {
//                   padding: "8px 16px",
//                   backgroundColor: "white",
//                   color: "#374151",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "4px",
//                   fontSize: "13px",
//                   cursor: "pointer",
//                 },
//               },
//               "Cancel",
//             ),

//             React.createElement(
//               "button",
//               {
//                 onClick: handleDeleteConfirm,
//                 disabled: !confirmName,
//                 style: {
//                   padding: "8px 16px",
//                   backgroundColor: confirmName ? "#ef4444" : "#9ca3af",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   fontSize: "13px",
//                   cursor: confirmName ? "pointer" : "not-allowed",
//                 },
//               },
//               "Delete",
//             ),
//           ),
//         ),
//       ),

//     // User Profile Modal
//     showUserModal &&
//       modalUser &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//             padding: "16px",
//             boxSizing: "border-box",
//           },
//         },
//         React.createElement(
//           "div",
//           {
//             style: {
//               backgroundColor: "white",
//               borderRadius: "12px",
//               padding: "24px",
//               maxWidth: "500px",
//               width: "100%",
//               maxHeight: "85vh",
//               overflowY: "auto",
//               boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//               position: "relative",
//             },
//           },
//           // Close button
//           React.createElement(
//             "button",
//             {
//               onClick: closeModal,
//               style: {
//                 position: "absolute",
//                 top: "12px",
//                 right: "12px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "20px",
//                 cursor: "pointer",
//                 color: "#9ca3af",
//               },
//             },
//             "×",
//           ),

//           // Header with profile photo and name
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "16px",
//                 marginBottom: "20px",
//               },
//             },
//             modalUser.profilePhoto
//               ? React.createElement("img", {
//                   src: modalUser.profilePhoto,
//                   alt: "Profile",
//                   style: {
//                     width: "70px",
//                     height: "70px",
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     border: "3px solid #e5e7eb",
//                   },
//                 })
//               : React.createElement(
//                   "div",
//                   {
//                     style: {
//                       width: "70px",
//                       height: "70px",
//                       background:
//                         "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "28px",
//                       color: "white",
//                       fontWeight: "600",
//                     },
//                   },
//                   (
//                     (modalUser.firstName ? modalUser.firstName.charAt(0) : "") +
//                     (modalUser.lastName ? modalUser.lastName.charAt(0) : "")
//                   ).toUpperCase(),
//                 ),

//             React.createElement(
//               "div",
//               null,
//               React.createElement(
//                 "h2",
//                 {
//                   style: {
//                     fontSize: "22px",
//                     fontWeight: "600",
//                     color: "#111827",
//                     marginBottom: "4px",
//                   },
//                 },
//                 (
//                   (modalUser.firstName || "") + " " + (modalUser.lastName || "")
//                 ).trim(),
//               ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     gap: "8px",
//                     flexWrap: "wrap",
//                     marginBottom: "4px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       padding: "4px 10px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       backgroundColor:
//                         modalUser.role === "admin" ? "#dbeafe" : "#f3f4f6",
//                       color:
//                         modalUser.role === "admin" ? "#3b82f6" : "#6b7280",
//                     },
//                   },
//                   modalUser.role === "admin" ? "👑 Admin" : "👤 User",
//                 ),

//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       padding: "4px 10px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       backgroundColor: modalUser.isActive
//                         ? "#d1fae5"
//                         : "#fee2e2",
//                       color: modalUser.isActive ? "#10b981" : "#ef4444",
//                     },
//                   },
//                   modalUser.isActive ? "✅ Active" : "❌ Inactive",
//                 ),

//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       padding: "4px 10px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       backgroundColor: modalUser.isApproved
//                         ? "#d1fae5"
//                         : "#fef3c7",
//                       color: modalUser.isApproved ? "#10b981" : "#d97706",
//                     },
//                   },
//                   modalUser.isApproved ? "✅ Approved" : "⏳ Pending",
//                 ),
//               ),
//             ),
//           ),

//           // Copy success message
//           copySuccess &&
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "8px",
//                   backgroundColor: copySuccess.includes("✅")
//                     ? "#d1fae5"
//                     : "#fee2e2",
//                   color: copySuccess.includes("✅") ? "#065f46" : "#991b1b",
//                   borderRadius: "4px",
//                   fontSize: "12px",
//                   textAlign: "center",
//                   marginBottom: "16px",
//                 },
//               },
//               copySuccess,
//             ),

//           // Hyperlink Section
//           React.createElement(
//             "div",
//             {
//               style: {
//                 marginBottom: "20px",
//                 padding: "16px",
//                 backgroundColor: "#f0f9ff",
//                 borderRadius: "8px",
//                 border: "1px solid #bae6fd",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "8px",
//                 },
//               },
//               React.createElement(
//                 "span",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: "#0369a1",
//                   },
//                 },
//                 "🔗 User Hyperlink",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: handleCopyHyperlink,
//                   style: {
//                     padding: "4px 12px",
//                     backgroundColor: "#0369a1",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                   },
//                 },
//                 "📋 Copy",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "10px",
//                   backgroundColor: "white",
//                   borderRadius: "6px",
//                   border: "1px solid #e5e7eb",
//                   fontSize: "13px",
//                   fontFamily: "monospace",
//                   wordBreak: "break-all",
//                 },
//               },
//               modalUser.userHyperlink || "No hyperlink provided",
//             ),

//             modalUser.userHyperlink &&
//               React.createElement(
//                 "button",
//                 {
//                   onClick: () => window.open(modalUser.userHyperlink, "_blank"),
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
//           ),

//           // Password Section
//           React.createElement(
//             "div",
//             {
//               style: {
//                 marginBottom: "20px",
//                 padding: "16px",
//                 backgroundColor: "#f0fdf4",
//                 borderRadius: "8px",
//                 border: "1px solid #bbf7d0",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "8px",
//                 },
//               },
//               React.createElement(
//                 "span",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: "#166534",
//                   },
//                 },
//                 "🔑 Password",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: handleCopyPassword,
//                   style: {
//                     padding: "4px 12px",
//                     backgroundColor: "#166534",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                   },
//                 },
//                 "📋 Copy",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "10px",
//                   backgroundColor: "white",
//                   borderRadius: "6px",
//                   border: "1px solid #e5e7eb",
//                   fontSize: "13px",
//                   fontFamily: "monospace",
//                   wordBreak: "break-all",
//                 },
//               },
//               modalUser.password ? "•".repeat(10) : "No password set",
//             ),
//           ),

//           // User Details Grid
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: "16px",
//                 marginBottom: "16px",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Email",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#3b82f6",
//                     wordBreak: "break-all",
//                   },
//                 },
//                 modalUser.email || "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Phone",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#111827",
//                   },
//                 },
//                 modalUser.phone || "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Member Since",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#111827",
//                   },
//                 },
//                 modalUser.createdAt
//                   ? new Date(modalUser.createdAt).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })
//                   : "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "User ID",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "13px",
//                     fontWeight: "500",
//                     color: "#6b7280",
//                     fontFamily: "monospace",
//                   },
//                 },
//                 modalUser._id ? modalUser._id.slice(-8) : "N/A",
//               ),
//             ),
//           ),

//           // Location Section
//           modalUser.location &&
//             (modalUser.location.city || modalUser.location.country) &&
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "16px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "8px",
//                   marginBottom: "20px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginBottom: "8px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "16px",
//                     },
//                   },
//                   "📍",
//                 ),
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: "#111827",
//                     },
//                   },
//                   "Location",
//                 ),
//               ),
//               React.createElement(
//                 "p",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     color: "#4b5563",
//                     marginLeft: "24px",
//                   },
//                 },
//                 [
//                   modalUser.location.street,
//                   modalUser.location.city,
//                   modalUser.location.state,
//                   modalUser.location.zipCode,
//                   modalUser.location.country,
//                 ]
//                   .filter(Boolean)
//                   .join(", ") || "No address provided",
//               ),
//             ),

//           // Action Buttons
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 gap: "10px",
//                 borderTop: "1px solid #e5e7eb",
//                 paddingTop: "20px",
//               },
//             },
//             React.createElement(
//               "button",
//               {
//                 onClick: () => {
//                   closeModal();
//                   handleEditUser(modalUser._id);
//                 },
//                 style: {
//                   flex: 1,
//                   padding: "12px",
//                   backgroundColor: "#10b981",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontSize: "14px",
//                   fontWeight: "500",
//                   cursor: "pointer",
//                 },
//               },
//               "✏️ Edit",
//             ),

//             React.createElement(
//               "button",
//               {
//                 onClick: () => {
//                   closeModal();
//                   handleDeleteClick(modalUser);
//                 },
//                 style: {
//                   flex: 1,
//                   padding: "12px",
//                   backgroundColor: "#ef4444",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontSize: "14px",
//                   fontWeight: "500",
//                   cursor: "pointer",
//                 },
//               },
//               "🗑️ Delete",
//             ),
//           ),
//         ),
//       ),
//   );
// };

// export default AdminUsers;















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

//   useEffect(() => {
//     fetchUsers();
//   }, [filters.page, filters.role, filters.search]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUsers(filters);
//       setUsers(response.data || []);
//       setPagination(response.pagination || { total: 0, pages: 0 });
//       setError(null);
//     } catch (err) {
//       setError(err.error || "Failed to load users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setFilters({ ...filters, page: 1 });
//   };

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setConfirmName("");
//     setDeleteError("");
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedUser) return;

//     try {
//       await userService.deleteUser(selectedUser._id, confirmName);
//       setShowDeleteModal(false);
//       fetchUsers();
//       if (modalUser && modalUser._id === selectedUser._id) {
//         setShowUserModal(false);
//         setModalUser(null);
//       }
//     } catch (err) {
//       setDeleteError(err.error || "Failed to delete user");
//     }
//   };

//   const handleAddUser = () => {
//     navigate("/admin/users/new");
//   };

//   const handleEditUser = (id) => {
//     navigate(`/admin/users/${id}`);
//   };

//   const handleViewUser = (user) => {
//     setModalUser(user);
//     setShowUserModal(true);
//   };

//   const closeModal = () => {
//     setShowUserModal(false);
//     setModalUser(null);
//     setCopySuccess("");
//   };

//   const handleCopyHyperlink = () => {
//     if (!modalUser) return;
//     navigator.clipboard
//       .writeText(modalUser.userHyperlink || `https://crm.com/user/${modalUser._id}`)
//       .then(() => {
//         setCopySuccess("✅ Hyperlink copied!");
//         setTimeout(() => setCopySuccess(""), 3000);
//       });
//   };

//   const handleCopyPassword = () => {
//     if (!modalUser) return;
//     navigator.clipboard
//       .writeText(modalUser.password || "********")
//       .then(() => {
//         setCopySuccess("✅ Password copied!");
//         setTimeout(() => setCopySuccess(""), 3000);
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
//             onChange: (e) => setFilters({ ...filters, search: e.target.value }),
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
//               onChange: (e) => setFilters({ ...filters, role: e.target.value, page: 1 }),
//               style: {
//                 width: "100%",
//                 padding: "8px 12px",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "6px",
//                 fontSize: "14px",
//                 backgroundColor: "white",
//               },
//             },
//             React.createElement("option", { value: "" }, "All Roles"),
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
//     error &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             backgroundColor: "#fee2e2",
//             color: "#dc2626",
//             padding: "10px",
//             borderRadius: "6px",
//             marginBottom: "16px",
//             fontSize: "14px",
//           },
//         },
//         error,
//       ),

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
//                 minWidth: "900px",
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
//                   "Phone",
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
//               users.map((user) => {
//                 const fullName = (
//                   (user.firstName || "") +
//                   " " +
//                   (user.lastName || "")
//                 ).trim() || "N/A";

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
//                     user.profilePhoto
//                       ? React.createElement("img", {
//                           src: user.profilePhoto,
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
//                     user.phone || "N/A",
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
//                           flexWrap: "wrap",
//                         },
//                       },
//                       React.createElement(
//                         "button",
//                         {
//                           onClick: () => handleViewUser(user),
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
//                           onClick: () => handleEditUser(user._id),
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
//                           onClick: () => handleDeleteClick(user),
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
//     pagination.pages > 1 &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             marginTop: "16px",
//             display: "flex",
//             justifyContent: "center",
//             gap: "6px",
//           },
//         },
//         Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
//           React.createElement(
//             "button",
//             {
//               key: page,
//               onClick: () => setFilters({ ...filters, page }),
//               style: {
//                 padding: "6px 10px",
//                 backgroundColor: page === filters.page ? "#3b82f6" : "white",
//                 color: page === filters.page ? "white" : "#374151",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "4px",
//                 fontSize: "13px",
//                 cursor: "pointer",
//               },
//             },
//             page,
//           ),
//         ),
//       ),

//     // Delete Confirmation Modal
//     showDeleteModal &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//           },
//         },
//         React.createElement(
//           "div",
//           {
//             style: {
//               backgroundColor: "white",
//               borderRadius: "8px",
//               padding: "24px",
//               maxWidth: "350px",
//               width: "90%",
//             },
//           },
//           React.createElement(
//             "h3",
//             {
//               style: {
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 color: "#111827",
//                 marginBottom: "12px",
//               },
//             },
//             "Delete User",
//           ),

//           React.createElement(
//             "p",
//             {
//               style: {
//                 fontSize: "14px",
//                 color: "#6b7280",
//                 marginBottom: "16px",
//               },
//             },
//             'Type "' +
//               (selectedUser?.firstName || "") +
//               " " +
//               (selectedUser?.lastName || "") +
//               '" to confirm',
//           ),

//           React.createElement("input", {
//             type: "text",
//             value: confirmName,
//             onChange: (e) => setConfirmName(e.target.value),
//             placeholder: "Full name",
//             style: {
//               width: "100%",
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "4px",
//               fontSize: "14px",
//               marginBottom: "16px",
//               boxSizing: "border-box",
//             },
//           }),

//           deleteError &&
//             React.createElement(
//               "p",
//               {
//                 style: {
//                   color: "#ef4444",
//                   fontSize: "13px",
//                   marginBottom: "12px",
//                 },
//               },
//               deleteError,
//             ),

//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 gap: "10px",
//                 justifyContent: "flex-end",
//               },
//             },
//             React.createElement(
//               "button",
//               {
//                 onClick: () => setShowDeleteModal(false),
//                 style: {
//                   padding: "8px 16px",
//                   backgroundColor: "white",
//                   color: "#374151",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "4px",
//                   fontSize: "13px",
//                   cursor: "pointer",
//                 },
//               },
//               "Cancel",
//             ),

//             React.createElement(
//               "button",
//               {
//                 onClick: handleDeleteConfirm,
//                 disabled: !confirmName,
//                 style: {
//                   padding: "8px 16px",
//                   backgroundColor: confirmName ? "#ef4444" : "#9ca3af",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   fontSize: "13px",
//                   cursor: confirmName ? "pointer" : "not-allowed",
//                 },
//               },
//               "Delete",
//             ),
//           ),
//         ),
//       ),

//     // User Profile Modal
//     showUserModal &&
//       modalUser &&
//       React.createElement(
//         "div",
//         {
//           style: {
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//             padding: "16px",
//             boxSizing: "border-box",
//           },
//         },
//         React.createElement(
//           "div",
//           {
//             style: {
//               backgroundColor: "white",
//               borderRadius: "12px",
//               padding: "24px",
//               maxWidth: "500px",
//               width: "100%",
//               maxHeight: "85vh",
//               overflowY: "auto",
//               boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//               position: "relative",
//             },
//           },
//           // Close button
//           React.createElement(
//             "button",
//             {
//               onClick: closeModal,
//               style: {
//                 position: "absolute",
//                 top: "12px",
//                 right: "12px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "20px",
//                 cursor: "pointer",
//                 color: "#9ca3af",
//               },
//             },
//             "×",
//           ),

//           // Header with profile photo and name
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "16px",
//                 marginBottom: "20px",
//               },
//             },
//             modalUser.profilePhoto
//               ? React.createElement("img", {
//                   src: modalUser.profilePhoto,
//                   alt: "Profile",
//                   style: {
//                     width: "70px",
//                     height: "70px",
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     border: "3px solid #e5e7eb",
//                   },
//                 })
//               : React.createElement(
//                   "div",
//                   {
//                     style: {
//                       width: "70px",
//                       height: "70px",
//                       background:
//                         "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "28px",
//                       color: "white",
//                       fontWeight: "600",
//                     },
//                   },
//                   (
//                     (modalUser.firstName ? modalUser.firstName.charAt(0) : "") +
//                     (modalUser.lastName ? modalUser.lastName.charAt(0) : "")
//                   ).toUpperCase(),
//                 ),

//             React.createElement(
//               "div",
//               null,
//               React.createElement(
//                 "h2",
//                 {
//                   style: {
//                     fontSize: "22px",
//                     fontWeight: "600",
//                     color: "#111827",
//                     marginBottom: "4px",
//                   },
//                 },
//                 (
//                   (modalUser.firstName || "") + " " + (modalUser.lastName || "")
//                 ).trim(),
//               ),

//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     gap: "8px",
//                     flexWrap: "wrap",
//                     marginBottom: "4px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       padding: "4px 10px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       backgroundColor:
//                         modalUser.role === "admin" ? "#dbeafe" : "#f3f4f6",
//                       color:
//                         modalUser.role === "admin" ? "#3b82f6" : "#6b7280",
//                     },
//                   },
//                   modalUser.role === "admin" ? "👑 Admin" : "👤 User",
//                 ),

//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       padding: "4px 10px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       backgroundColor: modalUser.isActive
//                         ? "#d1fae5"
//                         : "#fee2e2",
//                       color: modalUser.isActive ? "#10b981" : "#ef4444",
//                     },
//                   },
//                   modalUser.isActive ? "✅ Active" : "❌ Inactive",
//                 ),
//               ),
//             ),
//           ),

//           // Copy success message
//           copySuccess &&
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "8px",
//                   backgroundColor: copySuccess.includes("✅")
//                     ? "#d1fae5"
//                     : "#fee2e2",
//                   color: copySuccess.includes("✅") ? "#065f46" : "#991b1b",
//                   borderRadius: "4px",
//                   fontSize: "12px",
//                   textAlign: "center",
//                   marginBottom: "16px",
//                 },
//               },
//               copySuccess,
//             ),

//           // Hyperlink Section
//           React.createElement(
//             "div",
//             {
//               style: {
//                 marginBottom: "20px",
//                 padding: "16px",
//                 backgroundColor: "#f0f9ff",
//                 borderRadius: "8px",
//                 border: "1px solid #bae6fd",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "8px",
//                 },
//               },
//               React.createElement(
//                 "span",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: "#0369a1",
//                   },
//                 },
//                 "🔗 User Hyperlink",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: handleCopyHyperlink,
//                   style: {
//                     padding: "4px 12px",
//                     backgroundColor: "#0369a1",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                   },
//                 },
//                 "📋 Copy",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "10px",
//                   backgroundColor: "white",
//                   borderRadius: "6px",
//                   border: "1px solid #e5e7eb",
//                   fontSize: "13px",
//                   fontFamily: "monospace",
//                   wordBreak: "break-all",
//                 },
//               },
//               modalUser.userHyperlink || "No hyperlink provided",
//             ),

//             modalUser.userHyperlink &&
//               React.createElement(
//                 "button",
//                 {
//                   onClick: () => window.open(modalUser.userHyperlink, "_blank"),
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
//           ),

//           // Password Section
//           React.createElement(
//             "div",
//             {
//               style: {
//                 marginBottom: "20px",
//                 padding: "16px",
//                 backgroundColor: "#f0fdf4",
//                 borderRadius: "8px",
//                 border: "1px solid #bbf7d0",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "8px",
//                 },
//               },
//               React.createElement(
//                 "span",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: "#166534",
//                   },
//                 },
//                 "🔑 Password",
//               ),

//               React.createElement(
//                 "button",
//                 {
//                   onClick: handleCopyPassword,
//                   style: {
//                     padding: "4px 12px",
//                     backgroundColor: "#166534",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                   },
//                 },
//                 "📋 Copy",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "10px",
//                   backgroundColor: "white",
//                   borderRadius: "6px",
//                   border: "1px solid #e5e7eb",
//                   fontSize: "13px",
//                   fontFamily: "monospace",
//                   wordBreak: "break-all",
//                 },
//               },
//               modalUser.password ? "•".repeat(10) : "No password set",
//             ),
//           ),

//           // User Details Grid
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: "16px",
//                 marginBottom: "16px",
//               },
//             },
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Email",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#3b82f6",
//                     wordBreak: "break-all",
//                   },
//                 },
//                 modalUser.email || "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Phone",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#111827",
//                   },
//                 },
//                 modalUser.phone || "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "Member Since",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#111827",
//                   },
//                 },
//                 modalUser.createdAt
//                   ? new Date(modalUser.createdAt).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })
//                   : "N/A",
//               ),
//             ),

//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "12px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "6px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "11px",
//                     color: "#6b7280",
//                     marginBottom: "4px",
//                   },
//                 },
//                 "User ID",
//               ),
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     fontSize: "13px",
//                     fontWeight: "500",
//                     color: "#6b7280",
//                     fontFamily: "monospace",
//                   },
//                 },
//                 modalUser._id ? modalUser._id.slice(-8) : "N/A",
//               ),
//             ),
//           ),

//           // Location Section
//           modalUser.location &&
//             (modalUser.location.city || modalUser.location.country) &&
//             React.createElement(
//               "div",
//               {
//                 style: {
//                   padding: "16px",
//                   backgroundColor: "#f9fafb",
//                   borderRadius: "8px",
//                   marginBottom: "20px",
//                 },
//               },
//               React.createElement(
//                 "div",
//                 {
//                   style: {
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginBottom: "8px",
//                   },
//                 },
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "16px",
//                     },
//                   },
//                   "📍",
//                 ),
//                 React.createElement(
//                   "span",
//                   {
//                     style: {
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: "#111827",
//                     },
//                   },
//                   "Location",
//                 ),
//               ),
//               React.createElement(
//                 "p",
//                 {
//                   style: {
//                     fontSize: "14px",
//                     color: "#4b5563",
//                     marginLeft: "24px",
//                   },
//                 },
//                 [
//                   modalUser.location.street,
//                   modalUser.location.city,
//                   modalUser.location.state,
//                   modalUser.location.zipCode,
//                   modalUser.location.country,
//                 ]
//                   .filter(Boolean)
//                   .join(", ") || "No address provided",
//               ),
//             ),

//           // Action Buttons
//           React.createElement(
//             "div",
//             {
//               style: {
//                 display: "flex",
//                 gap: "10px",
//                 borderTop: "1px solid #e5e7eb",
//                 paddingTop: "20px",
//               },
//             },
//             React.createElement(
//               "button",
//               {
//                 onClick: () => {
//                   closeModal();
//                   handleEditUser(modalUser._id);
//                 },
//                 style: {
//                   flex: 1,
//                   padding: "12px",
//                   backgroundColor: "#10b981",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontSize: "14px",
//                   fontWeight: "500",
//                   cursor: "pointer",
//                 },
//               },
//               "✏️ Edit",
//             ),

//             React.createElement(
//               "button",
//               {
//                 onClick: () => {
//                   closeModal();
//                   handleDeleteClick(modalUser);
//                 },
//                 style: {
//                   flex: 1,
//                   padding: "12px",
//                   backgroundColor: "#ef4444",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontSize: "14px",
//                   fontWeight: "500",
//                   cursor: "pointer",
//                 },
//               },
//               "🗑️ Delete",
//             ),
//           ),
//         ),
//       ),
//   );
// };

// export default AdminUsers;