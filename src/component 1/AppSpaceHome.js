import React from 'react'
import './AppSpaceHome.css'
import logosvg from '../compimages/starter-code/assets/shared/logo.svg'
import backgroundimage from '../compimages/starter-code/assets/home/background-home-desktop.jpg'

function AppSpaceHome() {
    return (
        <>
            <div class="homediv1" style={{ backgroundImage: `url(${backgroundimage})`, backgroundRepeat: "no-repeat", backgroundsize: "cover", position: 'fixed', height: '100%' }}>
                <div>
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
                <div class="homediv2">
                    <div>
                        <h1 class="homefirstline">SO, YOU WANT TO TRAVEL TO</h1>
                        <h1 class="homesecondline">SPACE</h1>
                        <h1 class="homethirdline">Let's face it; if you want to go to space, you might as well genuinely go to
                            outervspace and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a
                            truly
                            out of this world experience!
                        </h1>
                    </div>
                    <div class="explore">
                        EXPLORE
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppSpaceHome