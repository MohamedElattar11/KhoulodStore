const FilterMenu = ({
  price,
  rate,
  category,
  categories,
  currentCategory,
  colors,
  getProductWirhColor,
  getProducts,
  getProductWithRate,
  setRate,
  getProductWirhPrice,
  setPrice,
  changeCurrentCateegory,
}) => {
  return (
    <>
      <div className="filterPrice  ps-4 mb-8">
        <h1 className="text-lg mb-4">Price</h1>
        <label htmlFor="vol" className="text-gray-700">
          Price (between 30 and 700):
        </label>
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="700"
          step="50"
          className="w-full h-6 outline-none bg-blue-200 rounded-md appearance-none focus😮utline-none focus:bg-blue-400"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            getProductWirhPrice(+e.target.value);
          }}
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span className="text-black">0</span>
          <span className="text-black">100</span>
          <span className="text-black">200</span>
          <span className="text-black">300</span>
          <span className="text-black">400</span>
          <span className="text-black">500</span>
          <span className="text-black">600</span>
          <span className="text-black">700</span>
        </div>
      </div>
      <div className="filterRate  ps-4 mb-8">
        <h1 className="text-lg mb-4">Rate</h1>
        <label htmlFor="vol" className="text-gray-700">
          Rate (between 1 and 5):
        </label>
        <input
          type="range"
          id="vol"
          name="vol"
          min="1"
          max="5"
          step="1"
          className="w-full h-6 outline-none bg-blue-200 rounded-md appearance-none focus😮utline-none focus:bg-blue-400"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
            getProductWithRate(+e.target.value);
          }}
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span className="text-black">1</span>
          <span className="text-black">2</span>
          <span className="text-black">3</span>
          <span className="text-black">4</span>
          <span className="text-black">5</span>
        </div>
                  
      </div>
      <div className="filtercategory mb-4 ps-4">
        <h1 className="text-lg mb-4 font-bold">Category</h1>
        <div className=" flex justify-center flex-col ms-5">
          <h5
            className={`categorylink mb-4 text-base ${
              currentCategory === "" ? "categoryactive" : ""
            } ms-5`}
            onClick={() => {
              changeCurrentCateegory("");
            }}
          >
            All
          </h5>

          {categories?.map((category,ind) => {
            return (
              <>
                <h5
                  key={ind}
                  className={`categorylink mb-4 ms-5 text-base ${
                    category?.name === currentCategory ? "categoryactive" : ""
                  }`}
                  onClick={() => {
                    changeCurrentCateegory(category.name);
                  }}
                >
                  {category.name}
                </h5>
              </>
            );
          })}
        </div>
      </div>
      {/* <div className="filtercolor mb-4 ps-4">
        <h1 className="text-lg mb-4 font-bold">Color</h1>
        <div className=" flex justify-center flex-col ms-5">
          <h5
            className="categorylink mb-4 ml-7 text-base"
            onClick={() => getProducts()}
          >
            All
          </h5>
          {colors?.map((color) => {
            return (
              <div style={{ display: "flex", gap: "8px" }} key={color?.id}>
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "20%",
                    backgroundColor: color.name,
                    display: "inline-block",
                    marginTop: "5px",
                  }}
                ></span>
                <h5
                  className={`categorylink mb-4 text-base `}
                  onClick={() => getProductWirhColor(color.name)}
                >
                  {color.name}
                </h5>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default FilterMenu;
