import React from 'react';
import './css/Crea.css';
import bombe from './images/gif/Basei_AnimJPO.gif';
import zebre from './images/gif/Basei_zebre.gif';
import coaching from './images/gif/Basei_coaching.gif';

function Crea() {
    return (
        <section id='crea'>
            <div className="animated-title">
                <div className="text-top">
                    <div>
                        <span>Créations numériques</span>
                    </div>
                </div>
            </div>

            <div className='descr'>
                <p>Voici des projets créatifs réalisés dans le cadre de mes études : un gif de bombe, animé image par image sur photoshop, et deux posts linkedin réalisés sur after effects lors d'un stage chez l'entreprise Learning Concept.</p>
            </div>

            <div className='crea-img'>
                <img src={bombe} alt="Gif de bombe animée" />
                <img src={coaching} alt="Gif de bombe animée" />
                <img src={zebre} alt="Gif de bombe animée" />
            </div>

        </section>
    );
}

export default Crea;