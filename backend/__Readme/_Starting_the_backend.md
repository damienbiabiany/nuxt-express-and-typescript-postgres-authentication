# tuto link

https://github.com/mohammadali0120/nuxt-express-and-typescript-postgres-authentication/tree/main/backend

## Installing dependencies (Back end)

1) cmd ou open terminal à la racine du Back End
2) delete package-lock.json
3) npm install
4) Install these dependencies locally
    npm i ts-node typescript

5) Refactoring package.json file

Replace "start": "nodemon ./dist/index.js"  by  "start": "nodemon ./src/index.ts",

## Establish the connection with the local postgreSQL database

6) Inside the .env file

PORT=8080
DB_NAME="testdb"
DB_USER="postgres"
DB_PASSWORD="dbiaelflor123"
DB_HOST="localhost:5432"

## Launch the backend

npm start

## If the connection with database is all good

Server is running on port 8080

Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users'
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'users' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'refreshTokens'
Executing (default): CREATE TABLE IF NOT EXISTS "refreshTokens" ("id"   SERIAL , "token" VARCHAR(255), "expiryDate" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" INTEGER REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("id"));
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'refreshTokens' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

## Open pgAdmin 4

Super user mot de passe:

lnabiaflorcarladb18

## pgAdmin 4: Use the query tool to search inside the tables previously created

Go to Servers > PostregreSQL 15 > Databases (X) > testdb > Clic-droit > Query Tool

We initialize the creation of the tables inside of the selected database (inside the following file):

    .\nuxt-express-and-typescript-postgres-authentication-main\backend\src\app\models\user.model.ts

    const User = db.define<UserInstance>("user2", {
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    export default User;

## Some important details from the backend and the postgreSQL connexion and CRUD system

WARNING - IF A TABLE OF THE NAME USER ALREADY EXIST, ALL THE FOLLOWING FIELD WON'T BE CREATED

Will be add a s after the name of table giveb ==> user2

Go to Servers > PostregreSQL 15 > Databases (X) > testdb > Clic-droit > Query Tool

SQL QUERY ==> SELECT * FROM public.user2s

You can see the new user created from the front end (nuxt)

## Assure that the refreshTokens table containsn the right foreign key for the tables user2s

If not delete the table and recreate in relauching the backend server

## If everything is ok

You will see the page ==> You're in home page
