import { useState } from "react";
import Axios from "axios";
import "./form.css";


function Fifa() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gamerTag, setGamerTag] = useState("");
  const [regNo, setRegNo] = useState("");
  const [cuspRank, setCuspRank] = useState("");

  async function registerFifaUser(event) {
    event.preventDefault();
    const res = await Axios.post(
      "https://forge-backend-service.onrender.com/fifa",
      {
        name: name,
        email: email,
        gamerTag: gamerTag,
        regNo: regNo,
        cuspRank: cuspRank,
      },
      {
        header: {
          "content-type": "application/json",
        },
      }
    ).then(() => (window.location.href = "/succuss"));
  }

  return (
    <div className="login">
    <div className="form">
      <h1 className="form-title">Fifa Registration</h1>
      <form method="POST" onSubmit={registerFifaUser}>
        <input
          value={name}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <br />
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          required

        />
        <br />
        <input
          value={gamerTag}
          type="text"
          placeholder="Gamer Tag"
          className="input"
          required
          onChange={(e) => setGamerTag(e.target.value)}
        />
        <br />
        <input
          value={regNo}
          type="text"
          placeholder="Registration Number ( ID No.)"
          className="input"
          required
          onChange={(e) => setRegNo(e.target.value)}
        />
        <br />
        <input
          value={cuspRank}
          type="text"
          placeholder="PhoneNumber(WhatsApp)"
          className="input"
          required
          onChange={(e) => setCuspRank(e.target.value)}
        />
        <br />
        <button type="submit" className="valorant-btn">
          <span class="underlay">
            <span class="label">Submit</span>
          </span>
        </button>
      </form>
    </div>
    </div>
  );
}

export default Fifa;
