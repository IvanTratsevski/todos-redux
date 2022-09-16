import React from "react";
import styles from './index.module.css';

// filterLabel = 'DONE'

export const FilterButton = ({filterLabel, children, isActive, clickHandler}) => {

    const cn = `${styles.button} ${isActive ? styles.active : ''}` ;

    return (
        <button onClick={() => clickHandler(filterLabel)} className={cn}>
            {children}
        </button>
    )
};