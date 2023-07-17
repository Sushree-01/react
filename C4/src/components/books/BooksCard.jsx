import { VStack, Heading, Text } from '@chakra-ui/react';
function BooksCard({title,author,category,publication_date,isbn}) {
  return <>
   <VStack spacing={4} boxShadow="2xl"
   borderRadius={5} p={4} align="left"  data-cy="book_card">
      <Heading as="h2" size="lg">Title : {title}</Heading>
      <Heading as="h3" size="md">Author : {author}</Heading>
      <Heading as="h5" size="sm">Category : {category}</Heading>
      <Heading as="h6" size="xs">Publication Date : {publication_date}</Heading>
      <Text>#ISBN : {isbn}</Text>
    </VStack>
    </>;
}

export default BooksCard;