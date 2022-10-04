import React from "react";
import Imgage from '../Components/img/image-1.png'
import Image from '../Components/img/image-2.png'
import Banner from '../Components/img/banner.jpg'
import Card3 from '../Components/img/card-3.webp'
import Card4 from '../Components/img/card-4.webp'
import Card5 from '../Components/img/card-5.webp'
import Card6 from '../Components/img/card-6.webp'
import Card7 from '../Components/img/card-7.webp'
import Card8 from '../Components/img/card-8.webp'
import { FaCameraRetro } from "react-icons/fa";
import {FaPeopleArrows } from "react-icons/fa";
import { FaViruses } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuromobelexperte } from "react-icons/fa";


import './AliBaba.css';


function Cardrow(){
    return(
      <>
      <div className="row">
        <img src={Banner} alt='' />
      </div>
      <div className="container banner">
        <div className="row">
            <div className="col-3 card-one">
                <h5>Source by Category</h5>
                <div className="row">
                    <div className="col-12">
                        <p><FaCameraRetro /> Consumer Electronics</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaPeopleArrows /> Apparel</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaViruses /> Vehicle Parts & Accessories</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaSpotify /> Sport & Entertainment</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaBusAlt /> Machinery</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaHome /> Home & Garden</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><FaBuromobelexperte /> All Categories</p>

                    </div>
                </div>
            </div>
            <div className="col-3 card-two">
                <h5>Get Samples</h5>
                <div className="row">
                    <div className="col-6">
                        <img className="product-image" src={Imgage} alt="" />
                        <p className="text-center">Trending</p>
                    </div>
                    <div className="col-6">
                        <img className="product-image" src={Card3} alt="" />
                        <p className="text-center">Newly released</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <h5>Factory Live Q&A</h5>
                    <div className="col-6">
                        <img className="product-image" src={Card4} alt="" />
                        <p className="text-center">Factory livestream</p>
                    </div>
                    <div className="col-6">
                        <img className="product-image" src={Card5} alt="" />
                        <p className="text-center">Evaluation</p>
                    </div>
                </div>
            </div>
            <div className="col-3 card-theree">
                <h5>Top-ranking manufacturers</h5>
                <div className="row">
                    <div className="col-6">
                        <img className="product-image" src={Card6} alt="" />
                        <p className="text-center">Quick response</p>
                    </div>
                    <div className="col-6">
                        <img className="product-image" src={Card7} alt="" />
                        <p className="text-center">best seller</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="product-image" src={Card8} alt="" />
                        <p className="text-center">Most popular</p>
                    </div>
                    <div className="col-6">
                        <img className="product-image" src={Image} alt="" />
                        <p className="text-center">On-time Delivery</p>
                    </div>
                </div>
            </div>
            <div className="col-3 card-four">
                <div className="row">
                    <p>Welcom!</p>
                    <strong>Guest</strong>
                    <div className="col-6">
                        <button className="btn btn-primary btn-1">Sign in</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary btn-1 btn-4">Join for free</button>
                    </div>
                </div>
                <h5 className="mtr">One requst multiple quotes</h5>
                <div className="row">
                    <div className="col-4">
                        <h3>160,000</h3>
                    </div>
                    <div className="col-4">
                        <h3>21h</h3>
                    </div>
                    <div className="col-4">
                        <h3>7689</h3>
                    </div>
                    <button className="btn btn-primary">Request for Quotation</button>
                </div>
            </div>
        </div>
    </div>
      </>
    )
}

export default Cardrow