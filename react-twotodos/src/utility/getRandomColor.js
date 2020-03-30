export const getRandomColor = () => {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return `rgb(${red},${green},${blue})`;
};