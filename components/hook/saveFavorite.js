import { useState, useEffect } from 'react';

const useHeartIconClick = () => {
  const [chosenItems, setChosenItems] = useState(() => {
    const storedChosenItems = localStorage.getItem('chosenItems');
    return storedChosenItems ? JSON.parse(storedChosenItems) : [];
  });

  const handleHeartIconClick = (item) => {
    if (!chosenItems.some((selectedItem) => selectedItem.id === item.id)) {
      setChosenItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  const handleRemoveItem = (itemId) => {
    setChosenItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== itemId)
    );
    const updatedItems = chosenItems.filter((item) => item.id !== itemId);
    localStorage.setItem('chosenItems', JSON.stringify(updatedItems));
  };

  const handleClearAll = () => {
    setChosenItems([]);
    localStorage.removeItem('chosenItems');
  };

  useEffect(() => {
    localStorage.setItem('chosenItems', JSON.stringify(chosenItems));
  }, [chosenItems]);

  return { chosenItems, handleHeartIconClick, handleRemoveItem, handleClearAll };
};

export default useHeartIconClick;
