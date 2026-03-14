import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { EVChargingPage } from "./pages/EVChargingPage";
import { GPSTrackingPage } from "./pages/GPSTrackingPage";
import { FuelMonitoringPage } from "./pages/FuelMonitoringPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: SolutionsPage },
      { path: "home", Component: HomePage },
      { path: "solutions", Component: SolutionsPage },
      { path: "ev-charging", Component: EVChargingPage },
      { path: "gps-tracking", Component: GPSTrackingPage },
      { path: "fuel-monitoring", Component: FuelMonitoringPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
