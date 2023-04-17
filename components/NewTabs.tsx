import React, { useState, useEffect } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


export default function NewTab() {
    const [members, setMembers] = useState([]);
    const userMembers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const raw = await res.json();
        setMembers(raw);
    }
    useEffect(() => {
       userMembers();
    }, [])

    const columnDefs = [
        {field: 'id'},
        {field: 'name'},
        {field: 'username'},
        {field: 'email'}
    ]

    return (
        <div className="ag-theme-alpine-dark" style={{height: 400, width: 800}} >
            <AgGridReact
            rowData={members}
            columnDefs={columnDefs}/>
            
        </div>
    )
}
