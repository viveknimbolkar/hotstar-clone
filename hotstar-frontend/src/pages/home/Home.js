import Indexpage from "../../component/Indexpage";
import React from "react";
import Adv from "../../component/Adv";

function Home() {
  return (
    <>
      <Adv
        src={
          "https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
        }
        movie={"Movie name"}
        date={"janewari 6"}
      />
      <Indexpage
        year={"2024"}
        time={"2h 20min"}
        language={"3 languages"}
        describe={
          "top cricketer and paravin tambe extraordinary journey proves his"
        }
      />
    </>
  );
}

export default Home;
