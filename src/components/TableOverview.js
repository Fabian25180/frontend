
import DBForTable from './DBForTable'
import React, { Component } from 'react'

const TableOverview = ({Dbs}) => {
    
    return (
        <div class='TableOverview'>
            {Dbs.map((Dbs) => (
            <DBForTable key={Dbs.id} DbForTable={Dbs}/>
            ))}
        </div>

    )
}

export default TableOverview
