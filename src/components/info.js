import { Info } from "./infoStyle";
import data from "./dataObjects";
import { AiOutlineClose } from "react-icons/ai";

export default function InfoBox(props) {
  const information = data(props.number);
  console.log(information.constelacao);
  return (
    <Info>
      <div>
        <h2>{information.estado}</h2>
      </div>
      <h3>{information.estrela} </h3>
      <img
        width="60%"
        src={information.constelacao}
      />
      <p>{information.curiosidade}</p>
      {information.imagem ? <img width="40%" src={information.imagem} /> : ""}
      <AiOutlineClose
        className="icon"
        color="black"
        onClick={() => {
          props.close(false);
          props.setNumber(0);
        }}
      />
    </Info>
  );
}
