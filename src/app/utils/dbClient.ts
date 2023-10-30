//this should can also be in a utils folder helps in creating an instance of prisma to interact with DB

import { Prisma, PrismaClient } from "@prisma/client";

// import Logger from "./Logger";

// const logger = Logger.create(import.meta.url);

// We put the PrismaClient instance in the global context to prevent
// hot-reloading on API routes from creating new instances per request.
// See https://github.com/prisma/prisma/issues/5007#issuecomment-618433162
declare global {
  // eslint-disable-next-line no-var -- ESLint flags this incorrectly
  var dbClient: PrismaClient;
}
let dbClient: PrismaClient;

const createDbClient = () => {
  const prisma = new PrismaClient({
    // We route all logging through our own Logger
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  });

  // For adding tracing see https://medium.com/@lucas_18321/how-to-trace-sql-queries-in-prisma-with-xray-sdk-in-nodejs-8c6dc92df07f
  // prisma.$on("query", async (event: Prisma.QueryEvent) => {
  //   logger.debug("Query", { sql: event.query, params: event.params });
  // });

  return prisma;
};

if (process.env.NODE_ENV !== "development") {
  dbClient = createDbClient();
} else {
  if (!global.dbClient) {
    global.dbClient = createDbClient();
  }
  dbClient = global.dbClient;
}

export default dbClient;