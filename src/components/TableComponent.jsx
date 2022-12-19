import React from "react";
import Table from "react-bootstrap/Table";

const TableComponent = ({ iptable }) => {
  console.log(iptable);
  return (
    <Table striped bordered hover variant="primary" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>IP Subred</th>
          <th>Primer IP Util</th>
          <th>Ultima IP</th>
          <th>Broadcast</th>
        </tr>
      </thead>
      <tbody>
        {iptable.map((ip) => (
          <tr key={ip.num}>
            <td>{ip.num}</td>
            <td>{ip.ip_subred}</td>
            <td>{ip.ip_util}</td>
            <td>{ip.ip_ultima}</td>
            <td>{ip.ip_broadcast}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
