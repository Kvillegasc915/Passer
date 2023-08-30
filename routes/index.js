const express = require('express')

const { users } = require('../controllers')
const { Transaction } = require('pg-mem')

const router = express.Router()

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.putUser)
    .delete('/users/:pk_user', users.deleteUser)
    .get('/users/:pk_transactions', Transaction.gettransaction)
    .post('/users/', Transaction.posttransactions)
    .get('/users/:pk_transactions', Transaction.gettransactions)
    .put('/users/:pk_transactions', Transaction.puttransactions)
module.exports = router