import React from "react";
import Img from "../Components/img/product-image.png";
import Img2 from '../Components/img/product-2.webp';
import Img3 from '../Components/img/product-3.webp';

import Limage from "../Components/img/large image.jpeg";
import './AliBaba.css';


function Cardcorsul(){
    return(
        <div class="container">
        <div class="row hero-section">
          <div class="col-3 texting">
              <h5>Shandong Rippa Machinery Group Co. Ltd.</h5>
              <p>Rating and reviws</p>
              <p>4.8/5 (80+ reviws)</p>
              <p>Factory capabilities</p>
              <ul>
                  <li><b>Finished Product Inspection</b> </li>
                  <li><b>Good Reputation Supplier</b> </li>
                  <li><b>Overseas Service Center(6)</b> </li>
                  <li><b>Minor Customization</b></li>
              </ul>

          </div>
          <div class="col-2 childimage"><img src={Img} alt="" />
              <strong>$2,000.00</strong>
              <p>MOQ: 1.0 set</p>
          </div>
          <div class="col-2 childimage"><img src={Img2} alt="" />
              <strong>$2,000.00</strong>
              <p>MOQ: 1.0 set</p>
          </div>
          <div class="col-2 childimage"><img src={Img3} alt="" />
              <strong>$2,000.00</strong>
              <p>MOQ: 1.0 set</p>
          </div>
          <div class="col-3 texting"><img src={Limage} alt="" class="largeimage" /></div>
        </div>
  </div>



    );
};
export default Cardcorsul;