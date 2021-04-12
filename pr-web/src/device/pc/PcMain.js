import React from "react";
import PcFooter from "./components/PcFooter";
import PcHeader from "./components/PcHeader";
import PcFifth from "./pages/PcFifth";
import PcFirst from "./pages/PcFirst";
import PcFourth from "./pages/PcFourth";
import PcSecond from "./pages/PcSecond";
import PcSixth from "./pages/PcSixth";
import PcThird from "./pages/PcThird";

function PcMain() {
  return (
    <div>
      <PcHeader />
      <PcFirst />
      <PcSecond />
      <PcThird />
      <PcFourth />
      <PcFifth />
      <PcSixth />
      <PcFooter />
    </div>
  );
}

export default PcMain;
