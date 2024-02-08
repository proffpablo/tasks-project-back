export const delay = (req, res, next) => {

    const timeOut = 1000;

    setTimeout(() => {
        next();
    }, timeOut);
}