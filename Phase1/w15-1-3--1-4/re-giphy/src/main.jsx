import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import { ChakraProvider, Box, HStack } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { getTrending, getSpecificGif} from "./api";
import GifDetail from "./pages/gif-detail";

//Code chunk this layout component
function Layout() {
  return (
    <Box padding="2">
      <HStack>
        <NavLink to="/trending">
          {({ isActive }) => (
            <Box
              padding="2"
              borderWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Trending
            </Box>
          )}
        </NavLink>
      </HStack>
      <Outlet />
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "trending",
        element: <div>This is trending</div>,
        loader: () => {
          return getTrending();
        },
      },
    ],
  },

  {
    path: "/gif/:gifId",
    element: <GifDetail/>,
    loader: ({ params }) => {
      const gifId = params.gifId;
  
      return getSpecificGif(gifId);
    }
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);