import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import profilesData from "../data/profilesData";
import { Link } from "react-router-dom";
import { FaHeart, FaTimes, FaUser } from "react-icons/fa";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    bio: "Love to travel and explore new places.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzE3OTcwMTYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Alex Smith",
    age: 25,
    bio: "Fitness enthusiast and foodie.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXQlMjBtYW4lMjBhdCUyMHRoZSUyMGd5bXxlbnwwfHx8fDE3MTc5NzAxNjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 30,
    bio: "Tech geek and coffee lover.",
    image: "https://images.unsplash.com/photo-1512441944949-3d243fe34329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aXRoJTIwZ2xhc3NlcyUyMGRyaW5raW5nJTIwY29mZmVlfGVufDB8fHx8MTcxNzk3MDE2MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const displayedProfiles = profiles.slice(0, 9);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <SimpleGrid columns={3} spacing={0} width="100%">
        {displayedProfiles.map((profile) => (
          <Box key={profile.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <LinkBox as="article" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={profile.image} alt={profile.name} boxSize="200px" objectFit="cover" />
              <Box p="4">
                <LinkOverlay as={Link} to={`/profile/${profile.id}`}>
                  <Text fontWeight="bold" fontSize="xl">
                    {profile.name}, {profile.age}
                  </Text>
                </LinkOverlay>
              </Box>
            </LinkBox>
            <Box p="4">
              <Text fontWeight="bold" fontSize="xl">
                {profile.name}, {profile.age}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
