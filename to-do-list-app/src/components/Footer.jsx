import '../css/footer.css';
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className='container-footer'>
        <div className='container-sm'>
          <AiFillTikTok></AiFillTikTok>
          <FaFacebookSquare></FaFacebookSquare>
          <FaTwitterSquare></FaTwitterSquare>
        </div>
        <p>Copyright &copy; <b>2024</b></p>
    </footer>
    </>
  )
}
