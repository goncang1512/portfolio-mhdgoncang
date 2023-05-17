import React from "react";
import Navbar from "../navbarPage/Navbar";
import KaryaPage from "../karyaPage/karyaPage";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="navbar-page">
        <Navbar />
      </div>
      <div className="section-name">
        <div className="name-page">
          <h1>MHD GONCANG SAMUDERA</h1>
          <button>KIRIM EMAIL</button>
        </div>
      </div>
      <div className="section-biografi">
        <div className="foto-bio">
          <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
        <div className="isi-bio">
          <h2>About</h2>
          <p>
            Nama saya Mhd Goncang, saya seorang front end web develoment
            <br />
            yang akan buat web kalian bagus dan responsive.
          </p>
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
      </div>
      <div className="project-page">
        <KaryaPage />
      </div>
    </div>
  );
}

export default HomePage;
