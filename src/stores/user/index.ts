import { defineStore } from "pinia";
import type { UserType } from "./types";
import { ImitateHttp } from "@/utils";

const userStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserType | null,
  }),
  actions: {
    setUser(user: UserType) {
      this.userInfo = user;
      localStorage.setItem("login_user", JSON.stringify(user));
    },
    register(form: UserType) {
      return ImitateHttp((s, f) => {
        if (form.phone && form.phone.length >= 4) {
          form.user_id = parseInt(form.phone.slice(-4), 10); // Generate user_id based on phone number
          localStorage.setItem("regis_user", JSON.stringify(form));
          s("ok");
        } else {
          f("Invalid phone number");
        }
      });
    },
    login(form: UserType) {
      return ImitateHttp((s, f) => {
        const regis = localStorage.getItem("regis_user");
        if (!regis) {
          f("User not registered");
        } else {
          const user: UserType = JSON.parse(regis);
          if (user.phone === form.phone && user.password === form.password) {
            this.setUser(user);
            s("login success");
          } else {
            f("Incorrect phone or password");
          }
        }
      });
    },
  },
});

export { userStore };
