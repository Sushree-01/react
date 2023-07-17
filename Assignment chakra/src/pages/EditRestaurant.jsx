import { useState,useReducer } from 'react';
import { Button, FormControl, Input, Select, VStack } from '@chakra-ui/react';
import { editRestaurantReducer } from '../reducers/editRestaurantReducer';
import { initState } from '../reducers/homeReducer';

const EditRestaurant = () => {
  const [state,dispatch]=useReducer(editRestaurantReducer,initState)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    rating: '',
    number_of_votes: '',
    price_starts_from: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Restaurant updated:', formData);
    setFormData({
      name: '',
      type: '',
      rating: '',
      number_of_votes: '',
      price_starts_from: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} my={4}>
        <FormControl>
          <Input
            name="name"
            type="text"
            placeholder="Add restaurant name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Select
            placeholder="Select Type"
            name="type"
            value={formData.type}
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
            value={formData.rating}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            name="number_of_votes"
            type="number"
            placeholder="Number of votes"
            value={formData.number_of_votes}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="price_starts_from">
          <Input
            name="price_starts_from"
            type="number"
            placeholder="Price Starts From"
            value={formData.price_starts_from}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="image">
          <Input
            name="image"
            type="text"
            placeholder="Add Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="pink" variant="outline">
          EDIT RESTAURANT
        </Button>
      </VStack>
    </form>
  );
};

export default EditRestaurant;
