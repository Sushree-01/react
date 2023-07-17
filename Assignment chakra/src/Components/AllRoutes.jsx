import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddRestaurant from "../pages/AddRestaurant";
import EditRestaurant from "../pages/EditRestaurant";

function AllRoutes() {
  return (
    <Container maxW="container.xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/edit-restaurant/:id" element={<EditRestaurant />} />
      </Routes>
    </Container>
  );
}

export default AllRoutes;
