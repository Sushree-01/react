function Pagination() {
  // import the chakra UI components from the chakra UI library , and remove the following.
  const Button = ()=><div></div>;
  const Center = ()=><div></div>;
  const HStack = ()=><div></div>;

  return (
    <Center data-testid="pagination-component">
      <HStack>{/* render all the Buttons here */}</HStack>
    </Center>
  );
}

export default Pagination;
