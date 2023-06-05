import React from "react";
import "./ProjekAku.css";
import ImgProjek2 from "./img/projek-02.jpg";
import ImgProjek3 from "./img/projek-03.jpg";
import ImgProjek4 from "./img/projek-04.jpg";
import ImgProjek1 from "./img/projek-01.png";

export default function ProjekAku() {
  return (
    <div className="body-projek-aku" id="project">
      <div className="container-projek-aku">
        <div className="tittle-projek">
          <h1>Project </h1>
          <p className="paragraf-title">
            Berikut adalah beberapa proyek yang telah saya buat dengan HTML,
            CSS, dan Java Script. Pembuatan halaman web responsif dan interaktif
            untuk klien yang berbeda dalam berbagai industri. Pengembangan
            aplikasi web yang melibatkan fitur-fitur seperti formulir interaktif
            dan animasi. Pembuatan tampilan antarmuka pengguna UI yang menarik
            dan intuitif untuk aplikasi web dan mobile.
          </p>
        </div>
        <div className="konten-kanan">
          <div className="card-projek">
            <div>
              <img src={ImgProjek1} />
              <h3 className="tittle-box"></h3>
              <h3 className="tittle">
                <a
                  style={{ textDecoration: "none" }}
                  className="tittle"
                  href="https://web-kasir-mhdgoncang.netlify.app/"
                >
                  <h3>Kasir</h3>
                </a>
              </h3>
            </div>
          </div>
          <div className="card-projek">
            <div>
              <img src={ImgProjek2} />
              <h3 className="tittle-box"></h3>
              <h3 className="tittle">My Project</h3>
            </div>
          </div>
          <div className="card-projek">
            <div>
              <img src={ImgProjek3} />
              <h3 className="tittle-box"></h3>
              <h3 className="tittle">My Project</h3>
            </div>
          </div>
          <div className="card-projek">
            <div>
              <img src={ImgProjek4} />
              <h3 className="tittle-box"></h3>
              <h3 className="tittle">My Project</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
