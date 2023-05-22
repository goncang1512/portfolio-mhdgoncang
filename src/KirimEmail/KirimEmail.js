import React from "react";
import "./KirimEmail.css";
import { useForm } from "@formspree/react";

function KirimEmail() {
  const [state, handleSubmit] = useForm("mdovjrbr");
  if (state.succeeded) {
    return (
      <div className="EmailThanks">
        <div className="container-EmailThanks">
          <h1>Pesan sudah di kirim</h1>
        </div>
      </div>
    );
  }
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
              <form onSubmit={handleSubmit}>
                <input type="text" name="Nama" placeholder="Nama" required />
                <input
                  type="email"
                  name="Email"
                  placeholder="Alamat Email"
                  required
                />
                <input
                  type="phone"
                  name="Kontak"
                  placeholder="Telepone"
                  required
                />
                <textarea
                  rows="10"
                  name="Pesan"
                  placeholder="Pesan"
                  required
                ></textarea>
                <button type="submit">Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KirimEmail;
