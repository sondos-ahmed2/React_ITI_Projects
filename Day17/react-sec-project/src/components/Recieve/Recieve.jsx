export default function Recieve({product, deletProduct}) {
  let {id, prodName, price, onSale, desc, quantity} = product;
  return (
    <>
      <div className="col-md-3 mb-4">
        <div className="bg-info text-center p-4 position-relative">
          <h2>Name: {prodName}</h2>
          <h2>Price: {price}</h2>
          <h2>Desc: {desc}</h2>
          <h2>Quality: {quantity}</h2>
          {onSale ? (
            <span className="bg-danger p-2 position-absolute top-0 end-0">
              Onsale
            </span>
          ) : (
            ``
          )}
          <div className="my-3">
            <button
              className="btn bg-danger me-2"
              onClick={() => deletProduct(id)}
            >
              delete
            </button>
            <button className="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    </>
  );
}