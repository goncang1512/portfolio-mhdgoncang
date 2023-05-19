import React from "react";
import "./KirimEmail.css";

function KirimEmail() {
  return (
    <div className="body">
      <div className="container-email">
        <div className="card-container">
          {/* card bagian kanan about me */}
          <div className="left">
            <div className="left-container">
              <h2>About Me</h2>
              <p>
                Halo, perekanalkan saya Mhd Goncang Samudera. Saya adalah
                seorang Front End Developer
                <br />
                dengan keahlian dalam menciptakan pengalaman pengguna yang
                menarik dan responsife di web.
                <br />
                Saya sangat antusias dalam menggabungkan desain kreatif dengan
                teknologi modern untuk
                <br />
                menciptakan situs web yang memukau.
              </p>
            </div>
          </div>
          {/* card bagian kanan kirim email */}
          <div className="right">
            <div className="right-container">
              <h2>Kirim Email</h2>
              <form action="https://formspree.io/f/mdovjrbr" method="POST">
                <input type="text" name="name" placeholder="Nama" />
                <input type="email" name="email" placeholder="Alamat Email" />
                <input type="phone" name="contact_no" placeholder="Telepone" />
                <textarea
                  rows="10"
                  name="messege"
                  placeholder="Pesan"
                ></textarea>
                <button>Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KirimEmail;
