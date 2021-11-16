import { Paragraph } from "./style";

const Display = ({ sucess, text }) => {
  return (
    <div>
      <Paragraph style={!sucess ? { color: "#ff0000" } : { color: "#0000ff" }}>
        {text}
      </Paragraph>
    </div>
  );
};

export default Display;
