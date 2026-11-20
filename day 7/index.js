const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightblue" }}>
      <h1>E-commerce Website</h1>
    </div>
  );
};

const ProductComponent = () => {
  return (
    <div className="prod-container">
      
        <div>Product 1</div>
        <div>Product 2</div>
        <div>Product 3</div>
        <div>Product 4</div>
        <div>Product 5</div>
        <div>Product 6</div>
      </div>
    
  );
};

const FooterComponent = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const reactElement = (
  <div>
    <HeaderComponent />
    <ProductComponent />
    <FooterComponent />
    {ProductComponent()}
  </div>
);

root.render(reactElement);