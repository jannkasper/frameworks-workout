import React, { useRef } from "react";
import image from "./adidas.png";
import "./adidas.scss";


function Adidas() {

    const cardRef = useRef();
    const containerRef = useRef();

    const titleRef = useRef();
    const sneakerRef = useRef();
    const purchaseRef = useRef();
    const descriptionRef = useRef();
    const sizesRef = useRef();

    function handleMouseMove(e) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    function handleMouseEnter() {
        cardRef.current.style.transition = "none";
        titleRef.current.style.transform = "translateZ(150px)";
        sneakerRef.current.style.transform = "translateZ(200px) rotateZ(-45deg)";
        descriptionRef.current.style.transform = "translateZ(125px)";
        sizesRef.current.style.transform = "translateZ(100px)";
        purchaseRef.current.style.transform = "translateZ(75px)";
    }

    function handleMouseLeave() {
        cardRef.current.style.transition = "all 0.5s ease";
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;

        titleRef.current.style.transform = "translateZ(0px)";
        sneakerRef.current.style.transform = "translateZ(0px) rotateZ(0deg)";
        descriptionRef.current.style.transform = "translateZ(0px)";
        sizesRef.current.style.transform = "translateZ(0px)";
        purchaseRef.current.style.transform = "translateZ(0px)";
    }

    function handleClick(e) {
        const sizeArray = Array.prototype.slice.call(sizesRef.current.childNodes);
        sizeArray.forEach(node => node.classList.remove("active"))
        e.target.classList.add("active");
    }

    return (
        <div className="page">
        <div ref={containerRef} className="container" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div ref={cardRef} className="card">
                <div className="sneaker">
                    <div className="circle"></div>
                    <img ref={sneakerRef} src={image} alt="adidas" />
                </div>
                <div className="info">
                    <h1 ref={titleRef} className="title">Adidas ZX</h1>
                    <h3 ref={descriptionRef}>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div ref={sizesRef} className="sizes">
                        <button onClick={handleClick}>39</button>
                        <button onClick={handleClick}>40</button>
                        <button onClick={handleClick} className="active">42</button>
                        <button onClick={handleClick}>44</button>
                    </div>
                    <div ref={purchaseRef} className="purchase">
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}



export default Adidas