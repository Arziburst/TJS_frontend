export const discountHandler = (price, discount) => {
    const discountResult = price * (discount / 100);

    return Math.round(price - discountResult);
};
