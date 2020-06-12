import React from 'react';
import './App.css';
import Tureta from './sounds/tureta.mp3';
import Ghiveciu from './sounds/ghiveciu.mp3';
import Corona from './sounds/corona2.mp3';
import Anevrism from './sounds/anevrism.mp3';
import Iaracoaie from './sounds/iaracoaie.mp3';
import Familia from './sounds/lualeasfamilianpl.mp3';
import MMdejoc from './sounds/mortiiteydejoc.mp3';
import DrSwk from './sounds/dr_swk_full.mp3';
import Terapie from './sounds/therapy.mp3';
import Spell from './sounds/cacamaspespelluriletale.mp3';
import Obat from './sounds/obatpemata.mp3';
import Rasa from './sounds/rasamatii.mp3';
import Nisto1 from './sounds/rsmnisto.mp3';
import Nisto2 from './sounds/satitraglamuienistoms.mp3';
import Rasu from './sounds/rasu.mp3';
import Taratura from './sounds/taratura.mp3';
import Ezreal from './sounds/ezreal.mp3';
import Ratat1 from './sounds/inplmderatat.mp3';
import Aideplm from './sounds/hahaideplm.mp3';
import Vbfrumos from './sounds/haivbfrumos.mp3';




let drswk = new Audio(DrSwk);
let terapie = new Audio(Terapie);
let tureta = new Audio(Tureta);
let ghiveciu = new Audio(Ghiveciu);
let corona = new Audio(Corona);
let anevrism = new Audio(Anevrism);
let iaracoaie = new Audio(Iaracoaie);
let familia = new Audio(Familia);
let mmdejoc = new Audio(MMdejoc);
let spell = new Audio(Spell);
let obat = new Audio(Obat);
let rasa = new Audio(Rasa);
let nisto1 = new Audio(Nisto1);
let nisto2 = new Audio(Nisto2);
let rasu = new Audio(Rasu);
let taratura = new Audio(Taratura);
let ezreal = new Audio(Ezreal);
let ratat1 = new Audio(Ratat1);
let aideplm = new Audio(Aideplm);
let vbfrumos = new Audio(Vbfrumos);



const playSound = (sound) => {
  sound.play();
  sound.volume = 0.5;
}

function App() {

  return (
    <div className="App">
      <header>
        <h1>Swk Sounds</h1>
        <h2>Happy cripting</h2>
      </header>
      <div className="wrapper">
        <div className="card" onClick={() => playSound(terapie)}>
          <img src={require('./img/video2.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Terapie</span>
        </div>
        <div className="card" onClick={() => playSound(drswk)}>
          <img src={require('./img/video2.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Dr. Swk</span>
        </div>
        <div className="card" onClick={() => playSound(anevrism)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Anevrism</span>
        </div>
        <div className="card" onClick={() => playSound(tureta)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Tureta</span>
        </div>
        <div className="card" onClick={() => playSound(taratura)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Târâtura</span>
        </div>
        <div className="card" onClick={() => playSound(ghiveciu)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ghiveci</span>
        </div>
        <div className="card" onClick={() => playSound(corona)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Corona</span>
        </div>
        <div className="card" onClick={() => playSound(iaracoaie)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Iară coaie?</span>
        </div>
        <div className="card" onClick={() => playSound(familia)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Familia</span>
        </div>
        <div className="card" onClick={() => playSound(mmdejoc)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Morţii tăi de joc</span>
        </div>
        <div className="card" onClick={() => playSound(spell)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Spellurile</span>
        </div>
        <div className="card" onClick={() => playSound(obat)}> 
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">O bat pe mă-ta</span>
        </div>
        <div className="card" onClick={() => playSound(rasa)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Rasa mă-tii</span>
        </div>
        <div className="card" onClick={() => playSound(nisto1)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Nisto 1</span>
        </div>
        <div className="card" onClick={() => playSound(nisto2)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Nisto 2</span>
        </div>
        <div className="card" onClick={() => playSound(rasu)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Râsu</span>
        </div>
        <div className="card" onClick={() => playSound(ezreal)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ezreal</span>
        </div>
        <div className="card" onClick={() => playSound(ratat1)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">În plm de ratat</span>
        </div>
        <div className="card" onClick={() => playSound(aideplm)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ai de plm</span>
        </div>
        <div className="card" onClick={() => playSound(vbfrumos)}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Hai vorbeşte frumos</span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
