// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header
//       style={{
//         background: "#ffffff",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//         padding: "15px 0",
//         position: "sticky",
//         top: "0",
//         zIndex: "100",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "30px",
//           margin: "0 auto",
//           maxWidth: "1200px",
//           padding: "0 20px",
//         }}
//       >
//         <Link
//           to={""}
//           style={{
//             textDecoration: "none",
//             color: "#333",
//             fontWeight: "500",
//             fontSize: "18px",
//             transition: "all 0.3s ease",
//             padding: "5px 10px",
//             borderRadius: "5px",
//           }}
//           onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
//           onMouseOut={(e) => (e.target.style.color = "#333")}
//         >
//           Home
//         </Link>
//         <Link
//           to={"about"}
//           style={{
//             textDecoration: "none",
//             color: "#333",
//             fontWeight: "500",
//             fontSize: "18px",
//             transition: "all 0.3s ease",
//             padding: "5px 10px",
//             borderRadius: "5px",
//           }}
//           onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
//           onMouseOut={(e) => (e.target.style.color = "#333")}
//         >
//           About
//         </Link>
//         <Link
//           to={"contact"}
//           style={{
//             textDecoration: "none",
//             color: "#333",
//             fontWeight: "500",
//             fontSize: "18px",
//             transition: "all 0.3s ease",
//             padding: "5px 10px",
//             borderRadius: "5px",
//           }}
//           onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
//           onMouseOut={(e) => (e.target.style.color = "#333")}
//         >
//           Contact
//         </Link>
//         <Link
//           to={"products"}
//           style={{
//             textDecoration: "none",
//             color: "#333",
//             fontWeight: "500",
//             fontSize: "18px",
//             transition: "all 0.3s ease",
//             padding: "5px 10px",
//             borderRadius: "5px",
//           }}
//           onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
//           onMouseOut={(e) => (e.target.style.color = "#333")}
//         >
//           Services
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo and Brand */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">ShopCart</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link
                to="/"
                className="text-base-content hover:bg-base-200 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base-content hover:bg-base-200 hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-base-content hover:bg-base-200 hover:text-primary"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base-content hover:bg-base-200 hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Shopping Cart and User Profile (optional) */}
        <div className="flex-none gap-2">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item badge-primary">
                3
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
