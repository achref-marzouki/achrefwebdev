import "./Donate.css";
import profileImage from "../assets/achref.jpg";
import Navbar from "../components/Navbar";

export default function Donate() {
  return (
    <div id="root">
      <title>Support Us | achrefwebdev</title>

      <Navbar />

      <main className="donate-page">
        <div className="donate-container">
          <div className="donate-content">
            <h1 className="donate-title">Donate</h1>

            <p className="donate-text">
              Thanks for supporting the achrefwebdev channel!
            </p>

            <p className="donate-text">
              I teach coding because I believe it can completely transform a
              person's life and help them become financially secure.
            </p>

            <p className="donate-text">
              Your donation helps cover website costs and equipment for creating
              high-quality educational content.
            </p>

            <p className="donate-note">
              (Note: This is not a registered charity. Tax receipts are not
              unavailable.)
            </p>

            <DonationBox />
          </div>

          <div className="donate-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </main>
    </div>
  );
}

function DonationBox() {
  return (
    <div className="donation-box">
      <div className="donation-amounts">
        <button>$5</button>
        <button>$10</button>
        <button>$20</button>
      </div>

      <div className="donation-custom">
        <input
          type="number"
          placeholder="Custom amount"
          className="donation-input"
        />
        <button className="donate-button">Donate</button>
      </div>
    </div>
  );
}
