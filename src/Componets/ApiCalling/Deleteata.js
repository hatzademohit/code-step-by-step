import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import PostMethodModal from "./PostMethodModal";
import UpdateMethodModal from "./UpdateMethodModal";

function DeleteData() {
    const [info, setInfo] = useState()
    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch("http://localhost/react_crud/fetchdata.php").then((result) => {
            result.json().then((resp) => {
                setInfo(resp)
            })
        })
    }
    function deleteData(id) {
        alert(`Hello Form ${id}`);
        fetch(`http://localhost/react_crud/deletedata.php?Id=${id}`, {
            method: 'DELETE'
        }).then(() => {
            getData()
        })
    }
    return (
        <>
            <PostMethodModal ReloadTable={getData} />
            <div className="table-rsponsive">
                <Table bordered className="m-0">
                    <thead>
                        <tr>
                            <th className="bg-dark text-white">Sr.No</th>
                            <th className="bg-dark text-white">ID</th>
                            <th className="bg-dark text-white">First Name</th>
                            <th className="bg-dark text-white">Last Name</th>
                            <th className="bg-dark text-white">Email</th>
                            <th className="bg-dark text-white">Mobile</th>
                            <th className="bg-dark text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info && info.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.Id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <UpdateMethodModal Id={user.Id} />
                                    <Button className="btn btn-sm btn-danger" onClick={() => deleteData(user.Id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default DeleteData
