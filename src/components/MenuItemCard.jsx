import MenuItemCard from "./MenuItemCard"; // Ensure this is relative to your Menu.jsx file



function Menu({ addToOrder }) {
  const menuItems = {
    burgers: [
      { id: 1, name: "Cheeseburger", price: 5.99, image: "/images/cheeseburger.jpg" },
      { id: 2, name: "Bacon Burger", price: 6.99, image: "/images/bacon-burger.jpg" },
    ],
    fries: [
      { id: 3, name: "French Fries", price: 2.99, image: "/images/fries.jpg" },
      { id: 4, name: "Curly Fries", price: 3.49, image: "/images/curly-fries.jpg" },
    ],
    drinks: [
      { id: 5, name: "Soda", price: 1.49, image: "/images/soda.jpg" },
      { id: 6, name: "Milkshake", price: 3.99, image: "/images/milkshake.jpg" },
    ]
  };

  return (
    <div className="menu">
      {Object.keys(menuItems).map((category) => (
        <div key={category} className="category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="card-deck">
            {menuItems[category].map((item) => (
              <MenuItemCard key={item.id} item={item} addToOrder={addToOrder} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
