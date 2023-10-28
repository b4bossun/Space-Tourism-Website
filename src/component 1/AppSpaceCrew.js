import React from 'react'
import './AppSpaceCrew.css'
import logosvg from '../compimages/starter-code/assets/shared/logo.svg'
import crewimage from '../compimages/starter-code/assets/crew/image-douglas-hurley.webp'
import crewbackground from '../compimages/starter-code/assets/crew/background-crew-desktop.jpg'

function AppSpaceCrew() {
    return (
        <>
            <div style={{ backgroundImage: `url(${crewbackground})`, backgroundRepeat: "no-repeat", backgroundsize: "cover", position: 'fixed', height: '100%' }}>
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
                <div class="crewbodydiv">
                    <div>
                        <h1 class="mycparagraph"><span class="myc1">02</span>&nbsp; &nbsp;<span class="myc2">MEET YOUR
                            CREW</span></h1>
                    </div>
                    <section class="section">
                        <div class="sectiondiv1">
                            <div class="aboutdiv">
                                <h1 class="firsth1">COMMANDER</h1>
                                <h1 class="firsth2">DOUGLAS HURLEY</h1>
                                <p class="paragraph">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and
                                    former NASA
                                    astronaut.
                                    He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                            </div>
                            <div class="navcirclediv">
                                <li>
                                    <ul class="navcircle" id="navcircle1"></ul>
                                    <ul class="navcircle" id="navcircle2"></ul>
                                    <ul class="navcircle" id="navcircle3"></ul>
                                    <ul class="navcircle" id="navcircle4"></ul>
                                </li>
                            </div>
                        </div>
                        <div class="sectiondiv2">
                            <img src={crewimage} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AppSpaceCrew