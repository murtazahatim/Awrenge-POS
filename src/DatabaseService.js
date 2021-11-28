import {
  addPouchPlugin,
  addRxPlugin,
  createRxDatabase,
  getRxStoragePouch,
  removeRxDatabase,
} from "rxdb";
import { mealInventorySchema, orderInventorySchema } from "./Schema";
import { RxDBLeaderElectionPlugin } from "rxdb/plugins/leader-election";
import { RxDBReplicationCouchDBPlugin } from "rxdb/plugins/replication-couchdb";
import { RxDBNoValidatePlugin } from "rxdb/plugins/no-validate";

const md5 = require("blueimp-md5");
addPouchPlugin(require("pouchdb-adapter-idb"));
addPouchPlugin(require("pouchdb-adapter-http"));
addRxPlugin(RxDBLeaderElectionPlugin);
addRxPlugin(RxDBReplicationCouchDBPlugin);
addRxPlugin(RxDBNoValidatePlugin);

const syncURL = "http://localhost:5984/";
let dbNamePrefix = "awrangedb";

let dbPromise = null;

const _create = async (userDetails) => {
  //removeRxDatabase(dbName, getRxStoragePouch("idb"));

  let dbName = dbNamePrefix + md5(userDetails.sub);
  console.log("DBNAME");
  console.log(dbName);

  const db = await createRxDatabase({
    name: dbName,
    storage: getRxStoragePouch("idb"),
    ignoreDuplicate: true,
  });

  console.log("DatabaseService: created database");
  console.log(db);

  db.waitForLeadership().then(() => {
    document.title = "♛ " + document.title;
  });

  console.log("DatabaseService: create collections");
  await db.addCollections({
    meals: {
      schema: mealInventorySchema,
    },
    orders: {
      schema: orderInventorySchema,
    },
  });

  console.log("DatabaseService: sync");
  Object.values(db.collections)
    .map((col) => col.name)
    .map((colName) =>
      db[colName].syncCouchDB({
        remote: syncURL + colName + md5(userDetails.sub) + "/",
        options: {
          live: true,
          retry: true,
        },
      })
    );

  return db;
};

export const get = (userDetails) => {
  if (!dbPromise) dbPromise = _create(userDetails);
  return dbPromise;
};
