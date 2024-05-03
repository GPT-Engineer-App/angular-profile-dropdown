import { useState } from "react";
import { Container, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, VStack } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [profile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your Dashboard</Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Text fontSize="md" mr="12px">
                {profile.name}
              </Text>
            </MenuItem>
            <MenuItem minH="40px">
              <Text fontSize="sm" mr="12px">
                {profile.email}
              </Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => handleNavigation("/home")}>Home</MenuItem>
          </MenuList>
        </Menu>
      </VStack>
    </Container>
  );
};

export default Index;
