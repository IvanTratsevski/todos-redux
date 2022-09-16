import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <p className={styles.description}>Sorry, page not found!</p>
                <button onClick={clickHandler} className={styles.btn}>Go to main</button>
            </div>
        </div>
    );
};