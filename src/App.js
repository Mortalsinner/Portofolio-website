import logo from './type.svg';
import video from './scene1.mp4';
import video2 from './scene2.mp4';
import video3 from './scene3.mp4';
import wireframe from './wireframe.mp4';
import necro from './Iteration2CC.png';
import eva from './glaare.png';
import knight from './cc.png';
import tor from './1.png';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Logo */}
      <div className='logo'>
        <a href='../index.html' ><img src={logo} className="App-logo" alt="logo"/></a>
       
      </div>

      <video autoplay="autoplay" src={wireframe} type="video/mp4" className='hero'  height="200px" width="200px" loop muted/>

      {/* Paragraph */}
      <p className='paragraph'> Carlo is a self taught visual artist and developer, working on a wide range of projects from indie musician to rave party label. Able to work in different style of art, and currently experimenting in different kind of medium. Carlo is also known as Mortalsinner.<br></br><br></br>
      
      </p>
      
      <a className="link" href='mailto:themortalsinner@gmail.com'>Contact/inquiries</a><br></br>
      <a className="link" href='https://www.instagram.com/carlo.alghaniy/'>Instagram</a><br></br>
      <a className="link" href='https://www.instagram.com/mortalsinner._/'>Mortalsinner</a><br></br>
      <a className="link" href='https://www.behance.net/gallery/177383543/Cv-Portofolio-2023'>Behance</a><br></br>
      <a className="link" href='https://www.artstation.com/themortalcarlo'>ArtStation</a>

      <br></br>
      <br></br>
      <br></br>


      {/* Video hero */}
      <div className="hero">
        <div className="hero-text2">
          <div className="vid-card">

            <video autoplay="autoplay" src={video} type="video/mp4" className='hero'  height="200px" width="200px" loop muted/>

            <video autoplay="autoplay" src={video2} type="video/mp4" className='hero'  height="200px" width="200px" loop muted/>

            <video autoplay="autoplay" src={video3} type="video/mp4" className='hero'  height="200px" width="200px" loop muted/>

         </div>
        </div>
      </div>


{/* Image Card */}
      <div className='imageCard'>
        <img src={necro} className="image" alt="logo" oncontextmenu="return false;"/>
        <br></br>
        <img src={eva} className="image" alt="logo" oncontextmenu="return false;"/>
        <br></br>
        <img src={knight} className="image" alt="logo" oncontextmenu="return false;"/>
        <br></br>
        <img src={tor} className="image" alt="logo" oncontextmenu="return false;"/>
        <br></br>
      </div>
      
    </div>
  );
}

export default App;
