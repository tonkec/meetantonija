import { useNavigate } from 'react-router-dom';
import "./BrowserNavigation.scss";
import { MdArrowBack } from "react-icons/md";

const BrowserNavigation = () => {
    const navigate = useNavigate();

    return (
       <div className="navigation">
         <button onClick={() => navigate(-1)}>
            <MdArrowBack color='#fff' />
        </button>
       </div>
    )
    

}

export default BrowserNavigation