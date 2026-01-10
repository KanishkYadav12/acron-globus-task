import React from "react";
import IconSidebar from "../IconSidebar/IconSidebar";
import NavSidebar from "../NavSidebar/NavSidebar";
import Header from "../Header/Header";
import TeamRow from "../TeamRow/TeamRow";
import ReportHeader from "../ReportHeader/ReportHeader";
import StatsSection from "../StatsSection/StatsSection";
import BreakdownBar from "../BreakdownBar/BreakdownBar";
import PlatformBreakdown from "../PlatformBreakdown/PlatformBreakdown";
import PlatformValue from "../PlatformValue/PlatformValue";
import SalesTable from "../SalesTable/SalesTable";
import WorkWithPlatforms from "../WorkWithPlatforms/WorkWithPlatforms";
import SalesDynamic from "../SalesDynamic/SalesDynamic";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Icon Sidebar */}
      <IconSidebar />

      {/* Navigation Sidebar */}
      <NavSidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <Header />

        {/* Team Avatars Row */}
        <TeamRow />

        {/* Report Title */}
        <ReportHeader />

        {/* Stats Section */}
        <StatsSection />

        {/* Revenue Breakdown Bar */}
        <BreakdownBar />

        {/* Main Grid */}
        <div className="main-grid">
          {/* Left Column */}
          <div className="main-grid__left-column">
            {/* Platform Breakdown */}
            <PlatformBreakdown />

            {/* Platform Value */}
            <PlatformValue />
          </div>

          {/* Right Column */}
          <div className="main-grid__right-column">
            {/* Sales Table */}
            <SalesTable />

            {/* Work with Platforms */}
            <WorkWithPlatforms />

            {/* Sales Dynamic */}
            <SalesDynamic />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
