const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);

const backup =postgresql.backup();
postgresql.public.none(`update users set name='Pablo';`);

backup.restore();
postgresql.public.many(`select * from users`);


// 
postgresql.public.none(`create table transacciones(pk_transaction number,fk_user number , description string, amount float);
                insert into users values (555,222,"compras",2.5);`);

const backups =postgresql.backup();
postgresql.public.none(`update transacciones set description='Compras';`);

backups.restore();
postgresql.public.many(`select * from transacciones`);

//
module.exports = {
    postgresql
}

