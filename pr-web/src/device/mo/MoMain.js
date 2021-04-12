import React from "react";
import MoFooter from "./components/MoFooter";
import MoFootFix from "./components/MoFootFix";
import MoHeader from "./components/MoHeader";
import MoFifth from "./pages/MoFifth";
import MoFirst from "./pages/MoFirst";
import MoFourth from "./pages/MoFourth";
import MoSecond from "./pages/MoSecond";
import MoThird from "./pages/MoThird";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
    minWidth: "51.429rem",
  },
});
function MoMain() {
  const styles = useStyles();
  return (
    <Container classes={{ root: styles.root }}>
      <MoHeader />
      <MoFootFix />
      <MoFirst />
      <MoSecond />
      <MoThird />
      <MoFourth />
      <MoFifth />
      <MoFooter />
    </Container>
  );
}

export default MoMain;
