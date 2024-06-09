import { useParams } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import profilesData from "../data/profilesData";

function Profile() {
  const { id } = useParams();
  const profile = profilesData.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <Text>Profile not found</Text>;
  }

  return (
    <Box>
      <Image src={profile.image} alt={profile.name} boxSize="150px" />
      <Text>{profile.name}</Text>
      <Text>{profile.description}</Text>
    </Box>
  );
}

export default Profile;
