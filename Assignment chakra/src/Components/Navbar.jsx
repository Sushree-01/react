import { Flex, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex alignItems="center" bgColor="pink" p={4} data-testid="navbar">
      <Link as={NavLink} to="/" fontWeight="bold" mr={4}>
        Home
      </Link>
      <Spacer />
      <Link as={NavLink} to="/add-restaurant">
        Add Restaurant
      </Link>
    </Flex>
  );
}

export default Navbar;
