import React from "react";
import "./karyaPage.css";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function projectpage() {
  return (
    <div>
      <div className="karya-page">
        <div className="teks-page">
          <h4>
            “Programming today is a race between
            <br /> software engineers striving to
            <br /> build bigger and better idiot-proof <br />
            programs and the Universe trying
            <br />
            to produce bigger and better trying <br />
            idiots. So far, the Universe is winning.”
          </h4>
          <p>― Rick Cook ―</p>
        </div>
      </div>
      {/* contact page */}
      <div className="contact-page">
        <h1>Contact</h1>
        <p>Email : samuderanst@gmail.com</p>
        <ul className="list-medsos">
          <li>
            <a href="https://www.instagram.com/mhdgoncang/?igshid=ZDdkNTZiNTM=">
              <button>
                <AiFillInstagram />
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/goncang1512">
              <button>
                <AiFillGithub />
              </button>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@sangadmintiki?is_from_webapp=1&sender_device=pc">
              <button>
                <FaTiktok />
              </button>
            </a>
          </li>
        </ul>
        <p className="hakcipta">Mhd Goncang</p>
      </div>
    </div>
  );
}

export default projectpage;
