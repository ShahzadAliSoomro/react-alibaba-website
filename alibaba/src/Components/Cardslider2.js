import React from "react";
import Img from "../Components/img/card2-1.webp";
import Img2 from '../Components/img/card2-2.webp';
import Img3 from '../Components/img/card2-3.webp';

import Limage from "../Components/img/card2-4.jpg";

import './AliBaba.css';

function Cardcorsul(){
    return(
        <div class="container">
        <div class="row hero-section">
          <div class="col-3 texting">
              <h5>Donghai Kindfull Crystal Product Co.,Ltd.</h5>
              <p>Rating and reviws</p>
              <p>4.9/5 (30+ reviws)</p>
              <p>Factory capabilities</p>
              <ul>
                  <li><b>Finished Product Inspection</b> </li>
                  <li><b>Good Reputation Supplier</b> </li>
                  <li><b>Overseas Service Center(6)</b> </li>
                  <li><b>Minor Customization</b></li>
              </ul>
          </div>
          <div class="col-2 childimage"><img src={Img} alt="" />
              <strong>$24,00-$38.00</strong>
              <p>MOQ: 1 piece</p>
          </div>
          <div class="col-2 childimage"><img src={Img2} alt="" />
              <strong>$43.00 - $65.00</strong>
              <p>MOQ: 2 kilograms</p>
          </div>
          <div class="col-2 childimage"><img src={Img3} alt="" />
              <strong>$0.50 - $2.00</strong>
              <p>MOQ: 5.0 grams</p>
          </div>
          <div class="col-3 texting"><img src={Limage} alt="" class="largeimage" /></div>
        </div>
  </div>



    );
};

export default Cardcorsul;