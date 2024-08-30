import "../Style/Home.css";
function SingleProduct({ prod }) {
  return (
    <>
      <div className="listheader">
        {prod.name}
      </div>
    </>
  );
}

export default SingleProduct;
