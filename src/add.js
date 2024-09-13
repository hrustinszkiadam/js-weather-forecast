const createRowElement = () => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    return rowElement;
};

const createDayElement = () => {
    const dayElement = document.createElement('div');
    return dayElement;
};

const createDateElement = (date) => {
    const dateElement = document.createElement('h2');
    dateElement.textContent = date;
    return dateElement;
}

const createDayNameElement = (dayName) => {
    const dayNameElement = document.createElement('h2');
    dayNameElement.textContent = dayName;
    return dayNameElement;
}

const createTypeElement = (type) => {
    const typeElement = document.createElement('span');
    typeElement.classList.add('type');
    typeElement.textContent = type;
    return typeElement;
}

const createTemperatureElement = (min, max) => {
    const temperatureElement = document.createElement('div');
    temperatureElement.classList.add('temperature');
    const minElement = createTemperatureValueElement('min', min);
    const maxElement = createTemperatureValueElement('max', max);
    temperatureElement.appendChild(minElement);
    temperatureElement.appendChild(maxElement);
    return temperatureElement;
}

const createTemperatureValueElement = (type, value) => {
    const valueElement = document.createElement('span');
    valueElement.classList.add(type);
    valueElement.textContent = `${type.toUpperCase()}: ${value} °C`;
    return valueElement;
};

const addDay = (day, wrapper) => {
    const dayElement = createDayElement();
    const dateElement = createDateElement(day.date);
    const dayNameElement = createDayNameElement(day.day);
    const typeElement = createTypeElement(day.type);
    const temperatureElement = createTemperatureElement(day.min, day.max);
    const row1 = createRowElement();
    row1.appendChild(dateElement);
    row1.appendChild(dayNameElement);

    const row2 = createRowElement();
    row2.appendChild(typeElement);
    dayElement.appendChild(row1);
    dayElement.appendChild(row2);

    dayElement.appendChild(temperatureElement);

    wrapper.appendChild(dayElement);
};

export default addDay;
