import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import imgTech from './img/Banner.jpg'
import HomeData from './HomeData'

export default function Home(){
    return (
        <div className="Home">
        <Navbar />
        <section id="carousel">
            <div className="carousel slide" id="carousel-1">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="jumbotron hero-technology carousel-hero" style={{backgroundImage: `url(${imgTech})`, backgroundSize: "cover"}}>
                            <div style={{paddingTop: "10%"}}>
                                <h1 className="hero-title" style={{textShadow: "0 3px 3px rgba(0, 0, 0, 0.4)", color: "#fff"}}>งานที่ตรงความต้องการ ?</h1>
                                <p className="hero-subtitle" style={{maxWidth: "600px", margin: "25px auto", padding: "10px 15px", textShadow: "0 3px 3px rgba(0, 0, 0, 0.4)", color: "#fff"}}>หางานไม่ที่ตรงความต้องการยากใช่ไหม อยากจ้างพนักงานที่มีคุณสมบัติตรงกับที่ต้องการ ให้เราช่วยสิ SaeRoy</p>
                                <Link to="/find-jobs/data"><button className="btn btn-primary hero-button plat" style={{boxShadow: "0 0 0 0 #048f83!important"}}>Learn more</button></Link>
                                <Link to="/find-jobs/profile" target="_blank"><button className="btn btn-primary hero-button plat" style={{boxShadow: "0 0 0 0 #048f83!important"}}>Profile</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HomeData />
        </div>
    );
}