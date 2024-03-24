import React from "react";
import CardItem from "../Card/CardItem";
import "../pages/Trainer.css";

function Trainer() {
  return (
    <div className="cards">
      <h1>Check out the famous trainers at your location!</h1>
      <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your location"
            />
            <button buttonStyle="btn--outline">Search</button>
          </form>
        </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.craiyon.com/2023-06-14/cdc2eb7a87194630ac86b7c55d9d2760.webp"
              text="Elon Musk"
              label="Famous Personality"
              path="/avtars"
            />
            <CardItem
              src="https://www.creativefabrica.com/wp-content/uploads/2022/12/14/Avatar-As-Santa-Claus-52405628-1.png"
              text="Santa Claus"
              label="Christmas"
              path="/avtars"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://assets.faireconomy.media/nfs/public/4/5/9/4/8/6/2/4594862.png?_=1700490914"
              text="Sam Altman"
              label="Technical"
              path="/avtars"
            />
            <CardItem
              src="https://img.mensxp.com/media/content/2023/May/327412771_194314266525316_1413687785335854694_n_6471c9926ef4a.jpeg"
              text="Mukesh Ambani"
              label="BusinessMan"
              path="/avtars"
            />
            <CardItem
              src="https://images1.zeebiz.com/images/ZB-HN/900x1600/2023/6/1/1685629209092_90s.jpg"
              text="Narendra Modi"
              label="Politician"
              path="/avtars"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
