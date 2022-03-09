import React from "react";
import { useRef, useEffect, useState } from 'react';
import Stories from "./Stories/Stories";
import { motion } from 'framer-motion';
import styled from "styled-components";
import { storiesObjOne, storiesObjTwo, storiesObjThree, storiesObjFour, storiesObjFive,
  storiesObjSix, storiesObjSeven, storiesObjEight, storiesObjNine, storiesObjTen } from './Stories/StoriesData'


const StoriesSection = () => {
    const [width, setWidth] = useState (0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <StyledStories ref={carousel}>
            <motion.div 
                drag="x" dragConstraints={{ right: 0, left: -width }} 
                className="storiesContent"
            >
                <motion.div  className="carousel">
                    <Stories {...storiesObjOne} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjTwo} /> 
                </motion.div>
                <motion.div> 
                    <Stories {...storiesObjThree} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjFour} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjFive} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjSix} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjSeven} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjEight} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjNine} />
                </motion.div>
                <motion.div>
                    <Stories {...storiesObjTen} />
                </motion.div>
            </motion.div>       
        </StyledStories>
    )
}


const StyledStories = styled.section`
    margin: 1.5em auto;
    max-width: 99%;
    overflow: hidden;
    cursor: grab;
    .storiesContent {
      display: flex;
      flex-direction: row;
    }
`

export default StoriesSection;