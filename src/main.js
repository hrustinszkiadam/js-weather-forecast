import './style.css'
import data from './data.js'
import addDay from './add.js'

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

data.forEach(day => {
    addDay(day, wrapper);
});
