const _body = document.querySelector("body");

const paintRamdomBackgroundImage = () => {
  fetch("https://source.unsplash.com/category/random/1920x1080").then(
    (data) => {
      _body.style.background = `url(${data.url})`;
    }
  );
};

paintRamdomBackgroundImage();
