import { Box } from "@chakra-ui/react";
import RightSideBarNavBar from "./RightSideBarNavBar";
import RightSideGames from "./RightSideGames";

const RightSideBar = () => {
  return (
    <Box m={2} pl={4} pt={4}>
      <RightSideBarNavBar />
      <RightSideGames />
    </Box>
  );
};

export default RightSideBar;
