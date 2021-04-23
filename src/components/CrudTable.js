import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = ({data}) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="3">Sin datos</td></tr> : data.map((item) => <CrudTableRow key={item.id} item={item}/>)}
                </tbody>
            </table>
        </div>
    )
}
