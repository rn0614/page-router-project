var maria = require("mysql");

export function queryCreate() {
  let client = maria.createConnection({
    host: process.env.DB_HOST,
    post: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  return client;
}


export async function queryProcess(query, params, client) {
  return new Promise((resolve, reject) => {
    client.query(query, params, function (err, result) {
      client.end();
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const data = JSON.parse(JSON.stringify(result));
        resolve(data);
      }
    });
  });
}