import { Button, FormControl, Input, Select, VStack } from "@chakra-ui/react";
import { useReducer } from "react";
import { addRestaurantReducer, initState } from "../reducers/addRestaurantReducer";
import { postRestaurant } from "../utils/api";

function AddRestaurant() {
  const [state, dispatch] = useReducer(addRestaurantReducer, initState);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const { name, type, rating, number_of_votes, price_starts_from, image } = state;
  
 
    const newRestaurant = {
      name,
      type,
      rating: parseFloat(rating),
      number_of_votes: parseInt(number_of_votes),
      price_starts_from: parseFloat(price_starts_from),
      image,
    };
  
   
    fetch(postRestaurant, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((data) => {
  
        console.log('New restaurant created:', data);
  
        dispatch({ type: 'RESET_VALUES' });
  
      })
      .catch((error) => {
        console.error('invalid action type, wrong_action_type');
      });
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} my={4}>
        <FormControl>
          <Input
            name="name"
            type="text"
            placeholder="Add restaurant name"
            value={state.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Select
            placeholder="Select Type"
            name="type"
            value={state.type}
            onChange={handleChange}
          >
            <option value="ethnic">Ethnic</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fine_dining">Fine Dining</option>
            <option value="fast_food">Fast Food</option>
          </Select>
        </FormControl>
        <FormControl>
          <Input
            name="rating"
            type="number"
            placeholder="Rating"
            value={state.rating}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            name="number_of_votes"
            type="number"
            placeholder="Number of votes"
            value={state.number_of_votes}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="price_starts_from">
          <Input
            name="price_starts_from"
            type="number"
            placeholder="Price Starts From"
            value={state.price_starts_from}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="image">
          <Input
            name="image"
            type="text"
            placeholder="Add Image URL"
            value={state.image}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="pink" variant="outline">
          CREATE RESTAURANT
        </Button>
      </VStack>
    </form>
  );
}

export default AddRestaurant;
