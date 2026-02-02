/*
    Project Name: flattening array in depth
    Author: Arjun Roy 
    Description: flattening provided array with multiple depth sub array to a single array
    Date: 02-02-2036
*/
const steamRollArray = sourceArray => {
    const flattenedArray = [];

    sourceArray.forEach(element => {
        if (Array.isArray(element)) {
            const subArr = steamRollArray(element);
            flattenedArray.push(...subArr);
        } else {
            flattenedArray.push(element);
        }
    });
    return flattenedArray;
};
