import React from 'react'
import bike from './assets/bike.png'
import parts01 from './assets/parts-1.png'
import parts02 from './assets/parts-2.png'
import parts03 from './assets/parts-3.png'
import parts04 from './assets/parts-4.png'
import parts05 from './assets/parts-5.png'
import parts06 from './assets/parts-6.png'
import parts07 from './assets/parts-7.png'
import parts08 from './assets/parts-8.png'
import parts09 from './assets/parts-9.png'
import parts10 from './assets/parts-10.png'
import parts11 from './assets/parts-11.png'
import parts12 from './assets/parts-12.png'
import parts13 from './assets/parts-13.png'
import parts14 from './assets/parts-14.png'
import parts15 from './assets/parts-15.png'
import parts16 from './assets/parts-16.png'
import parts17 from './assets/parts-17.png'
import parts18 from './assets/parts-18.png'
import parts19 from './assets/parts-19.png'
import parts20 from './assets/parts-20.png'
import parts21 from './assets/parts-21.png'
import parts22 from './assets/parts-22.png'
import parts23 from './assets/parts-23.png'
import parts24 from './assets/parts-24.png'
import parts25 from './assets/parts-25.png'
import parts26 from './assets/parts-26.png'

export default function App() {

    const [aboutToggle, setAboutToggle] = React.useState('hide')
    const [chainToggle, setChainToggle] = React.useState('hide')
    const [collarToggle, setcollarToggle] = React.useState('hide')
    const [brakeToggle, setBrakeToggle] = React.useState('hide')
    const [rearDerailToggle, setRearDerailToggle] = React.useState('hide')
    const [fenderToggle, setFenderToggle] = React.useState('hide')
    const [skewerToggle, setSkewerToggle] = React.useState('hide')
    const [tireToggle, setTireToggle] = React.useState('hide')
    const [tubeToggle, setTubeToggle] = React.useState('hide')
    const [rimToggle, setRimToggle] = React.useState('hide')
    const [cassetteToggle, setCassetteToggle] = React.useState('hide')
    const [saddleToggle, setSaddleToggle] = React.useState('hide')
    const [cageToggle, setCageToggle] = React.useState('hide')
    const [rackToggle, setRackToggle] = React.useState('hide')
    const [spokeToggle, setSpokeToggle] = React.useState('hide')
    const [gripToggle, setGripToggle] = React.useState('hide')
    const [shifterToggle, setShifterToggle] = React.useState('hide')
    const [crankarmToggle, setCrankarmToggle] = React.useState('hide')
    const [chainringToggle, setChainringToggle] = React.useState('hide')
    const [frameToggle, setFrameToggle] = React.useState('hide')
    const [barToggle, setBarToggle] = React.useState('hide')
    const [lockToggle, setLockToggle] = React.useState('hide')
    const [housingToggle, setHousingToggle] = React.useState('hide')
    const [headsetToggle, setHeadsetToggle] = React.useState('hide')
    const [pedalToggle, setPedalToggle] = React.useState('hide')
    const [seatpostToggle, setSeatpostToggle] = React.useState('hide')
    const [frontDerailToggle, setFrontDerailToggle] = React.useState('hide')
    function handleOnClick () {
        if (aboutToggle === 'hide'){
            setAboutToggle('show')
        } else {setAboutToggle('hide')}
    }

    const [part, setPart] = React.useState('')
    function handleMouseEnter(e) {
        if (
            e.target.classList.contains('main--grid-area19') ||
            e.target.classList.contains('main--grid-area20') ||
            e.target.classList.contains('main--grid-area21')) 
            {
            setPart('— SADDLE')
            setSaddleToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area23')) 
            {
            setPart('— GRIPS, BRAKE LEVERS, SHIFT LEVERS, HANDLEBAR, STEM')
            setGripToggle('show')
            setBrakeToggle('show')
            setShifterToggle('show')
            setBarToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area32') ||
            e.target.classList.contains('main--grid-area33')) 
            {
            setPart('— RACK')
            setRackToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area34')) 
            {
            setPart('— SEATPOST, SEATPOST COLLAR')
            setSeatpostToggle('show')
            setcollarToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area35') ||
            e.target.classList.contains('main--grid-area36')) 
            {
            setPart('— FRAME: TOP TUBE')
            setFrameToggle('SHOW')
        } else if (
            e.target.classList.contains('main--grid-area37')) 
            {
            setPart('— HEADSET, FRAME: HEAD TUBE')
            setFrameToggle('show')
            setHeadsetToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area38')) 
            {
            setPart('— BRAKE HOUSING, BRAKE CABLE, SHIFT HOUSING, SHIFT CABLE')
            setHousingToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area46') ||
            e.target.classList.contains('main--grid-area47')) 
            {
            setPart('— RACK, FENDER, TIRE, TUBE, RIM, SPOKES')
            setRackToggle('show')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area48')) 
            {
            setPart('— REAR BRAKES, BRAKE PADS, FRAME: SEAT STAYS')
            setFrameToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area49')) 
            {
            setPart('— LOCK, FRAME: SEAT TUBE')
            setLockToggle('show')
            setFrameToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area50')) 
            {
            setPart('— BOTTLE CAGE, FRAME: DOWN TUBE')
            setCageToggle('show')
            setFrameToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area51')) 
            {
            setPart('— FORK, FENDER, TIRE, TUBE, RIM, SPOKES')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area52')) 
            {
            setPart('— FRONT BRAKES, BRAKE PADS, FENDER, TIRE, TUBE, RIM, SPOKES')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area53')) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area59')) 
            {
            setPart('— FENDER')
            setFenderToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area60')) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area61')) 
            {
            setPart('— CASSETTE, WHEEL SKEWER')
            setCassetteToggle('show')
            setSkewerToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area62')) 
            {
            setPart('— FRAME: CHAIN STAYS, CHAIN, SPOKES, RIM, TUBE, TIRE')
            setChainToggle('show')
            setFrameToggle('show')
            setChainToggle('show')
            setSpokeToggle('show')
            setRimToggle('show')
            setTubeToggle('show')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area63')) 
            {
            setPart('— LOCK, FRAME: SEAT TUBE, FRONT DERAILLEUR, CHAINRING, CRANK ARM')
            setLockToggle('show')
            setFrontDerailToggle('show')
            setFrameToggle('show')
            setChainringToggle('show')
            setCrankarmToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area64')) 
            {
            setPart('— FRAME: DOWN TUBE, PEDAL')
            setFrameToggle('show')
            setPedalToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area65')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area66')) 
            {
            setPart('— FORK, WHEEL SKEWER')
            setSkewerToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area67')) 
            {
            setPart('— SPOKES, RIM, TUBE, TIRE')
            setSpokeToggle('show')
            setRimToggle('show')
            setTubeToggle('show')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area68')) 
            {
            setPart('— TIRE')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area73')) 
            {
            setPart('— FENDER')
            setFenderToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area74')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area75')) 
            {
            setPart('— REAR DERAILLEUR, CHAIN')
            setChainToggle('show')
            setRearDerailToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area76')) 
            {
            setPart('— CHAIN, SPOKES, RIM, TUBE, TIRE')
            setChainToggle('show')
            setSpokeToggle('show')
            setRimToggle('show')
            setTubeToggle('show')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area77')) 
            {
            setPart('— CHAIN, CHAINRING, CRANK ARM')
            setChainToggle('show')
            setChainringToggle('show')
            setCrankarmToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area78')) 
            {
            setPart('— PEDAL, FENDER')
            setPedalToggle('show')
            setFenderToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area79')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
            setFenderToggle('show')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area80')) 
            {
            setPart('— SPOKES')
            setSpokeToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area81')) 
            {
            setPart('— SPOKES, RIM, TUBE, TIRE')
            setSpokeToggle('show')
            setRimToggle('show')
            setTubeToggle('show')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area82')) 
            {
            setPart('— TIRE')
            setTireToggle('show')
        } else if (
            e.target.classList.contains('main--grid-area88') ||
            e.target.classList.contains('main--grid-area89') ||
            e.target.classList.contains('main--grid-area90') ||
            e.target.classList.contains('main--grid-area93') ||
            e.target.classList.contains('main--grid-area94') ||
            e.target.classList.contains('main--grid-area95')
            ) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
            setTireToggle('show')
            setTubeToggle('show')
            setRimToggle('show')
            setSpokeToggle('show')
        }
    }
    function handleMouseLeave() {
        setPart('')
        setBarToggle('hide')
        setBrakeToggle('hide')
        setCageToggle('hide')
        setCassetteToggle('hide')
        setChainringToggle('hide')
        setChainToggle('hide')
        setcollarToggle('hide')
        setCrankarmToggle('hide')
        setFenderToggle('hide')
        setFrameToggle('hide')
        setFrontDerailToggle('hide')
        setGripToggle('hide')
        setHeadsetToggle('hide')
        setHousingToggle('hide')
        setLockToggle('hide')
        setPedalToggle('hide')
        setRackToggle('hide')
        setRearDerailToggle('hide')
        setRimToggle('hide')
        setSaddleToggle('hide')
        setSeatpostToggle('hide')
        setShifterToggle('hide')
        setSkewerToggle('hide')
        setSpokeToggle('hide')
        setTireToggle('hide')
        setTubeToggle('hide')
    }

    const boxes = []
    for (let i = 1; i < 113; i++) {
        if  (
            i >= 19 && i <= 21 ||
            i === 23 ||
            i >= 32 && i <= 38 ||
            i >= 46 && i <= 53 ||
            i >= 59 && i <= 68 ||
            i >= 73 && i <= 82 ||
            i >= 88 && i <= 90 ||
            i >= 93 && i <= 95
            ) {
                boxes.push(<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={i} className={'main--bike-boxes main--boxes main--grid-area' + i}></div>)
            } else {
                boxes.push(<div key={i} className={'main--boxes main--grid-area' + i}></div>)
            }
    }

    return ( 
        <>
            <nav>
                <h1>BIKE PARTS</h1>
                <h1 className='nav--part-name'>{part}</h1>
                <h1 onClick={handleOnClick} className="nav--about">ABOUT</h1>
            </nav>
            <section>
                <div onClick={handleOnClick} className={`main--about ${aboutToggle}`}> Bike Parts is a resource designed to teach the parts of a bicycle. It is free to use and available for anyone. The aim of this resource is to help lower the barrier to entry in bicycle mechanics especially for folks who have historically been excluded; people of colour, women, queer, trans, and gender non-conforming folks.<br></br><br></br><a href="mailto:hello@alextownson.ca">hello@alextownson.ca</a></div>
                <div className='main--mobile-app'>Mobile app coming soon!<br></br><br></br>Bike Parts is a resource designed to teach the parts of a bicycle. It is free to use and available for anyone. The aim of this resource is to help lower the barrier to entry in bicycle mechanics especially for folks who have historically been excluded; people of colour, women, queer, trans, and gender non-conforming folks.<br></br><br></br><a href="mailto:hello@alextownson.ca">hello@alextownson.ca</a></div>
                <img src={bike} className="main--bike" />
                <img src={parts01} id="chain" className={`main--parts ${chainToggle}`}/>
                <img src={parts03} id="seat-collar" className={`main--parts ${collarToggle}`} />
                <img src={parts02} id="brake-lever" className={`main--parts ${brakeToggle}`} />
                <img src={parts04} id="r-derail" className={`main--parts ${rearDerailToggle}`} />
                <img src={parts05} id="fenders" className={`main--parts ${fenderToggle}`} />
                <img src={parts06} id="skewer" className={`main--parts ${skewerToggle}`} />
                <img src={parts07} id="tire" className={`main--parts ${tireToggle}`} />
                <img src={parts08} id="tube" className={`main--parts ${tubeToggle}`} />
                <img src={parts09} id="rim" className={`main--parts ${rimToggle}`} />
                <img src={parts10} id="cassette" className={`main--parts ${cassetteToggle}`}/>
                <img src={parts11} id="saddle" className={`main--parts ${saddleToggle}`} />
                <img src={parts12} id="cage" className={`main--parts ${cageToggle}`} />
                <img src={parts13} id="rack" className={`main--parts ${rackToggle}`}/>
                <img src={parts14} id="spoke" className={`main--parts ${spokeToggle}`} />
                <img src={parts15} id="grip" className={`main--parts ${gripToggle}`} />
                <img src={parts16} id="shifter" className={`main--parts ${shifterToggle}`} />
                <img src={parts17} id="crankarm" className={`main--parts ${crankarmToggle}`} />
                <img src={parts18} id="chainring" className={`main--parts ${chainringToggle}`} />
                <img src={parts19} id="frame" className={`main--parts ${frameToggle}`} />
                <img src={parts20} id="handlebar" className={`main--parts ${barToggle}`} />
                <img src={parts21} id="lock" className={`main--parts ${lockToggle}`} />
                <img src={parts22} id="housing" className={`main--parts ${housingToggle}`} />
                <img src={parts23} id="headset" className={`main--parts ${headsetToggle}`} />
                <img src={parts24} id="pedal" className={`main--parts ${pedalToggle}`} />
                <img src={parts25} id="seatpost" className={`main--parts ${seatpostToggle}`} />
                <img src={parts26} id="f-derail" className={`main--parts ${frontDerailToggle}`} />
                <div className='main--grid'>
                    {boxes}
                </div>
            </section>
        </>
    )
}