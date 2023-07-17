import { createRoot } from "react-dom/client";
import { addRestaurantReducer } from "./reducers/addRestaurantReducer";
import { editRestaurantReducer } from "./reducers/editRestaurantReducer";
import { homeReducer } from "./reducers/homeReducer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <ChakraProvider>
     <App />
  </ChakraProvider>
  </BrowserRouter>
);


// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.addRestaurantReducer = addRestaurantReducer;
  window.editRestaurantReducer = editRestaurantReducer;
  window.homeReducer = homeReducer;
}
