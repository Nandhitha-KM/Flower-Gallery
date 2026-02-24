import roses from "./roses";

function Rose() {
  return (
    <div className="container">
      {roses.map((flower, index) => (
        <div className="card" key={index}>
          <img src={flower.url} />
          <h3>{flower.name}</h3>
          <p>{flower.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Rose;