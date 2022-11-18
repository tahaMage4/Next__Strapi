const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "strapidb"),
//       username: env("DATABASE_USERNAME", "root"),
//       password: env("DATABASE_PASSWORD", "admin"),
//       schema: env("DATABASE_SCHEMA", "public"),
//       ssl: { rejectUnauthorized: false },
//     },
//     // options: {
//     //   useNullAsDefault: true,
//     // },
//   },
// });
