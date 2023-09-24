import React, { useEffect } from 'react';

import data from '../constants/dataPaciente';

const Monitor = () => {

    useEffect(() => {
      console.log(data);
    }, [])
    

    return (
        <div>
            <h1>Monitoring health status of individuals</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birth</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Status</th>
                        <th scope="col">Medical studies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((paciente) => {
                            return <tr>
                                <th scope="row">{paciente.nombre}</th>
                                <td>{paciente.edad}</td>
                                <td>{paciente.genero}</td>
                                <td>
                                    {

                                        (paciente.estatus == 'verde') 
                                        ?
                                        <i class="fa-solid fa-check"></i>
                                        :
                                            (paciente.estatus == 'amarillo') 
                                            ?
                                            <i class="fa-solid fa-eye"></i>
                                            :
                                            <i class="fa-solid fa-circle-exclamation"></i>



                                    }
                                </td>
                                <td>{paciente.pdfConstanciaMedica} <i class="fa-solid fa-file-pdf"></i></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Monitor;