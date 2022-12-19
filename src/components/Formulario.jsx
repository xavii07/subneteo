import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  converArrayIps,
  getBitsOn,
  getDataForIp,
  getMask,
  getNewMask,
  getNumHosts,
  getNumJumpRed,
} from "../helpers/steps";
import Alert from "./Alert";

const Formulario = ({ setIpTable, setDataCard }) => {
  const [dataip, setDataIp] = useState({
    ip: "",
    mascara: "",
    subredes: "",
  });
  const [showalert, setShowAlert] = useState(false);

  const { ip, mascara, subredes } = dataip;

  const handleChangeData = (e) => {
    setDataIp({
      ...dataip,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetSubredes = () => {
    if (ip === "" || mascara === "" || subredes === "") {
      setShowAlert(true);
      return;
    }

    const maskString = getMask(Number(mascara));
    const arrayIp = getDataForIp(ip);
    const bitsOn = getBitsOn(subredes);
    const newMask = getNewMask(bitsOn);
    const numHosts = getNumHosts(bitsOn);
    const numJumpRed = getNumJumpRed(newMask);
    const ipArrayTable = converArrayIps(ip, Number(subredes), numJumpRed);
    setIpTable(ipArrayTable);
    setDataCard({
      maskString,
      ip: ip + "/" + mascara,
      newMask,
      numHosts,
      numJumpRed,
      bitsOn,
    });
  };

  return (
    <>
      <Alert setShowAlert={setShowAlert} showalert={showalert} />
      <Row className="mx-auto">
        <Col xs={8} lg={4}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{ fontSize: "14px" }}>
              IP base
            </InputGroup.Text>
            <Form.Control
              style={{ fontSize: "14px" }}
              placeholder="192.207.1.0"
              type="text"
              name="ip"
              value={ip}
              onChange={handleChangeData}
            />
          </InputGroup>
        </Col>
        <Col xs={4} lg={3}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{ fontSize: "14px" }}>
              /
            </InputGroup.Text>
            <Form.Control
              style={{ fontSize: "14px" }}
              placeholder="24"
              type="number"
              min={1}
              name="mascara"
              value={mascara}
              onChange={handleChangeData}
            />
          </InputGroup>
        </Col>
        <Col xs={7} lg={3}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{ fontSize: "14px" }}>
              # Subredes
            </InputGroup.Text>
            <Form.Control
              style={{ fontSize: "14px" }}
              placeholder="5"
              type="number"
              min={1}
              name="subredes"
              value={subredes}
              onChange={handleChangeData}
            />
          </InputGroup>
        </Col>
        <Col xs={5} lg={2}>
          <Button
            type="submit"
            onClick={handleGetSubredes}
            className="w-100"
            style={{ fontSize: "14px" }}
          >
            Calcular
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Formulario;
