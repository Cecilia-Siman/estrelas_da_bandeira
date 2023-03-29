import styled from "styled-components";

export const Info = styled.div`
  box-sizing: border-box;
  margin: 10px 0px;
  border-left: 1px black solid;
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  div {
    width: 80%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 30px;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }
  p {
    text-align: justify;
    width: 80%;
    margin: 10px 0px;
  }
  image {
    object-fit: cover;
  }
  .icon {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 36px;
    right: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;
