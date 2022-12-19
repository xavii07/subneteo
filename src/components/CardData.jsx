import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CardData = ({ datacard }) => {
  const { maskString, ip, newMask, numHosts, numJumpRed, bitsOn } = datacard;

  return (
    <Card style={{ width: "22rem" }} className="mb-4 mx-auto mt-4">
      <ListGroup variant="flush" numbered>
        <ListGroup.Item variant="primary">IP base: {ip}</ListGroup.Item>
        <ListGroup.Item>
          Identificar Mascara:{" "}
          <span style={{ fontSize: "10px" }}>{maskString}</span>
        </ListGroup.Item>
        <ListGroup.Item>Bits encendidos: {bitsOn}</ListGroup.Item>
        <ListGroup.Item>Nueva Mascara: {newMask}</ListGroup.Item>
        <ListGroup.Item>Numero de hosts: {numHosts}</ListGroup.Item>
        <ListGroup.Item>Numero salto de red: {numJumpRed}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardData;
