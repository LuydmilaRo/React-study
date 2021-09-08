
import React from 'react';
import styles from './Dot.module.css';
import cn from 'classnames';


const Dot = ({active}) =>{

    return (
    <div className={cn({[styles.DotActiv]:active}, {[styles.DotNoActiv]:!active})}/>
    );
}

export default Dot;