// Importing the CSS file for styling
import "./sidebar.css";

// Importing Material-UI icons for the sidebar
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

// Importing the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Functional component for the sidebar
export default function Sidebar() {
  return (
    // Main container for the sidebar
    <div className="sidebar">
      {/* Wrapper for the content within the sidebar */}
      <div className="sidebarWrapper">
        {/* First section of the sidebar - Dashboard */}
        <div className="sidebarMenu">
          {/* Title for the section */}
          <h3 className="sidebarTitle">Dashboard</h3>

          {/* List of items within the section */}
          <ul className="sidebarList">
            {/* Link to the home page */}
            <Link to="/" className="link">
              {/* Dashboard item with an icon */}
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            {/* Other dashboard items with icons */}
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        {/* Second section of the sidebar - Quick Menu */}
        <div className="sidebarMenu">
          {/* Title for the section */}
          <h3 className="sidebarTitle">Quick Menu</h3>

          {/* List of items within the section */}
          <ul className="sidebarList">
            {/* Link to the users page */}
            <Link to="/users" className="link">
              {/* Quick menu item with an icon */}
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>

            {/* Link to the products page */}
            <Link to="/products" className="link">
              {/* Quick menu item with an icon */}
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>

            {/* Other quick menu items with icons */}
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        {/* Third section of the sidebar - Notifications */}
        <div className="sidebarMenu">
          {/* Title for the section */}
          <h3 className="sidebarTitle">Notifications</h3>

          {/* List of items within the section */}
          <ul className="sidebarList">
            {/* Notification items with icons */}
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        {/* Fourth section of the sidebar - Staff */}
        <div className="sidebarMenu">
          {/* Title for the section */}
          <h3 className="sidebarTitle">Staff</h3>

          {/* List of items within the section */}
          <ul className="sidebarList">
            {/* Staff items with icons */}
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
