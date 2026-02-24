import sunflowers from "./sunflowers";

function Sunflower() {
  return (
    <div className="container">
      {sunflowers.map((flower, index) => (
        <div className="card" key={index}>
          <img src={flower.url} alt={flower.name} />
          <h3>{flower.name}</h3>
          <p>{flower.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Sunflower;