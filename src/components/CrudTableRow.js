import React from 'react'

export const CrudTableRow = ({item}) => {
    return (
        <>
            <tr>
                <td>{item.first_name}</td>
                <td>{item.email}</td>
                <td>
                    <button>Editar</button><button>Eliminar</button>
                </td>
            </tr>
        </>
    )
}
