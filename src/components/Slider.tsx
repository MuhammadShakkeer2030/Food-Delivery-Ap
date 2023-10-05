import {useState,useEffect} from 'react'
function Slider(){
 const images=[
      {
          image:"https://w0.peakpx.com/wallpaper/849/749/HD-wallpaper-x-men-apocalypse-banner-poster-movies-widescreen.jpg"
      },
      {
          image:"https://live.staticflickr.com/4005/4686746190_31c292dc8c_b.jpg"
      },
      {
          image:"https://www.marannetwork.com/wp-content/uploads/2021/07/Movice-Poster-Material-psd-file.jpg"
      }
  
  ]
  const [nextImage, setNextImage] = useState(0);

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     if (images.length > 0) {
//         // 1st solution
//       setNextImage((prevNextImage) => (prevNextImage + 1) % images.length);
//     //   OR 2nd solution 
//     setNextImage((prevNextImage) => {
//         if (prevNextImage + 1 < images.length) {
//           return prevNextImage + 1;
//         } else {
//           return 0;
//         }
//       });
      
//       console.log(nextImage);

//       // Check if 'nextImage' is equal to the length of the images array
//       if (nextImage === images.length - 1) {
//         // Reset 'nextImage' to 0 if it's at the end of the array
//         setNextImage(0);
//       }
//     }
//   }, 2000);

//   return () => {
//     clearInterval(intervalId);
//   };
// }, [images, nextImage]);

  
  
      return(
          <div>
          
              {/* {images.map((item,index)=><div key={index}> */}
                  <div>
                      <img className="w-[100%] h-[60vh] object-cover" src={images[nextImage].image} alt="" />
                  </div>
              
          </div>
      )
  }
  export default Slider