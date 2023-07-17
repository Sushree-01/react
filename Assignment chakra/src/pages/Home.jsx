import { Box, ButtonGroup, Button, SimpleGrid, Select, VStack } from "@chakra-ui/react";
import { useState, useEffect,useReducer } from "react";

import RestaurantCard from "../Components/RestaurantCard";
import { deleteRestaurant, getRestaurants } from "../utils/api";
import { homeReducer, initState } from "../reducers/homeReducer";



function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [state, dispatch] = useReducer(homeReducer, initState);
console.log(restaurants);
const fetchRestaurants = async () => {
  dispatch({ type: 'FETCH_LOADING' });
  try {
    const response = await getRestaurants();
    dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    setRestaurants(response.data);
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE' });
    console.error("Error fetching restaurants:", error);
  }
};
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRestaurant(id);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant.id !== id)
      );
      console.log("Restaurant deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  return (
    <>
      <VStack spacing={4} mt={4}>
        {/* Add 3 select tags along with their options as mentioned in the problem statement */}
      </VStack>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={6}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            handleDelete={() => handleDelete(restaurant.id)}
          />
        ))}
      </SimpleGrid>

      {/* add Pagination here */}
    </>
  );
}

export default Home;
