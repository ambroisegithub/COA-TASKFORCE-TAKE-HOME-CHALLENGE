// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "image-container"
  const imageContainers = document.querySelectorAll(".image-container");

  // Iterate over each "image-container" element
  imageContainers.forEach((container) => {
    // Select the <img> element within the current container
    const img = container.querySelector("img");
    // Select the <div> element with the class "details" within the current container
    const details = container.querySelector(".details");
    // Select the <span> element within the "details" div (represents the country name)
    const country = details.querySelector("span");
    // Select the <h1> element within the "details" div (represents the animal name)
    const name = details.querySelector("h1");
    // Select the <a> element within the "details" div (represents the "Know More" link)
    const knowMoreLink = details.querySelector("a");

    // Add a "mouseover" event listener to the container
    container.addEventListener("mouseover", function () {
      // Scale up the image and apply blur and grayscale filters
      img.style.transform = "scale(1.08)";
      img.style.filter = "blur(2px) grayscale(100%)";
      // Move the country name upwards
      country.style.transform = "translateY(-20px)";
      // Move the animal name upwards
      name.style.transform = "translateY(-20px)";
      // Move the "Know More" link upwards and make it visible
      knowMoreLink.style.transform = "translateY(-20px)";
      knowMoreLink.style.opacity = "1";
    });

    // Add a "mouseout" event listener to the container
    container.addEventListener("mouseout", function () {
      // Reset the image transformations and remove filters
      img.style.transform = "scale(1)";
      img.style.filter = "none";
      // Reset the country name position
      country.style.transform = "none";
      // Reset the animal name position
      name.style.transform = "none";
      // Reset the "Know More" link position and hide it
      knowMoreLink.style.transform = "none";
      knowMoreLink.style.opacity = "0";
    });
  });
});
