const simple_reducer = require('../simple_reducer');

module.exports = array_set = (key) => (obj) => simple_reducer(key, (state, action) => {
        const newArr = obj(state,action);
        if(!Array.isArray(newArr)){
            throw new Error('Redux_utils error: array_set must return an array');
        }
        //The user modified the original array state
        if(newArr === state){
            throw new Error('Redux_utils error: original array was returned from array_set, please make sure you copy the state.')
        }
        return newArr;
});