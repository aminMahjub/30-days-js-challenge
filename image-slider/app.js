const leftArrow = document.querySelector('.left-arrow-btn');
const rigthArrow = document.querySelector('.right-arrow-btn');
const slideDesc = document.querySelector('div[class$="desc"] p');
const slideTitle = document.querySelector('div[class$="desc"] h1');
const slideImg = document.querySelector('.image-sliders-container'); 
const radioInputs = document.querySelectorAll('input[name="image-slider-inputs"]');
let count = 0;

function CreateSliderImage(imgSource, title, desc, id) {
    this.imgSource = imgSource;
    this.title = title;
    this.desc = desc; 
    this.id = id;
}

CreateSliderImage.prototype.changeSlideProperties = function() {
    slideImg.style.backgroundImage = `url(./images/${this.imgSource}.jpg)`;
    slideDesc.textContent = this.desc;
    slideTitle.textContent = this.title;

    if (this.id === count) {
        radioInputs[count].checked = true;
    }
}


const bachSlide = new CreateSliderImage('bach', 'Johann Sebastian Bach', 'Johann Sebastian Bach, (born March 21 [March 31, New Style], 1685, Eisenach, Thuringia, Ernestine Saxon Duchies [Germany]—died July 28, 1750, Leipzig), composer of the Baroque era, the most celebrated member of a large family of north German musicians. Although he was admired by his contemporaries primarily as an outstanding harpsichordist, organist, and expert on organ building, Bach is now generally regarded as one of the greatest composers of all time and is celebrated as the creator of the Brandenburg Concertos, The Well-Tempered Clavier, the Mass in B Minor, and numerous other masterpieces of church and instrumental music', 0);
const beethovenSlide = new CreateSliderImage('beethoven', 'Ludwig van Beethoven', 'Ludwig van Beethoven, (baptized December 17, 1770, Bonn, archbishopric of Cologne [Germany]—died March 26, 1827, Vienna, Austria), German composer, the predominant musical figure in the transitional period between the Classical and Romantic eras.Widely regarded as the greatest composer who ever lived, Ludwig van Beethoven dominates a period of musical history as no one else before or since. Rooted in the Classical traditions of Joseph Haydn and Mozart, his art reaches out to encompass the new spirit of humanism and incipient nationalism expressed in the works of Goethe and Friedrich von Schiller, his elder contemporaries in the world of literature; the stringently redefined moral imperatives of Kant; and the ideals of the French Revolution, with its passionate concern for the freedom and dignity of the individual.', 1);
const chopinSlide = new CreateSliderImage('chopin', 'Frédéric Chopin', 'Frédéric Chopin, French in full Frédéric François Chopin, Polish Fryderyk Franciszek Szopen, (born March 1, 1810 [see Researcher’s Note: Chopin’s birth date], Żelazowa Wola, near Warsaw, Duchy of Warsaw [now in Poland]—died October 17, 1849, Paris, France), Polish French composer and pianist of the Romantic period, best known for his solo pieces for piano and his piano concerti.', 2);
const data = [bachSlide, beethovenSlide, chopinSlide];


function sliding() {
    if (count === data.length) count = 0;
    else {
        let currentSlide = data[count];
        currentSlide.changeSlideProperties();
        count++;
    }
}

leftArrow.addEventListener('click', () => {
    if (count !== 1) {
        count -= 2;
    } else {
        count = 2;
    }

    sliding();
});

rigthArrow.addEventListener('click', () => {
    sliding();
})

window.setInterval(sliding, 4000);

