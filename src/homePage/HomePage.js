import React from "react";
import Navbar from "../navbarPage/Navbar";
import KaryaPage from "../karyaPage/karyaPage";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <div className="navbar-page">
        <Navbar />
      </div>
      <div className="section-name">
        <div className="name-page">
          <h1>MHD GONCANG SAMUDERA</h1>
          <button onClick={() => navigate("/kirim-email")}>KIRIM EMAIL</button>
        </div>
      </div>
      <div className="section-biografi">
        <div className="foto-bio">
          <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
        <div className="isi-bio">
          <h2>About</h2>
          <p>
            Halo, perekanalkan saya Mhd Goncang Samudera. Saya adalah seorang
            Front End Developer
            <br />
            dengan keahlian dalam menciptakan pengalaman pengguna yang menarik
            dan responsife di web.
            <br />
            Saya sangat antusias dalam menggabungkan desain kreatif dengan
            teknologi modern untuk
            <br />
            menciptakan situs web yang memukau.
          </p>
          <p>
            Dengan latar belakang pendidikan di SMA. Saya belajar front end
            development dengan menonton
            <br />
            You Tube dan belajar dari website. Saya telah memperoleh pemahaman
            yang mendalam tentang
            <br />
            bahasa pemograman seperti HTML dan CSS, sedangakan untuk Java Script
            saya hanya bisa
            <br />
            memahami dasarnya saja. Dan framework yang saya gunakan adalah React
            JS untuk membangun
            <br />
            antarmuka yang dinamis.
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
