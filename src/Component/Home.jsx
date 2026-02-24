import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Flower World 🌸</h1>

        <p style={styles.subtitle}>
          Discover the beauty of roses, sunflowers, and tulips.
        </p>

        <p style={styles.text}>
          Click on a flower category above to explore detailed information
          about each beautiful flower.
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => navigate("/rose")}
          >
            Explore Flowers
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8e8ee",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "60%",
    maxWidth: "700px",
  },
  title: {
    fontSize: "36px",
    color: "#e91e63",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "30px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    padding: "12px 30px",
    backgroundColor: "#e91e63",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;