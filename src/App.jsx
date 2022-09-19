import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [repositorios, setRepositorios] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    fetch("http://api.github.com/users/inaciofabricio/repos")
      .then(res => res.json())
      .then(data => setRepositorios(data))
  }, [])

  const repositoriosFiltrados = buscar.length > 0 ? 
    repositorios.filter(repo => repo.name.includes(buscar)) : repositorios;


  return (
    <div>
      <input 
        type="text"
        onChange={e => setBuscar(e.target.value)}
        value={buscar} 
      />
      {
        repositoriosFiltrados.map((obj, x) => {
          return (
            <div key={x}>
              {obj.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
