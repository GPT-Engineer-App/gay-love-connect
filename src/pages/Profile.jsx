import { useParams, useNavigate } from "react-router-dom";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import profilesData from "../data/profilesData";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profilesData.find((profile) => profile.id === parseInt(id));

  const handleBackClick = () => {
    navigate("/");
  };

  if (!profile) {
    return <Text>Profile not found</Text>;
  }

  return (
    <Box>
      <Image src={profile.image} alt={profile.name} boxSize="150px" border={profile.isOnline ? "4px solid" : "none"} borderColor={profile.isOnline ? "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 50%, rgba(208,0,255,1) 100%)" : "none"} />
      <Text>{profile.name}</Text>
      <Text>{profile.description}</Text>
      <Button mt={4} onClick={handleBackClick}>
        Back
      </Button>
    </Box>
  );
}

export default Profile;
