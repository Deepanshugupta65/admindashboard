// Importing the CSS file for styling
import "./newProduct.css";

// Functional component for creating a new product
export default function NewProduct() {
  return (
    // Main container for the new product form
    <div className="newProduct">
      {/* Title for the new product section */}
      <h1 className="addProductTitle">New Product</h1>

      {/* Form for adding a new product */}
      <form className="addProductForm">
        {/* Input for selecting an image file */}
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>

        {/* Input for entering the product name */}
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>

        {/* Input for entering the stock quantity */}
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>

        {/* Dropdown for selecting whether the product is active or not */}
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Button to submit and create the new product */}
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
