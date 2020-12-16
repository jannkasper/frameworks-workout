import React, { useEffect } from "react";
import styles from "./posts.module.scss"
import Item from "./item";
import gsap from "gsap";

import _posts from "./posts.json";


function Posts () {

    useEffect(() => {
        let cards = Array.from(document.getElementById("card-slider").childNodes);
        startAnimation(cards);
    })

    function startAnimation(array){
        if(array.length >= 4 ) {
            gsap.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: gsap.easeInOut, onComplete: sortArray(array)});

            gsap.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: gsap.easeInOut});

            gsap.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: gsap.easeInOut});

            gsap.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: gsap.easeInOut});
        } else {
            document.getElementById("card-slider").append('<p>Sorry, carousel should contain more than 3 slides</p>')
        }
    }

    function sortArray(array) {
        let delay;
        clearTimeout(delay);
        delay = setTimeout(function(){
            let firstElem = array.shift();
            array.push(firstElem);
            return startAnimation(array);
        },3000)
    }

    return (
        <div className={styles.page}>
            <div className={styles.sliderWrap}>
                <div id="card-slider"  className={styles.slider}>
                    {_posts.map((item, index) => <Item key={index} image={item.img} title={item.title} description={item.description} location={item.location} />)}
                </div>
            </div>
        </div>
    )
}

export default Posts;
