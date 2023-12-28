import { Box } from "@chakra-ui/react";
import RightSideBarNavBar from "./RightSideBarNavBar";
import RightSideGames from "./RightSideGames";

const RightSideBar = () => {
  return (
    <Box>
      <RightSideBarNavBar />
      <RightSideGames />
    </Box>
  );
};

export default RightSideBar;
