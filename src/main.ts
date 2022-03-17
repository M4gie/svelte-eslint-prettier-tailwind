import App from "./App.svelte";
import "./style/app.css";

let salut;

const app = new App({
  target: document.getElementById("app"),
});

export default app;
