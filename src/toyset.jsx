import React, {  useEffect, useState } from 'react';
import './App.css';

const Apps = () => {
  const [jt, setJyotirlingas] = useState([]);

  useEffect(() => {
    fetch('src/temple2.json')
      .then(respons => respons.json())
      .then(dat => setJyotirlingas(dat.jyoti))
      .catch(err => console.error('Error fetching Jyotirlingas:', err));
  }, []);

  function Temple(prop) {
    return <li> {prop.temple}</li>;
  }

  return (
    <ul>
      {jt.map((jyotirlinga) => <Temple temple={jyotirlinga.name+":" +  jyotirlinga.history  })}
    </ul>
  );
};

export default Apps;
