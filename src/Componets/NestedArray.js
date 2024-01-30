import React from "react";
import { Table } from "react-bootstrap";

export default function NestedArray() {
  const users = [
    {
      name: "Kundlik",
      lastName: "Hatzade",
      contact: "8698828370",
      address: [
        {
          ward: "Nehru Ward",
          village: "Koka(Jungale)",
          tah: "Bhandara",
          dis: "Bhandara",
          pincode: "441905",
        },
      ],
    },
    {
      name: "Rohit",
      lastName: "Hatzade",
      contact: "7057376963",
      address: [
        {
          ward: "Nehru Ward",
          village: "Koka(Jungale)",
          tah: "Bhandara",
          dis: "Bhandara",
          pincode: "441905",
        },
      ],
    },
    {
      name: "Mohit",
      lastName: "Hatzade",
      contact: "8390051169",
      address: [
        {
          ward: "Nehru Ward",
          village: "Koka(Jungale)",
          tah: "Bhandara",
          dis: "Bhandara",
          pincode: "441905",
        },
      ],
    },
  ];
  return (
    <>
      <Table className="table table-bordered m-0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, i) => (
            <tr key={data.contact}>
            <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.lastName}</td>
              <td>{data.contact}</td>
              <td>
                {data.address.map((add) => (
                  <Table key={add.pincode} className="table table-bordered m-0">
                    <thead>
                      <tr>
                        <th>Ward</th>
                        <th>Village</th>
                        <th>Tahsil</th>
                        <th>District</th>
                        <th>Pin Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{add.ward}</td>
                        <td>{add.village}</td>
                        <td>{add.tah}</td>
                        <td>{add.dis}</td>
                        <td>{add.pincode}</td>
                      </tr>
                    </tbody>
                  </Table>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
