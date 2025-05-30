  document.querySelectorAll(".carousel").forEach((carousel) => {
    let index = 0;
    const images = carousel.querySelectorAll("img");

    if (images.length <= 1) return;

    setInterval(() => {
      index = (index + 1) % images.length;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // change every 3 seconds
  });