import React from "react"
import Facebook from '../Components/img/facebook.png'
import Twitter from '../Components/img/twitter.png'
import Instagaram from '../Components/img/instagaram.jpg'
import whatsapp from '../Components/img/whatsap.jpg'
import './AliBaba.css'


function Footer(){
    return(
        <footer>
        <div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem">Contact</li>
                    <li class="fListItem">Careers</li>
                    <li class="fListItem">Affiliates</li>
                    <li class="fListItem">Stores</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    <li class="fListItem">Support</li>
                    <li class="fListItem">Refund</li>
                    <li class="fListItem">FAQ</li>
                    <li class="fListItem">Feedback</li>
                    <li class="fListItem">Stories</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Products</h1>
                <ul class="fList">
                    <li class="fListItem">Air Force</li>
                    <li class="fListItem">Air Jordan</li>
                    <li class="fListItem">Blazer</li>
                    <li class="fListItem">Crater</li>
                    <li class="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
         <div class="footerRight">
             <div class="footerRightMenu">
                 <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
                 <div class="fMail">
                   <input type="text" placeholder="your@email.com" class="fInput" />
                    <button class="fButton">Join!</button>
                </div>
         </div>
             <div class="footerRightMenu">
                 <h1 class="fMenuTitle">Follow Us</h1>
                 <div class="fIcons">
                     <img src={Facebook} alt="" class="fIcon" />
                     <img src={Twitter} alt="" class="fIcon" />
                     <img src={Instagaram} alt="" class="fIcon" />
                     <img src={whatsapp} alt="" class="fIcon" />
                 </div>
             </div>
             <div class="footerRightMenu">
                 <span class="copyright">@Lama Dev. All rights reserved. 2022.</span>
             </div>
         </div>
    </footer>
    );
};

export default Footer;