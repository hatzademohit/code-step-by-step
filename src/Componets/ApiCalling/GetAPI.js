import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function GetAIP(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/users").then((result)=> {
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])
    return(
        <div className="table-rsponsive">
            <Table bordered className="m-0">
                <thead>
                    <tr>                        
                        <th className="bg-dark text-white">Sr.No</th>
                        <th className="bg-dark text-white">First Name</th>
                        <th className="bg-dark text-white">Last Name</th>
                        <th className="bg-dark text-white">Email</th>
                        <th className="bg-dark text-white">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name.firstname}</td>
                            <td>{user.name.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default GetAIP;