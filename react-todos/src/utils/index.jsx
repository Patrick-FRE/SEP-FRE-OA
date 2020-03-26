export const getRandomRbg = () => {
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    return `rgb(${r},${b},${g})`;
}