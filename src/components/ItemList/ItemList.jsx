// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;