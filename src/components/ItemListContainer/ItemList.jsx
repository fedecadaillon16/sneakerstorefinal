// src/components/ItemListContainer/ItemList.jsx
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="row g-4">
      {products.map(prod => (
        <div key={prod.id} className="col-12 col-md-6 col-lg-4">
          <Item product={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;