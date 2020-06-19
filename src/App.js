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
import Wonder from './sounds/wonder.mp3';
import Sclavi from './sounds/sclavi.mp3';
import Cupa from './sounds/cupaliceelor.mp3';
import SaPisat from './sounds/sapisat.mp3';
import PizdaLaMama from './sounds/inpizdalamama.mp3';
import Pac2GL from './sounds/pac2gloante.mp3';
import MaJocOrice from './sounds/majocorice.mp3';
import EstiChior from './sounds/estichior.mp3';
import NuAmW from './sounds/nuamw.mp3';
import Anevrism2 from './sounds/distantapula.mp3';
import Sclavi2 from './sounds/sclavi2.mp3';
import Mersi from './sounds/mersi.mp3';
import Nautilus from './sounds/nautilus.mp3';
import Flexu from './sounds/flexu.mp3';
import Mampisat from './sounds/mampisatpemata.mp3';

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
let wonder = new Audio(Wonder);
let sclavi = new Audio(Sclavi);
let cupa = new Audio(Cupa);
let sapisat = new Audio(SaPisat);
let pizdalamama = new Audio(PizdaLaMama);
let pac2gl = new Audio(Pac2GL);
let majocorice = new Audio(MaJocOrice);
let estichior = new Audio(EstiChior);
let nuamw = new Audio(NuAmW);
let anevrism2 = new Audio(Anevrism2);
let sclavi2 = new Audio(Sclavi2);
let mersi = new Audio(Mersi);
let nautilus = new Audio(Nautilus);
let flexu = new Audio(Flexu);
let mampisat = new Audio(Mampisat);





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
      
      case 'wonder':
        wonder.pause();
        wonder.currentTime = 0;
        break;

      case 'sclavi':
        sclavi.pause();
        sclavi.currentTime = 0;
        break;

      case 'cupa':
        cupa.pause();
        cupa.currentTime = 0;
        break;
      
      case 'sapisat':
        sapisat.pause();
        sapisat.currentTime = 0;
        break;
      
      case 'pizdalamama':
        pizdalamama.pause();
        pizdalamama.currentTime = 0;
        break;
      
      case 'pac2gl':
        pac2gl.pause();
        pac2gl.currentTime = 0;
        break;
      
      case 'majocorice':
        majocorice.pause();
        majocorice.currentTime = 0;
        break;
      
      case 'estichior':
        estichior.pause();
        estichior.currentTime = 0;
        break;
      
      case 'nuamw':
        nuamw.pause();
        nuamw.currentTime = 0;
        break;
      
      case 'anevrism2':
        anevrism2.pause();
        anevrism2.currentTime = 0;
        break;
      
      case 'nautilus':
        nautilus.pause();
        nautilus.currentTime = 0;
        break;
      
      case 'mampisat':
        mampisat.pause();
        mampisat.currentTime = 0;
        break;
      
      case 'flexu':
        flexu.pause();
        flexu.currentTime = 0;
        break;
      
      case 'mersi':
        mersi.pause();
        mersi.currentTime = 0;
        break;
      
      case 'sclavi2':
        sclavi2.pause();
        sclavi2.currentTime = 0;
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
        <div className="card" onClick={() => {stopSound();playSound(nautilus); setCurrent('nautilus')}}>
              <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
              <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
              <span className="txt">Nautilus</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(flexu); setCurrent('flexu')}}>
              <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
              <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
              <span className="txt">Taci cu flexu tău</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(mersi); setCurrent('mersi')}}>
              <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
              <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
              <span className="txt">Mersi</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(mampisat); setCurrent('mampisat')}}>
              <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
              <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
              <span className="txt">M-am pişat</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(sclavi2); setCurrent('sclavi2')}}>
            <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
            <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
            <span className="txt">Sclavi2</span>
      </div>
        <div className="card" onClick={() => {stopSound();playSound(pac2gl); setCurrent('pac2gl')}}>
            <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
            <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
            <span className="txt">Cap, 2 gloanţe</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(majocorice); setCurrent('majocorice')}}>
            <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
            <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
            <span className="txt">Mă joc orice</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(estichior); setCurrent('estichior')}}>
            <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
            <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
            <span className="txt">Eşti chior?</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(nuamw); setCurrent('nuamw')}}>
            <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
            <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
            <span className="txt">Nu am W</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(anevrism2); setCurrent('anevrism2')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <img src={require('./img/new.svg')} alt="New" className="new-btn"/>
          <span className="txt">Anevrism 2</span>
      </div>
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
        <div className="card" onClick={() => {stopSound();playSound(wonder); setCurrent('wonder')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">Wonder</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(sclavi); setCurrent('sclavi')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">Sclavi</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(cupa); setCurrent('cupa')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">Cupa Liceelor</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(sapisat); setCurrent('sapisat')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">S-a pişat</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(pizdalamama); setCurrent('pizdalamama')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">În pizdă la mama</span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
