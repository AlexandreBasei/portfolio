import React from 'react';
import './css/Name.css';
import image from './capture.png';

function Name() {

    return (
        <>
            <section>
                <h1>Alexandre Basei</h1>
            </section>

            <section>
                <img src={image} alt="Oui" />
            </section>

            <section></section>
        </>
    );
}

export default Name;
