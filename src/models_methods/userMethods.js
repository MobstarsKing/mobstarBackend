import * as dotenv from "dotenv";
import prisma from "../db.js";
dotenv.config();

export class User {
  // username eventually changes to ID at some point yah
  constructor(id = "") {
    this.id = id;
    this.prismaUser = "";
  }

  async fetchUser() {
    // reuse value if already called once
    // if (this.prismaUser) return this.prismaUser;

    this.prismaUser = await prisma.user.findUnique({
      where: {
        id: this.id,
      },
    });
    return this.prismaUser;
  }

  async doesExist() {
    let exists = false;
    if (await this.fetchUser()) exists = true;
    return exists;
  }

  async createNewUser(name, email, phoneNumber, topic, message) {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          phoneNumber,
          topic,
          message,
        },
      });
      this.id = user.id;
      this.prismaUser = user;
      return this;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
