const getRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (Math.floor(Math.random() * 10));
    }, 2000);
})

export {getRandomNumber};