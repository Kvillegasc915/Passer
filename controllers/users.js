const { Transaction } = require('pg-mem')
const users = require('../services/users')

const getUser = async (req, res, next) => {
    const { pk_user } = req.params
    try {
        let user = await users.getUser(pk_user)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const createUser = async (req, res, next) => {
    const { pk_user, name } = req.body
    try {
        let user = users.createUser(pk_user, name)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const putUser = async (req, res, next) => {
    const { pk_user, name } = req.body
    try {
        let user = await users.putUser(pk_user, name)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const deleteUser = async (req, res, next) => {
    const { pk_user, name } = req.body
    try {
        let user = await users.deleteUser(pk_user, name)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const gettransaction = async (req, res, next) => {
    const { pk_transactions} = req.params
    try {
        let transacciones = await Transaction.gettransaction(pk_transactions)
        res.status(200).send(transacciones)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const posttransactions = async (req, res, next) => {
    const { pk_transactions,fk_user, description} = req.body
    try {
        let transacciones = Transaction.posttransactions(pk_transactions,fk_user, description)
        res.status(200).send(transacciones)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
const gettransactions = async (req, res, next) => {
    const { fk_user} = req.params
    try {
        let transacciones = await Transaction.gettransactions(fk_user)
        res.status(200).send(transacciones)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const puttransactions = async (req, res, next) => {
    const { pk_transactions,fk_user, description} = req.body
    try {
        let transacciones = await Transaction.puttransactions(pk_transactions,fk_user, description)
        res.status(200).send(transacciones)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    getUser,
    createUser,
    putUser,
    deleteUser,
    gettransaction,
    posttransactions,
    gettransactions,
    puttransactions
}