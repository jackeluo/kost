import { Service } from "../../../index";

export default class UserService extends Service {
  public username: string;
  public initedAt: Date;
  async getUser() {
    return {
      name: "Axetroy"
    };
  }
  async init() {
    this.username = "admin";

    this.initedAt = new Date();

    // do some job
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10);
    });
  }
}
