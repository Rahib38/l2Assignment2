import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.database_url as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  try {
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
