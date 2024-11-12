
import React from "react";
import { FaBook, FaUsers,FaUniversity } from "react-icons/fa";
import "./Section.css";

const Section = () => {
  return (
    <section className="state-section">

      <div className="state-content">
        <h2>700+ students saved, and counting</h2>
        <p>50K new study notes added every day, from the world’s most active student communities</p>

        <div className="state-cards">

          <div className="stat-card">
            <h3>350+</h3>
            <p><FaBook/> <b>Study resources</b></p>
          </div>

          <div className="stat-card">
            <h3>115+</h3>
            <p><FaUniversity/> <b>Institutions</b></p>
          </div>

          <div className="stat-card">
            <h3>700+</h3>
            <p><FaUsers/> <b>Users</b></p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Section;
