
import React from 'react';
import styles from './Dot.module.css';
import cn from 'classnames';


const Dot = ({active, onClick}) =>{

    return (
        <div onClick={onClick}>
    <div className={cn({[styles.DotActiv]:active}, {[styles.DotNoActiv]:!active})}/>
    </div>
    );
}

export default Dot;