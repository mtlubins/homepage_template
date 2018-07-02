import {createHeader} from "./header";
import {createFooter} from "./footer";
import {createSlider} from "./slider";
import 'styles/index.scss';
import 'bootstrap';

const slides = [
    {
    slideURL: '/assets/images/lake.jpg',
    slideDescription: 'Sunset at the lake'
    },
    {
        slideURL: '/assets/images/sea.jpg',
        slideDescription: 'Somewhere in paradise'
    },
    {
        slideURL: '/assets/images/office.jpg',
        slideDescription: 'A day in office'
    },
    {
        slideURL: '/assets/images/conqueror.jpg',
        slideDescription: 'The true conqueror'
    },
];
const header = createHeader();
const footer = createFooter();
const slider = createSlider({slides, slidingTime: 3000});
header.render();
footer.render();
slider.render();
