import { useState } from "react";
import { Container } from "react-bootstrap";
import CardData from "../components/CardData";
import Formulario from "../components/Formulario";
import TableComponent from "../components/TableComponent";

import "../styles.css";

function Home() {
  const [iptable, setIpTable] = useState([]);
  const [datacard, setDataCard] = useState({});

  return (
    <Container>
      <h3 className="text-white text-center p-3">Subneteo de IPs</h3>
      <Formulario setIpTable={setIpTable} setDataCard={setDataCard} />
      {iptable && iptable.length > 0 && (
        <>
          <h5 className="text-white text-center p-3">Informacion de IP</h5>
          <CardData datacard={datacard} />
          <h5 className="text-white text-center p-3">Tabla de Subneteo</h5>
          <TableComponent iptable={iptable} />
        </>
      )}
    </Container>
  );
}

export default Home;
