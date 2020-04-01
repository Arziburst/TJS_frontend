type Result = {
    isAllStringsExists: boolean,
    newArray: string[]
}

type ArrayСomparison = (arrayOfStrings: string[], checkedArray: string[]) => Result;

export const arrayСomparison: ArrayСomparison = (arrayOfStrings, checkedArray) => checkedArray.reduce((acc, string) => {
    let temp = {};
    const isStringExistInArrayOfStrings = arrayOfStrings.includes(string);

    if (acc.isAllStringsExists && !isStringExistInArrayOfStrings) {
        temp = { ...temp, isAllStringsExists: false };
    }

    if (isStringExistInArrayOfStrings) {
        temp = { ...temp, newArray: [ ...acc.newArray, string ] };
    }

    return { ...acc, ...temp };
}, <Result>{ isAllStringsExists: true, newArray: [] });
