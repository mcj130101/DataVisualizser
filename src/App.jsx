import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import DataCharts from "./pages/DataCharts";
import DataTable from "./pages/DataTable";
import DataEntry from "./pages/DataEntry";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "entry",
        element: (
          <ProtectedRoute>
            <DataEntry />
          </ProtectedRoute>
        ),
      },
      {
        path: "table",
        element: (
          <ProtectedRoute>
            <DataTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "charts",
        element: (
          <ProtectedRoute>
            <DataCharts />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
