// Importing the CSS file for styling
import "./widgetSm.css";

// Importing Material-UI icon for visibility
import { Visibility } from "@material-ui/icons";

// Functional component for the small widget displaying new join members
export default function WidgetSm() {
  return (
    // Main container for the small widget
    <div className="widgetSm">
      {/* Title for the small widget */}
      <span className="widgetSmTitle">New Join Members</span>

      {/* List displaying information about new join members */}
      <ul className="widgetSmList">
        {/* Item in the list */}
        <li className="widgetSmListItem">
          {/* User's profile image */}
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />

          {/* User details */}
          <div className="widgetSmUser">
            {/* User's name */}
            <span className="widgetSmUsername">Anna Keller</span>

            {/* User's job title */}
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          {/* Button to display user's profile */}
          <button className="widgetSmButton">
            {/* Visibility icon */}
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* Additional list items with the same structure */}
      </ul>
    </div>
  );
}
