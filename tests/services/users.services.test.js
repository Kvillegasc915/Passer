const { Transaction } = require('pg-mem');
const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 5, name: "Carlos"}', async () => {
        let user = await users.createUser(5, "Carlos");
        expect(user.pk_user).toBe(5);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    // putUser function test
    test('putUser with {pk_user: 123}', async () => {
        let user = await users.putUser(123)
        expect(user.pk_user).toBe(123);
    });

    // deleteUser function test
    test('deleteUser with {pk_user: 123}', async () => {
        let user = await users.deleteUser(123)
        expect(user.pk_user).toBe(123);
    });

    // gettransaction function test
    test('gettransaction with {pk_transactions: 555, fk_user: 222, description: "compras", amount: 2.5}', async () => {
        let transacciones = await Transaction.gettransaction(555, 222, 'compras', 2.5);
        expect(transacciones.pk_transactions).toBe(555);
    });

     // Posttransactions function test
     test('createtransactions with {pk_transactions: 555, fk_user: 222, description: "compras", amount: 2.5}', async () => {
        let transacciones = await Transaction.createUser(555, 222, 'compras', 2.5);
        expect(transacciones.pk_transactions).toBe(555);
    });
        // gettransactions function test
        test('gettransactions with {pk_transactions: 555, fk_user: 222, description: "compras", amount: 2.5}', async () => {
            let transacciones = await Transaction.gettransactions(555, 222, 'compras', 2.5);
            expect(transacciones.fk_user).toBe(555);
        });

    // puttransactions function test
    test('puttransactions with {pk_transactions: 555, fk_user: 222, description: "compras", amount: 2.5}', async () => {
        let transacciones = await Transaction. posttransactions(555, 222, 'compras', 2.5);
        expect(transacciones.pk_transactions).toBe(555);
    });

})