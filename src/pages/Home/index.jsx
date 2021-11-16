import { useState } from "react";

import LayoutContainer from "../../components/LayoutContainer";
import Login from "../../components/Login";
import Display from "../../components/Display";

const Home = () => {
  const [text, setText] = useState("");
  const [sucess, setSucess] = useState(false);
  console.log(!sucess);
  console.log(text);
  return (
    <LayoutContainer>
      <Login setText={setText} setSucess={setSucess} />
      <Display text={text} sucess={sucess} />
    </LayoutContainer>
  );
};

export default Home;
