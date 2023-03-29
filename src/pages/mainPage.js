import { useState } from "react";
import { Container, Flag } from "./mainPageStyle";
import InfoBox from "../components/info";
import { GrStar } from "react-icons/gr";

export default function MainPage() {
  const [openBox, setOpenBox] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <Container>
      <Flag>
        <img src="estrelas_bandeira.jpg" />
        <GrStar
          className="star1"
          color={number === 1 ? "yellow" : "white"}
          onClick={() => {
            setOpenBox(true);
            setNumber(1);
          }}
        />
        <GrStar
          className="star2"
          color={number === 2 ? "yellow" : "white"}
          onClick={() => {
            setOpenBox(true);
            setNumber(2);
          }}
        />
        <GrStar
          className="star3"
          color={number === 3 ? "yellow" : "white"}
          onClick={() => {
            setOpenBox(true);
            setNumber(3);
          }}
        />
        <GrStar className="star4" 
        color={number === 4 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(4);
        }}/>
        <GrStar className="star5" 
        color={number === 5 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(5);
        }}/>
        <GrStar className="star6" 
        color={number === 6 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(6);
        }}/>
        <GrStar className="star7" 
        color={number === 7 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(7);
        }}/>
        <GrStar className="star8" 
        color={number === 8 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(8);
        }}/>
        <GrStar className="star9" 
        color={number === 9 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(9);
        }}/>
        <GrStar className="star10" 
        color={number === 10 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(10);
        }}/>
        <GrStar className="star11" 
        color={number === 11 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(11);
        }}/>
        <GrStar className="star12" 
        color={number === 12 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(12);
        }}/>
        <GrStar className="star13" 
        color={number === 13 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(13);
        }}/>
        <GrStar className="star14" 
        color={number === 14 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(14);
        }}/>
        <GrStar className="star15" 
        color={number === 15 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(15);
        }}/>
        <GrStar className="star16" 
        color={number === 16 ? "red" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(16);
        }}/>
        <GrStar className="star17" 
        color={number === 17 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(17);
        }}/>
        <GrStar className="star18" 
        color={number === 18 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(18);
        }}/>
        <GrStar className="star19"
        color={number === 19 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(19);
        }}/>
        <GrStar className="star20" 
        color={number === 20 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(20);
        }}/>
        <GrStar className="star21" 
        color={number === 21 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(21);
        }}/>
        <GrStar className="star22" 
        color={number === 22 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(22);
        }}/>
        <GrStar className="star23" 
        color={number === 23 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(23);
        }}/>
        <GrStar className="star24" 
        color={number === 24 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(24);
        }}/>
        <GrStar className="star25" 
        color={number === 25 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(25);
        }}/>
        <GrStar className="star26" 
        color={number === 26 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(26);
        }}/>
        <GrStar className="star27" 
        color={number === 27 ? "yellow" : "white"}
        onClick={() => {
          setOpenBox(true);
          setNumber(27);
        }}/>
      </Flag>
      {openBox ? <InfoBox number={number} close={setOpenBox} setNumber={setNumber}></InfoBox> : ""}
    </Container>
  );
}
