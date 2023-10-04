import axios from "axios";

const api = axios.create({
  // O correto é manter em uma variável de ambiente, porém como é uma API pública, não vejo necessidade.
  baseURL: "https://api.github.com/",
});

export { api };
