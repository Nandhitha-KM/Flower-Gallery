import tulips from "./tulips";

function Tulip() {
  return (
    <div className="container">
      {tulips.map((flower, index) => (
        <div className="card" key={index}>
          <img src={flower.url} alt={flower.name} />
          <h3>{flower.name}</h3>
          <p>{flower.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Tulip;