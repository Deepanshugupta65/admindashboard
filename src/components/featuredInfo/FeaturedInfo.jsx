// Importing the CSS file for styling
import "./featuredInfo.css";

// Importing Material-UI icons for featured information
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

// Functional component for displaying featured information
export default function FeaturedInfo() {
  return (
    // Main container for featured information
    <div className="featured">
      {/* First featured item - Revenue */}
      <div className="featuredItem">
        {/* Title for the featured item */}
        <span className="featuredTitle">Revenue</span>

        {/* Container for displaying money and rate */}
        <div className="featuredMoneyContainer">
          {/* Displaying revenue */}
          <span className="featuredMoney">$2,415</span>

          {/* Displaying revenue rate with an arrow icon */}
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>

        {/* Subtitle indicating a comparison with the last month */}
        <span className="featuredSub">Compared to last month</span>
      </div>

      {/* Second featured item - Sales */}
      <div className="featuredItem">
        {/* Title for the featured item */}
        <span className="featuredTitle">Sales</span>

        {/* Container for displaying money and rate */}
        <div className="featuredMoneyContainer">
          {/* Displaying sales */}
          <span className="featuredMoney">$4,415</span>

          {/* Displaying sales rate with an arrow icon */}
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>

        {/* Subtitle indicating a comparison with the last month */}
        <span className="featuredSub">Compared to last month</span>
      </div>

      {/* Third featured item - Cost */}
      <div className="featuredItem">
        {/* Title for the featured item */}
        <span className="featuredTitle">Cost</span>

        {/* Container for displaying money and rate */}
        <div className="featuredMoneyContainer">
          {/* Displaying cost */}
          <span className="featuredMoney">$2,225</span>

          {/* Displaying cost rate with an arrow icon */}
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>

        {/* Subtitle indicating a comparison with the last month */}
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
