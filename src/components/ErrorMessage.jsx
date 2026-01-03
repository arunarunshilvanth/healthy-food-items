const ErrorMessage = ({ items }) => {
  /*let foodItems = ["Dal", "Green Vegetables", "Ghee", "Roti", "Milk", "fruits"];*/
  return <>{items.length === 0 && <h1>Iam Still hungry</h1>}</>;
};
export default ErrorMessage;
