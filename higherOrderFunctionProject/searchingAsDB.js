/*
    Project Name: Filterring some objects from a array by another obejcts.
    Author: Arjun Roy 
    Description: Fikterring a objrct from an array eith a payload which can be with one key or muli-key object
    Date: 01-02-2036
*/

const whatIsInAName = (catalog, payload) => {
    const payloadKeys = Object.keys(payload);

    const filteredCatalog = catalog.filter(obj => {
        const isAllValid = payloadKeys.map(payloadKey => {
            return (
                Object.keys(obj).includes(payloadKey) &&
                payload[payloadKey] === obj[payloadKey]
            );
        });

        return isAllValid.includes(false) ? false : true;
    });

    return filteredCatalog;
};