import React from "react";
import { Table } from "react-bootstrap";

export default function HandleArray() {
  const brothers = ["Mohit", "Rohit"];
//   Object
  const fullinfo = [
    {name: 'Mohit',email: 'mohit@test.com',contact: 8390051169},
    {name: 'Rohit',email: 'rohit@test.com',contact: 7057376336},
    {name: 'Kundlik',email: 'kundlik@test.com',contact: 8696828370}
  ]
  return (
    <>
      <ul>
        {brothers.map((brother) => (
          <li key={brother}>Name is: {brother}</li>
        ))}
      </ul>
      <Table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            {fullinfo.map((data)=> (
                <tr>
                    <td>{data.name}</td> 
                    <td>{data.email}</td> 
                    <td>{data.contact}</td> 
                </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
