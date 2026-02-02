/*
    Project Name: truthCheck
    Author: Arjun Roy 
    Description: Checking all truthy values of provided property of each object
    Date: 02-02-2036
*/

const truthCheck = (collection, pre) => {
    return collection.every(element => {
        return element[pre];
    });
};
