const img = document.querySelector('.dice');
let cislo = 1;

const changeImg = () => {
  img.src = `img/side${cislo}.svg`;
  cislo = (cislo + 1) % 6;
  if (cislo === 0) {
    cislo = 1;
  }
};

img.addEventListener('click', changeImg);
document.addEventListener('keydown', changeImg);
