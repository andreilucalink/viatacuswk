import React, {useState} from 'react';
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

/* import MixButton from 'mix-button'; */




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





function App() {

  const [current, setCurrent] = useState();
  
  const playSound = (sound) => {
      sound.play();
      sound.volume = 0.5;
  }
  
  const stopSound = () => {
    switch(current){
      case 'terapie':
        terapie.pause();
        terapie.currentTime = 0;
        break;

      case 'drswk':
        drswk.pause();
        drswk.currentTime = 0;
        break;

      case 'anevrism':
        anevrism.pause();
        anevrism.currentTime = 0;
        break;

      case 'tureta':
        tureta.pause();
        tureta.currentTime = 0;
        break;

      case 'taratura':
        taratura.pause();
        taratura.currentTime = 0;
        break;

      case 'ghiveciu':
        ghiveciu.pause();
        ghiveciu.currentTime = 0;
        break;

      case 'corona':
        corona.pause();
        corona.currentTime = 0;
        break;

      case 'iaracoaie':
        iaracoaie.pause();
        iaracoaie.currentTime = 0;
        break;

      case 'familia':
        familia.pause();
        familia.currentTime = 0;
        break;

      case 'mmdejoc':
        mmdejoc.pause();
        mmdejoc.currentTime = 0;
        break;

      case 'spell':
        spell.pause();
        spell.currentTime = 0;
        break;

      case 'obat':
        obat.pause();
        obat.currentTime = 0;
        break;

      case 'rasa':
        rasa.pause();
        rasa.currentTime = 0;
        break;

      case 'nisto1':
        nisto1.pause();
        nisto1.currentTime = 0;
        break;

      case 'nisto2':
        nisto2.pause();
        nisto2.currentTime = 0;
        break;

      case 'rasu':
        rasu.pause();
        rasu.currentTime = 0;
        break;

      case 'ezreal':
        ezreal.pause();
        ezreal.currentTime = 0;
        break;

      case 'ratat1':
        ratat1.pause();
        ratat1.currentTime = 0;
        break;
      
      case 'aideplm':
        aideplm.pause();
        aideplm.currentTime = 0;
        break;
      
      case 'vbfrumos':
        vbfrumos.pause();
        vbfrumos.currentTime = 0;
        break;
      
      default: 
        return;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Swk Sounds</h1>
        <h2>Happy cripting</h2>
      </header>
      <div className="stop-div">
        <img src={require('./img/stop.svg')} alt="STOP" className="play-btn stop-btn" onClick={() => stopSound()}/>
      </div>
      <div className="wrapper">
        <div className="card" onClick={() => {stopSound();playSound(terapie); setCurrent('terapie')}}>
          <img src={require('./img/video2.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Terapie</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(drswk); setCurrent('drswk')}}>
          <img src={require('./img/video2.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Dr. Swk</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(anevrism); setCurrent('anevrism')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Anevrism</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tureta); setCurrent('tureta')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn" />
          <span className="txt">Tureta</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(taratura); setCurrent('taratura')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Târâtura</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ghiveciu); setCurrent('ghiveciu')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ghiveci</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(corona); setCurrent('corona')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Corona</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(iaracoaie); setCurrent('iaracoaie')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Iară coaie?</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(familia); setCurrent('familia')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Familia</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(mmdejoc); setCurrent('mmdejoc')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Morţii tăi de joc</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(spell); setCurrent('spell')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Spellurile</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(obat); setCurrent('obat')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">O bat pe mă-ta</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(rasa); setCurrent('rasa')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Rasa mă-tii</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(nisto1); setCurrent('nisto1')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Nisto 1</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(nisto2); setCurrent('nisto2')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Nisto 2</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(rasu); setCurrent('rasu')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Râsu</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ezreal); setCurrent('ezreal')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ezreal</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ratat1); setCurrent('ratat1')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">În plm de ratat</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(aideplm); setCurrent('aideplm')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ai de plm</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(vbfrumos); setCurrent('vbfrumos')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Hai vorbeşte frumos</span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
