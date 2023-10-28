import React from 'react'
import './AppSpaceDestination.css'
import logosvg from '../compimages/starter-code/assets/shared/logo.svg'
import destinationimage from '../compimages/starter-code/assets/destination/image-moon.png'
import destinationbackground from '../compimages/starter-code/assets/destination/background-destination-desktop.jpg'

function AppSpaceDestination() {
    return (
        <>
            <div style={{ backgroundImage: `url(${destinationbackground})`, backgroundRepeat: "no-repeat", backgroundsize: "cover", position: 'fixed', height: '100%' }}>
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
                <div class="motherdiv">
                    <div class="bodydiv1">
                        <h1 class="pydparagraph"><span class="pyd1">01</span>&nbsp; &nbsp;<span class="pyd2">PICK YOUR
                            DESTINATION</span></h1>
                    </div>
                    <div class="bodydiv2">
                        <section class="sectiondiv1">
                            <img class="destinationimage" src={destinationimage} alt="" />
                        </section>
                        <section class="sectiondiv2">
                            <nav class="listnav">
                                <li class="list">
                                    <ul class="destinationlist1" id="destinationlist">MOON</ul>
                                    <ul class="destinationlist2" id="destinationlist">MARS</ul>
                                    <ul class="destinationlist3" id="destinationlist">EUROPA</ul>
                                    <ul class="destinationlist4" id="destinationlist">TITAN</ul>
                                </li>
                            </nav>
                            <div class="divbeforestroke">
                                <h1 class="h1">
                                    MOON
                                </h1>
                                <p class="paragraph">
                                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
                                    perspective and come back refreshed. While you’re there, take in some history by visiting the
                                    Luna 2 and Apollo 11 landing sites.
                                </p>
                            </div>
                            <hr class="stroke" />
                            <div class="divafterstroke">
                                <div class="divafterstroke1"><span class="ad">AVG. DISTANCE</span><span class="adfig">384,400
                                    KM</span></div>
                                <div class="divafterstroke2"><span class="ett">EST. TRAVEL TIME</span><span class="ettfig">3
                                    DAYS</span></div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AppSpaceDestination