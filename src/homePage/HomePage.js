import React from "react";
import Navbar from "../navbarPage/Navbar";
import KaryaPage from "../karyaPage/karyaPage";
import { useNavigate } from "react-router-dom";
import FotoProfil from "./imghome/foto-profil.png";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="HomePage" id="home">
      <div className="navbar-page">
        <Navbar />
      </div>
      <div className="section-name">
        <div className="name-page">
          <h1>MHD GONCANG SAMUDERA</h1>
          <button onClick={() => navigate("/kirim-email")}>KIRIM EMAIL</button>
        </div>
      </div>
      <div className="section-biografi" id="about">
        <div className="foto-bio">
          <div className="blobmaker">
            <svg width="100%" height="100%" className="blob">
              <path>
                <animate
                  attributeName="d"
                  dur="15000ms"
                  repeatCount="indefinite"
                  values="
                  M417,308.5Q389,367,334,392Q279,417,221.5,408.5Q164,400,90.5,367.5Q17,335,18.5,250.5Q20,166,79,111.5Q138,57,212.5,49Q287,41,355,73Q423,105,434,177.5Q445,250,417,308.5Z; 
      
                  M435.5,309.5Q392,369,340.5,420Q289,471,217.5,451Q146,431,114.5,371Q83,311,79.5,249Q76,187,100.5,110.5Q125,34,203,54.5Q281,75,360,83.5Q439,92,459,171Q479,250,435.5,309.5Z; 
      
                  M447.5,319.5Q416,389,348,405.5Q280,422,215,422.5Q150,423,122.5,365Q95,307,86.5,247Q78,187,105.5,117Q133,47,206.5,64Q280,81,350.5,94Q421,107,450,178.5Q479,250,447.5,319.5Z;
      
                  M449,329.5Q440,409,362,427Q284,445,229,413.5Q174,382,97.5,357.5Q21,333,48.5,260Q76,187,117.5,140Q159,93,225.5,53Q292,13,350,65Q408,117,433,183.5Q458,250,449,329.5Z;
      
                  M443.5,315Q404,380,343,405Q282,430,215.5,427Q149,424,97,374.5Q45,325,70.5,259.5Q96,194,129,146Q162,98,219,99Q276,100,338.5,111.5Q401,123,442,186.5Q483,250,443.5,315Z;
      
                  M417,308.5Q389,367,334,392Q279,417,221.5,408.5Q164,400,90.5,367.5Q17,335,18.5,250.5Q20,166,79,111.5Q138,57,212.5,49Q287,41,355,73Q423,105,434,177.5Q445,250,417,308.5Z;"
                />
              </path>
            </svg>
          </div>
          <div className="blobmaker">
            <svg width="100%" height="100%" className="blob">
              <path>
                <animate
                  attributeName="d"
                  dur="15000ms"
                  repeatCount="indefinite"
                  values="
                  M417,308.5Q389,367,334,392Q279,417,221.5,408.5Q164,400,90.5,367.5Q17,335,18.5,250.5Q20,166,79,111.5Q138,57,212.5,49Q287,41,355,73Q423,105,434,177.5Q445,250,417,308.5Z; 
      
                  M435.5,309.5Q392,369,340.5,420Q289,471,217.5,451Q146,431,114.5,371Q83,311,79.5,249Q76,187,100.5,110.5Q125,34,203,54.5Q281,75,360,83.5Q439,92,459,171Q479,250,435.5,309.5Z; 
      
                  M447.5,319.5Q416,389,348,405.5Q280,422,215,422.5Q150,423,122.5,365Q95,307,86.5,247Q78,187,105.5,117Q133,47,206.5,64Q280,81,350.5,94Q421,107,450,178.5Q479,250,447.5,319.5Z;
      
                  M449,329.5Q440,409,362,427Q284,445,229,413.5Q174,382,97.5,357.5Q21,333,48.5,260Q76,187,117.5,140Q159,93,225.5,53Q292,13,350,65Q408,117,433,183.5Q458,250,449,329.5Z;
      
                  M443.5,315Q404,380,343,405Q282,430,215.5,427Q149,424,97,374.5Q45,325,70.5,259.5Q96,194,129,146Q162,98,219,99Q276,100,338.5,111.5Q401,123,442,186.5Q483,250,443.5,315Z;
      
                  M417,308.5Q389,367,334,392Q279,417,221.5,408.5Q164,400,90.5,367.5Q17,335,18.5,250.5Q20,166,79,111.5Q138,57,212.5,49Q287,41,355,73Q423,105,434,177.5Q445,250,417,308.5Z;"
                />
              </path>
            </svg>
          </div>
          <img src={FotoProfil} className="foto-profil" />
        </div>
        <div className="isi-bio">
          <h2>About</h2>
          <div className="paragraf-about">
            <p>
              Halo, perekanalkan saya Mhd Goncang Samudera. Saya adalah seorang
              Front End Developer dengan keahlian dalam menciptakan pengalaman
              pengguna yang menarik dan responsife di web. Saya sangat antusias
              dalam menggabungkan desain kreatif dengan teknologi modern untuk
              menciptakan situs web yang memukau.
            </p>
            <br />
            <p>
              Dengan latar belakang pendidikan di SMA. Saya belajar front end
              development dengan menonton You Tube dan belajar dari website.
              Saya telah memperoleh pemahaman yang mendalam tentang bahasa
              pemograman seperti HTML dan CSS, sedangakan untuk Java Script saya
              hanya bisa memahami dasarnya saja. Dan framework yang saya gunakan
              adalah React JS untuk membangun antarmuka yang dinamis.
            </p>
          </div>

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
