'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const itemToLookup = request.query.item;
    console.log(itemToLookup)
    try {
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        return response.status(200).send(JSON.stringify(data));
    } catch (error) {
        return response.status(400).json({ error: error.toString() });
    }
   
    
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
