import React, { useEffect, useRef } from "react";
import "./skewed.scss";

function Skewed () {

    const pagesRef = useRef();
    let currentPage = 0;
    const animationTime = 1000;
    let scrolling = false;
    let numberOfPages;
    let pageArray;

    useEffect(() => {
        pageArray = pagesRef.current.childNodes;
        numberOfPages = pageArray.length;
    })

    function pagination() {
        scrolling = true;
        pageArray[currentPage].classList.remove("inactive");
        pageArray[currentPage].classList.add("active");
        if (currentPage > 0) {
            pageArray[currentPage-1].classList.add("inactive");
        }

        if (currentPage < numberOfPages-1) {
            pageArray[currentPage+1].classList.remove("active");
        }

        setTimeout(function() {
            scrolling = false;
        }, animationTime);
    };

    function navigateUp() {
        if (currentPage === 0 ||  pagesRef.current == null) return;
        currentPage--;
        pagination();

    };

    function navigateDown() {
        if (currentPage === numberOfPages-1 || pagesRef.current == null) return;
        currentPage++;
        pagination();
    }

    /* Add the event listeners for each event. */
    document.addEventListener('wheel', handleScroll);
    document.addEventListener('mousewheel', handleScroll);
    document.addEventListener('DOMMouseScroll', handleScroll);

    function handleScroll(e) {
        if(scrolling) return;
        if (e.wheelDelta > 0 || e.detail < 0) {
            navigateUp();
        } else {
            navigateDown();
        }
    }

    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    }



    return (
        <div ref={pagesRef} className="skw-pages">
            <div className="skw-page skw-page-0 active">
                <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content"></div>
                    </div>
                </div>
                <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content">
                            <h2 className="skw-page__heading">Skewed One Page Scroll</h2>
                            <p className="skw-page__description">Just scroll down</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skw-page skw-page-1">
                <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content">
                            <h2 className="skw-page__heading">Page 2</h2>
                            <p className="skw-page__description">Nothing to do here, continue scrolling.</p>
                        </div>
                    </div>
                </div>
                <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content"></div>
                    </div>
                </div>
            </div>
            <div className="skw-page skw-page-2">
                <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content"></div>
                    </div>
                </div>
                <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content">
                            <h2 className="skw-page__heading">Page 3</h2>
                            <p className="skw-page__description">The end is near, I promise!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skw-page skw-page-3">
                <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content">
                            <h2 className="skw-page__heading">Page 4</h2>
                            <p className="skw-page__description">Ok, ok, just one more scroll!</p>
                        </div>
                    </div>
                </div>
                <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content"></div>
                    </div>
                </div>
            </div>
            <div className="skw-page skw-page-4">
                <div className="skw-page__half skw-page__half--left">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content"></div>
                    </div>
                </div>
                <div className="skw-page__half skw-page__half--right">
                    <div className="skw-page__skewed">
                        <div className="skw-page__content">
                            <h2 className="skw-page__heading">Epic finale</h2>
                            <p className="skw-page__description">
                                Feel free to check other pages
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skewed