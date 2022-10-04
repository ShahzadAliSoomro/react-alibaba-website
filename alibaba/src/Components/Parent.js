import { useState} from 'react';
import Camera from '../Components/img/camera.png';
import Button from '../Components/img/search.png';

import { FaAccessibleIcon } from "react-icons/fa";
import { FaMonero } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import  Search  from './Search';

import './AliBaba.css';

// import AccessibilityIcon from '@mui/icons-material/Accessibility';



function Parent(){
    const [img, setDiv] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setDiv(data);
    }
    return(
        <div class="parent-div">
        <div class="tabs-div">
            <ul>
            <li class="products">Products</li>
                <li class="manufacturers"><b>Manufacturers</b></li>
            </ul>
        </div>
        <div class="main-navbar">
            <div class="row-nav">
                <div class="logo">Alibaba.com</div>
                <div class="search">
                    <img src={Camera} alt="camera" /> 
                    <button class="search-btn"> <img src={Button} alt="" srcset="" /> Search</button>
                    <input type="search" placeholder="What are you looking for..." value={img} onChange={inputEvent} />
                </div>
                
                <div class="join-for-free material-icons-outlined"> <FaAccessibleIcon /> Sign in Join for free</div>
                
                <div class="message"><FaMonero />  Message</div>
                
                <div class="orders"><FaOpencart />  Orders</div>
                
                <div class="cart"><FaCartArrowDown />  Cart</div>
                
            </div>
        </div>
        <br />
        <hr />
       {img === "" ? null : <Search name={img} />}
    </div>
    
    
    )
}

export default Parent