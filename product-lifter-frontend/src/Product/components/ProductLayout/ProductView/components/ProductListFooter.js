import ManualFetch from "../ManualFetch";
import AddButton from "../../AddButton";

const ProductListFooter = function footer({
  onClickFunc,
  seeLessFunc,
  seeMoreFunc,
}) {
  return (
    <>
      <ManualFetch
        onClickFunc={onClickFunc}
        messageOne="refresh_now"
        messageTwo="refresh_now"
      ></ManualFetch>
      <ManualFetch
        onClickFunc={seeLessFunc}
        messageOne="-"
        messageTwo="-"
      ></ManualFetch>
      <ManualFetch
        onClickFunc={seeMoreFunc}
        messageOne="+"
        messageTwo="+"
      ></ManualFetch>
      <AddButton text="Add button" />
    </>
  );
};

export default ProductListFooter;
