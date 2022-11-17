import Image from "./HeaderImage.jpg"; // Tell webpack this JS file uses this image


function HeaderImage() {
  // Import result is the URL of your image
  return <img src={Image} alt="HeaderImage" />;
}

export default HeaderImage;