import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Avatar, Badge, useToast } from "@chakra-ui/react";
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
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const toast = useToast();

  const handleLike = () => {
    toast({
      title: "Liked!",
      description: `You liked ${profiles[currentProfileIndex].name}.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    nextProfile();
  };

  const handleDislike = () => {
    toast({
      title: "Disliked!",
      description: `You disliked ${profiles[currentProfileIndex].name}.`,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
    nextProfile();
  };

  const nextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" maxW="sm">
          <Image src={currentProfile.image} alt={currentProfile.name} />
          <Box p="6">
            <HStack spacing={4} alignItems="center">
              <Avatar name={currentProfile.name} src={currentProfile.image} />
              <VStack align="start">
                <Text fontWeight="bold" fontSize="xl">
                  {currentProfile.name}, {currentProfile.age}
                </Text>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Online
                </Badge>
              </VStack>
            </HStack>
            <Text mt={4}>{currentProfile.bio}</Text>
          </Box>
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Dislike" icon={<FaTimes />} size="lg" colorScheme="red" onClick={handleDislike} />
          <IconButton aria-label="Like" icon={<FaHeart />} size="lg" colorScheme="green" onClick={handleLike} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
