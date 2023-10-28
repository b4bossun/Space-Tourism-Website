import React from 'react'
import './AppSpaceTechnology.css'
import logosvg from '../compimages/starter-code/assets/shared/logo.svg'
import launchvehicleimage from '../compimages/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import technologybackground from '../compimages/starter-code/assets/technology/background-technology-desktop.jpg'

function AppSpaceTechnology() {
    return (
        <>
            <div style={{ backgroundImage: `url(${technologybackground})`, backgroundRepeat: "no-repeat", backgroundsize: "cover", position: 'fixed', height: '100%' }}>
                <div class="homediv1">
                    <nav class="mothernav">
                        <div class="logomotherdiv">
                            <img src={logosvg} alt="" />
                        </div>
                        <div class="homelidiv">
                            <div class="homelidiv1">
                                <hr class="straightline" />
                            </div>
                            <div class="homelidiv2">
                                <li class="homeli">
                                    <ul id="active"><a href='/'><span class="spanlist">00</span>&nbsp; Home</a></ul>
                                    <ul id="active"><a href='/appSpacedestination'><span class="spanlist">01</span>&nbsp;
                                        Destination</a></ul>
                                    <ul id="active"><a href='/appspacecrew' ><span class="spanlist">02</span>&nbsp; Crew</a></ul>
                                    <ul id="active"><a href='/appspacetechnology'> <span class="spanlist">03</span>&nbsp;
                                        Technology</a></ul>
                                </li>
                            </div>

                        </div>
                    </nav>
                </div>
                <div class="technologybodydiv">
                    <div class="firstdiv">
                        <h1 class="spacelaunchparagraph"><span class="slp1">03</span>&nbsp; &nbsp;<span class="slp2">SPACE LAUNCH
                            101</span></h1>
                    </div>
                    <div class="seconddiv">
                        <sectiion class="section1">
                            <div id="circlenumber" class="circle1">1</div>
                            <div id="circlenumber" class="circle2">2</div>
                            <div id="circlenumber" class="circle3">3</div>
                        </sectiion>
                        <sectiion class="section2">
                            <p>THE TECHNOLOGY...</p>
                            <h1 class="lvp">LAUNCH VEHICLE</h1>
                            <p>A launch vehicle or carrier rocket is a rocket-propelled
                                vehicle used to carry a payload from Earth's surface to
                                space, usually to Earth orbit or beyond. Our WEB-X
                                carrier rocket is the most powerful in operation.
                                Standing 150 metres tall, it's quite an awe-inspiring sight
                                on the launch pad!</p>
                        </sectiion>
                        <sectiion class="section3">
                            <img class="techpageimage" src={launchvehicleimage} alt="" />
                        </sectiion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppSpaceTechnology