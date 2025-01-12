import { defineStore } from "pinia";
import type { UserType } from "./types";
const userStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserType | null,
  }),
});
export default userStore;
