import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>Welcome to the Homepage</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate to Products</button>
    </>
  );
}
export default Homepage;
