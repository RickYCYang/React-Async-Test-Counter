export const getRandomNumber = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const number: number = (Math.floor(Math.random() * 10)) + 1;
            resolve(number);
        }, 2000);
    });
};