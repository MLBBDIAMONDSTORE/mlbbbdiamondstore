import { useState } from 'react';
import { createOrder } from './utils/api';
import NicknameInput from './components/NicknameInput';
import ProductList from './components/ProductList';

const App = () => {
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [order, setOrder] = useState(null);

  const handleValidate = (uid, zid) => {
    setUserId(uid);
    setZoneId(zid);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleOrder = async () => {
    try {
      const orderData = {
        userId,
        zoneId,
        productId: selectedProduct.id,
        diamonds: selectedProduct.diamonds,
        price: selectedProduct.price,
      };
      const newOrder = await createOrder(orderData);
      setOrder(new 