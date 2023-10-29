import React, {useState, useEffect} from 'react'

const images = [
   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
   'https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835_1280.jpg',
   'https://st2.depositphotos.com/1000423/43551/i/450/depositphotos_435518640-stock-photo-image-of-tree-on-the.jpg',
   'https://img.freepik.com/premium-photo/planting-crops-pile-coins-hand-investment-concepts-business_154780-951.jpg',
  ];

export default function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div >
        <div
          style={{

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div >
            <img
              height={400}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-60px",
                marginBottom: "60px",
              }}
            >
              <button
                style={{
                  color: "white",
                  backgroundColor: "red",
                }}
                onClick={handlePrev}
                shape="circle"
              >Left</button>
              <h2 style={{ color: "rgb(0, 255, 247)", marginLeft: "20px" }}>
                {currentImageIndex + 1} of {images.length}
              </h2>

              <button
                style={{
                  color: "white",
                  backgroundColor: "red",
                  marginLeft: "20px",
                }}
                onClick={handleNext}
                >Right</button>
            </div>
          </div>
        </div>
    </div>
  )
}
