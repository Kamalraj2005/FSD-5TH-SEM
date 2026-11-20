import React from "react";

const Header = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <div>MyWebsite</div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>Home</div>
          <div>Products</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </nav>
        </div>
  )
}
export default Header;