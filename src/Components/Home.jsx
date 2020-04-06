import React from 'react'
import { Link } from 'react-router-dom'
import './Login-From-Dark.css'
import imgTech from './img/young-college-students.jpg'
export default function Home(){
    return (
        <section id="carousel">
            <div class="carousel slide" id="carousel-1">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="jumbotron hero-technology carousel-hero" style={{backgroundImage: imgTech}}>
                            <h1 class="hero-title">งานที่ตรงความต้องการ ?</h1>
                            <p class="hero-subtitle">หางานไม่ที่ตรงความต้องการยากใช่ไหม อยากจ้างพนักงานที่มีคุณสมบัติตรงกับที่ต้องการ ให้เราช่วยสิ SaeRoy</p>
                            <Link to="#"><button class="btn btn-primary hero-button plat">Learn more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}