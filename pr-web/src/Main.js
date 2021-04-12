import React from "react";
import MoMain from "./device/mo/MoMain";
import PcMain from "./device/pc/PcMain";
import { Default, Mobile } from "./style/MediaQuery";

function Main() {
  return (
    <div>
      <Default>
        <PcMain />
      </Default>
      <Mobile>
        <MoMain />
      </Mobile>
    </div>
  );
}

export default Main;
