import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  background: yellow;
  padding: 20px;
  width: 300px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 10px;
      margin: 20px 0px 10px 0px;
      width: 90%;
    }

    button {
      background: #0000ff;
      border-radius: 10px;
      padding: 10px;
      color: #fff;
      font-weight: 700;
      font-size: 22px;
      margin: 20px 0;
      cursor: pointer;
      width: 100px;
    }
  }
`;
