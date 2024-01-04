import { Suspense, lazy } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Ripples } from "@uiball/loaders";

// HomePage
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const LoadingElement = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Ripples size={100} speed={2} color="#D2691E" />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingElement />}>{<HomePage />}</Suspense>
        }
      />
    </Route>
  )
);

export default router;
