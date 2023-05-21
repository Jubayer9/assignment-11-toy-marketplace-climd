import img1 from '../../../photo/desktop-wallpaper-wolverine-storm-lego-toy-comics-rogue-custom-cyclops-gambit-iceman-customs-marvel-superheroes-xmen-jeangrey-havok-3264x2448.jpg'
import img2 from '../../../photo/maxresdefault (1).jpg'
import img3 from '../../../photo/maxresdefault (2).jpg'
import img4 from '../../../photo/maxresdefault.jpg'
const PhotoGallery = () => {
    return (
        <div>
             <hr />
            <h1 style={{fontSize:"55px",width:"20%",marginLeft:"45%"}}>Toy Gallery</h1>
            <div style={{width:"85%",margin:"50px auto",height:"600px"}} className="carousel">
      
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-error btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-error btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-error btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-error btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-error btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-error btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-error btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-error btn-circle">❯</a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PhotoGallery;