import React from "react";
import styles from '../CardsList/Card/Controls/KarmaCounter/karmaCounter.css'


export function ArrowIcon() {
    return (
        <>

            <div >
                <svg className={styles.up} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div >
                <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </div>

        </>   
    )
}