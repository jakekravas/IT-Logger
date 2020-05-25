import React, { useState, useEffect } from 'react';
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    // Unlike axios, we have to manually format it as JSON
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {/* if loading is done (false) map thru techs */}
          {!loading && techs.map(tech => (
            <TechItem tech={tech} key={tech.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal;