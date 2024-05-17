import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb://localhost/task-manager-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};
