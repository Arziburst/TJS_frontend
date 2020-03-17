export const arrayСomparison = (arrayOfStrings, checkedArray) => checkedArray.reduce((acc, string) => {
    let temp = {};
    const isStringExistInArrayOfStrings = arrayOfStrings.includes(string);

    if (acc.isAllStringsExists && !isStringExistInArrayOfStrings) {
        temp = { ...temp, isAllStringsExists: false };
    }

    if (isStringExistInArrayOfStrings) {
        temp = { ...temp, newArray: [ ...acc.newArray, string ] };
    }

    return { ...acc, ...temp };
}, { isAllStringsExists: true, newArray: [] });
