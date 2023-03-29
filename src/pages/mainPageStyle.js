import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  scroll-behavior: smooth;
  //background-image: linear-gradient(to bottom right, black, grey);
  //background-image:linear-gradient(0deg, rgba(195,189,34,1) 0%, rgba(253,187,45,1) 76%);
  background-image: linear-gradient(0deg, rgba(101,195,34,1) 0%, rgba(253,187,45,1) 76%);
  h1 {
    color: #221f4c;
    font-size: 24px;
    font-style: bold;
    font-weight: 700;
    padding-top: 40px;
    margin-left: 60px;
  }
  }
`;

export const Flag = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 10px 50px;
  box-sizing: border-box;
  overflow-x: scroll;
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    position: absolute;
    top: 16%;
    left: 16%;
    height: 72%;
    width: 65%;
    border: blue solid 1px;
    border-radius: 50%;
  }
  .selected {
    filter: drop-shadow(0px 0px 10px yellow);
    color: yellow;
  }
  .star1 {
    //pará
    position: absolute;
    top: 38.7%;
    left: 56.7%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star2 {
    //amazonas
    position: absolute;
    top: 43.6%;
    left: 20%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star3 {
    //mato grosso do sul
    position: absolute;
    top: 52.03%;
    left: 34.7%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star4 {
    //acre
    position: absolute;
    top: 48.7%;
    left: 56%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star5 {
    //mato grosso
    position: absolute;
    top: 58.6%;
    left: 22.9%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star6 {
    //amapa
    position: absolute;
    top: 62.45%;
    left: 19.3%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star7 {
    //rondonia
    position: absolute;
    top: 57.5%;
    left: 27.05%;
    width: 2%;
    height: 2%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star8 {
    //roraima
    position: absolute;
    top: 62.8%;
    left: 30.1%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star9 {
    //tocantins
    position: absolute;
    top: 66.8%;
    left: 29.4%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star10 {
    //goias
    position: absolute;
    top: 69.3%;
    left: 33.5%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star11 {
    //bahia
    position: absolute;
    top: 56.2%;
    left: 47.1%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star12 {
    //minas gerais
    position: absolute;
    top: 59.9%;
    left: 44.1%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star13 {
    //espirito santo
    position: absolute;
    top: 62.65%;
    left: 46%;
    width: 2%;
    height: 2%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star14 {
    //sao paulo
    position: absolute;
    top: 66.3%;
    left: 46.7%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star15 {
    //rio de janeiro
    position: absolute;
    top: 59.5%;
    left: 50.9%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star16 {
    //piaui
    position: absolute;
    top: 62.7%;
    left: 69.5%;
    width: 4%;
    height: 4%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star17 {
    //maranhao
    position: absolute;
    top: 63.9%;
    left: 74.8%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star18 {
    //ceará
    position: absolute;
    top: 66.5%;
    left: 71.4%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star19 {
    //rio grande do norte
    position: absolute;
    top: 69.3%;
    left: 69.4%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star20 {
    //paraiba
    position: absolute;
    top: 71.43%;
    left: 67%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star21 {
    //pernambuco
    position: absolute;
    top: 70.75%;
    left: 63.55%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star22 {
    //alagoas
    position: absolute;
    top: 74%;
    left: 63.5%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star23 {
    //sergipe
    position: absolute;
    top: 78%;
    left: 63.7%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star24 {
    //santa catarina
    position: absolute;
    top: 72%;
    left: 59.9%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star25 {
    //rio grande do sul
    position: absolute;
    top: 74.983%;
    left: 56.8%;
    width: 3%;
    height: 3%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star26 {
    //paraná
    position: absolute;
    top: 71.09%;
    left: 54.62%;
    width: 2.5%;
    height: 2.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
  .star27 {
    //distrito federal
    position: absolute;
    top: 79.7%;
    left: 47.86%;
    width: 1.5%;
    height: 1.5%;
    :hover {
      filter: drop-shadow(0px 0px 5px yellow);
      color: yellow;
      cursor: pointer;
    }
  }
`;
