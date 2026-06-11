import { http } from "../plugins/Axios";

export const repositoryService = {
  getUserRepositories: async () => {
    return http.get("users/adenugatani/repos?per_page=52");
  },
  getSingleRepository: async (name) => {
    return http.get(`repos/adenugatani/${name}`);
  },
};
