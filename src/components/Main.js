import React from "react";

const Main = ({ handleLogout }) => {
  return (
    <section className="main-page">
      <nav>
        <h2>Congratulations, you are now logged in!</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Main;
