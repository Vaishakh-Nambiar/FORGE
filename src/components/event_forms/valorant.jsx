import {useState} from 'react';
import Axios from 'axios'
import './form.css'

function Valorant(){
    const [TeamName, setTeamName] = useState("");
    const [CaptainPhone, setCaptainPhone] = useState("");
    const [IgName, setIgName] = useState("");
    const [DiscordId, setDiscordId] = useState("");
    const [TxId, setTxId] = useState("");

    async function registerUser(event) {
      event.preventDefault();
      await Axios.post(
        "https://forge-backend-service.onrender.com/valo",
        {
          TeamName: TeamName,
          CaptainPhone: CaptainPhone,
          CaptainIgName: IgName,
          CaptainDiscordId: DiscordId,
          TxId: TxId,
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
        <h1 className="form-title">Valorant Registration</h1>
        <form method="POST" onSubmit={registerUser}>
          <input
            value={TeamName}
            type="text"
            placeholder="Team Name"
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
          <br />
          <input
            value={CaptainPhone}
            type="text"
            placeholder="Captain Phone number"
            onChange={(e) => setCaptainPhone(e.target.value)}
            required
          />
          <br />
          <input
            value={IgName}
            type="text"
            placeholder="Captain InGame Name and Tagline"
            onChange={(e) => setIgName(e.target.value)}
            required
          />
          <br />
          <input
            value={DiscordId}
            type="text"
            placeholder="Discord Id"
            onChange={(e) => setDiscordId(e.target.value)}
            required
          />
          <br />
          <input
            value={TxId}
            type="text"
            placeholder="Alternate Contact Number (WhatsApp)"
            onChange={(e) => setTxId(e.target.value)}
            required
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

export default Valorant