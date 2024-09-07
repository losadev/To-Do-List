import '../css/menu.css'
import '../css/style.css'
import { FaCircleUser } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { IoIosAddCircle } from "react-icons/io";

export default function Menu(){
  return (
    <div className="menu-container-xl">
        <div className="menu-container-icon">
            <h4 className="menu-title-h4">Hazlo Ya! </h4>
            <div className="menu-container-img">
                <FcTodoList className='icon-user'/>
            </div>
        </div>
        <div className="menu-container-opt">
            <div className='menu-user'>
                <FaCircleUser className='icon-user'/>
                <div className='menu-user-name'>
                    Pablo Losada
                </div>
            </div>
            <div className="menu-opt-1">
                <ul>
                    <li><a href="">Añadir</a></li>
                    <li><a href="">Editar</a></li>
                    <li><a href="">Eliminar</a></li>
                    <li>
                        <div className='container-add-section'>
                            <a href="">Añadir sección</a>
                            <IoIosAddCircle size={'1.5em'} className='icon-add-section' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
