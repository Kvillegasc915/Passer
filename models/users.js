const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1,name: "Juan"}}
 */
const createUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const updateUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}', status`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}


/**
 * Get an espcific transactions
 *@param {number} pk_transactions transaction id
 * @param {string} description User description 
 * @returns {{pk_transactions: 555, description: "compras"}}
 */
const gettransaction = (pk_transactions) => {

    let transacciones = postgresql.public.one(`select * from Transaction where pk_transactions = '${pk_transactions}',${description}',`);
    return transacciones
}

/**
 * Update an specific transaction
 * @param {number} pk_transactions transaction id
 * @param {number} fk_user number
 * @param {string} description User description 
 * @param {float} amount float
 * @returns {{pk_transactions: 555, fk_user:  222, description: "compras", amount: 2.5}}
 */
const posttransactions = (pk_transactions, fk_user, description, amount) => {
    try {
        let transacciones = postgresql.public.one(`insert into Transaction values ('${pk_transactions}',${fk_user}', '${description}','${amount}') returning *;`);
        return transacciones
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an espcific transactions
 * @param {number} fk_user number
 * @param {string} description User description 
 * @returns {{pk_transactions: 555, description: "compras"}}
 */
 const gettransactions = (fk_user,description) => {

    let transacciones = postgresql.public.one(`select * from Transaction where pk_transactions = '${fk_user}',${description}',`);
    return transacciones
}

/**
 * Put an specific transaction
 * @param {number} pk_transactions transaction id
 * @param {number} fk_user number
 * @param {string} description User description 
 * @param {float} amount float
 * @returns {{pk_transactions: 555, fk_user:  222, description: "compras", amount: 2.5}}
 */
const puttransactions = (pk_transactions, fk_user, description, amount) => {
    try {
        let transacciones = postgresql.public.one(`insert into Transaction values ('${pk_transactions}',${fk_user}', '${description}','${amount}') returning *;`);
        return transacciones
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    gettransaction,
    posttransactions,
    gettransactions,
    puttransactions,
 

}

