const svgContainer = document.getElementById("svgContainer");

lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie.json'
  });