'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => {
      let itemsArray = []
      const userItems = db.itemsOfUserByUsername
      for (const key in userItems) {
        itemsArray.push(...userItems[key])
       }
    
      return [...new Set(itemsArray)];
    };
    return mockDBCall(dataAccessMethod);
  };

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        const users = Object.entries(db.itemsOfUserByUsername).map(([key, value]) => {
            if (value.includes(item)) return key
            })
        // fill me in :)

    const usersById = db.usersById;
    const arr = []
    let i = 0

    for (const key in usersById) {
    
      if( users.includes(usersById[key].username) ) {
        
        if(i>0 && (arr[i-1].age === usersById[key].age))  arr[i-1].count++
        else{
          arr.push({"age":usersById[key].age,"count": 1})
          i++
        }
      }
    }

    return arr
    };
    return mockDBCall(dataAccessMethod);
};

module.exports = {
    getUsers,
    getItems,
    getListOfAgesOfUsersWith,
};
