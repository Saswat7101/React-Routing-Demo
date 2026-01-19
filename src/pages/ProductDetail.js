import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>Details for product ID: {params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
