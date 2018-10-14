export default {
  connectionStringDev:
    process.env.MONGO_URI_DEV || "mongodb://localhost:27017/tableTennisDB",
  connectionStringProduction: process.env.MONGO_URI_PRODUCTION
};
