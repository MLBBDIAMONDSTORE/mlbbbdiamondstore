const products = [
  { id: '1', diamonds: 100, price: 1.99 },
  { id: '2', diamonds: 500, price: 8.99 },
  { id: '3', diamonds: 1000, price: 16.99 },
];

const ProductList = ({ onSelect }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.diamonds} Diamonds - ${product.price}</span>
          <button onClick={() => onSelect(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;