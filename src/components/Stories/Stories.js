import React from 'react';
import { motion } from 'framer-motion'
import './Stories.css'

const Stories = ({
        storyImg,
        title,
}) => {
    return(
        <>
            <motion.div className='stories-wrapper'>
                <motion.div  className='stories-container carousel'>
                    <motion.div className='border-img'>
                        <img src={storyImg} className='story__-img' alt=''/>
                    </motion.div> 
                    <p>{title}</p>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Stories;