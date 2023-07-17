import { Card, CardBody, Image, Stack, Heading, Text, Link, Button, VStack, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function RestaurantCard({ restaurant, handleDelete }) {
  const { id, name, type, rating, number_of_votes, price_starts_from, image } = restaurant;

  const onDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <Card maxW="sm" m={4} data-testid="restaurant-card">
      <Image src={image} alt={name} />

      <CardBody>
        <VStack align="stretch">
          <Stack mt="6" spacing="3">
            <Heading size="md">Name: {name}</Heading>
            <Text>Type: {type}</Text>
            <Text>Rating: {rating}</Text>
            <Text>Number of Votes: {number_of_votes}</Text>
            <Text>Price Starts From: ${price_starts_from}</Text>
          </Stack>

          <HStack spacing="6">
            <Link as={RouterLink} to={`/edit-restaurant/${id}`} color="blue.500">
              Edit
            </Link>
            <Button colorScheme="red" onClick={onDeleteClick}>
              Delete
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default RestaurantCard;
