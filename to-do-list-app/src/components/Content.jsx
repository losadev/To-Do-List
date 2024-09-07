import '../css/content.css';
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function handleClick() {
  return (
    <>
    <td className='container-edit-del-icons'>
              <FaEdit className='edit-btn'/>
              <FaRegTrashAlt className='trash-btn-red'/>
    </td>
    <td>Terminar proyecto To-Do List</td>
    <td>Hoy</td>
    <td>
      <select name="estado" id="estado">
        <option value="En Proceso">En Proceso</option>
        <option value="terminado">Terminado</option>
      </select>
    </td>
    </>
  );
}

const Content = () => {
  return (
    <main className='content-container-xl'>
      <div className="content-container-table">
        <h1>Lista de tareas</h1>
        <table>
          <thead>
            <th></th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Estado</th>
          </thead>
          <tbody>
            <td className='container-edit-del-icons'>
              <FaEdit className='edit-btn'/>
              <FaRegTrashAlt className='trash-btn-red'/>
            </td>
            <td>Terminar proyecto To-Do List</td>
            <td>Hoy</td>
            <td>
              <select name="estado" id="estado">
                <option value="En Proceso">En Proceso</option>
                <option value="terminado">Terminado</option>
              </select>
            </td>
            
          </tbody>
        </table>
        <div className='content-container-btn-plus'>
          <div className='bg-btn-plus'>
            <FaPlus onClick={handleClick}></FaPlus>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content