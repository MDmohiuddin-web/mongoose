import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();
// use cors
app.use(cors());

// use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   res.send("mongoose-pectic");
  // insert a test data in database

  /* 
step 1:interface
step 2: schema
step 3: model
step 4: db query

*/
  interface IUser {
    id: string;

    role: "student";
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth: string;
    email?: string;
    gender: "male" | "female";
    contactNumber: string;
    emergencyContactNumber: string;
    address: {
      presentAddress: string;
      permanentAddress: string;
    };
  }

  const userSchema = new Schema<IUser>({
    id: { type: String, required: true,unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: { firstName: { type: String, required: true }, lastName: { type: String, required: true } },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    address: { presentAddress: { type: String, required: true }, permanentAddress: { type: String, required: true } },

  });
});

// creating schema  using interface

export default app;

