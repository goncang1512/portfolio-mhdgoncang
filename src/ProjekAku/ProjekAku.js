import React from "react";
import "./ProjekAku.css";
import { AiOutlineUser } from "react-icons/ai";

export default function ProjekAku() {
  return (
    <div className="body-projek-aku">
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
              <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <h3 className="tittle-box"></h3>
              <h3 className="tittle">My Project</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
