import { Box } from "@chakra-ui/react";
import RightSideBarNavBar from "./RightSideBarNavBar";
import RightSideGames from "./RightSideGames";
import RightSideGame from "./RightSideGame";

const RightSideBar = () => {
  return (
    <Box>
      <RightSideBarNavBar />
      <RightSideGame />
      <RightSideGames />
    </Box>
  );
};

export default RightSideBar;
