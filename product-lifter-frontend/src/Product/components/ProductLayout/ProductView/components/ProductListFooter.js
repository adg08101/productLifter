import CustomButton from "../CustomButton";
import AddButton from "../../AddButton";

const ProductListFooter = function footer({ onClickFunc, addProductFunction }) {
  return (
    <>
      <CustomButton
        onClickFunc={onClickFunc}
        messageOne="refresh_now"
        messageTwo="refresh_now"
      ></CustomButton>
      <AddButton text="Add button" onClickFunc={addProductFunction} />
    </>
  );
};

export default ProductListFooter;
