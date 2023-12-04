// Importing the CSS file for styling
import "./widgetLg.css";

// Functional component for the large widget displaying latest transactions
export default function WidgetLg() {
  // Button component with a dynamic type
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    // Main container for the large widget
    <div className="widgetLg">
      {/* Title for the large widget */}
      <h3 className="widgetLgTitle">Latest transactions</h3>

      {/* Table displaying latest transactions */}
      <table className="widgetLgTable">
        {/* Table header row */}
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {/* Table rows with transaction details */}
        <tr className="widgetLgTr">
          {/* User details */}
          <td className="widgetLgUser">
            {/* User's profile image */}
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            {/* User's name */}
            <span className="widgetLgName">Susan Carol</span>
          </td>

          {/* Transaction date */}
          <td className="widgetLgDate">2 Jun 2021</td>

          {/* Transaction amount */}
          <td className="widgetLgAmount">$122.00</td>

          {/* Transaction status with a dynamic button */}
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        {/* Additional table rows with the same structure */}
      </table>
    </div>
  );
}
