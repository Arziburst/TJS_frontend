type T = (price: number, discount: number) => number;

export const discountHandler: T = (price, discount) => {
    const discountResult = price * (discount / 100);

    return Math.round(price - discountResult);
};
