import React, { useState } from 'react';

function ProductList({ onNext }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAdd = (item) => {
    setSelectedItems(prev => [...prev, item]);
  };

  return (
    <div>
      <button onClick={() => onNext(selectedItems)}>Next</button>
    </div>
  );
}

export default ProductList;
