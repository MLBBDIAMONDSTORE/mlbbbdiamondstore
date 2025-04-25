import React, { useContext } from 'react';
import ProductCard from '../components/Product/ProductCard';
import { OrderContext } from '../context/OrderContext';
import '../styles/OrderForm.css';

const products = [
  { id: 1, name: 'Hotdog', emoji: '🌭', price: 10000 },
  { id: 2, name: 'Burger', emoji: '🍔', price: 12000 },
  { id: 3, name: 'Pizza', emoji: '🍕', price: 15000 },
  { id: 4, name: 'Sushi', emoji: '🍣', price: 18000 },
  { id: 5, name: 'Taco', emoji: '🌮', price: 13000 },
];

const OrderForm = () => {
  const { order, setOrder } = useContext(OrderContext);

  const handleSelect = (product) => {
    const existingItem = order.items.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems = order.items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setOrder({ ...order, items: updatedItems });
    } else {
      setOrder({ ...order, items: [...order.items, { ...product, quantity: 1 }] });
    }
  };

  return (
    <div className="order-form">
      <h2>Mahsulotlar</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default OrderForm;