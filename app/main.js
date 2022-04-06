import { BossController } from "./Controllers/BossController.js";
import { BossMenuController } from "./Controllers/BossMenuController.js";

class App {
  bossMenuController = new BossMenuController()
  bossController = new BossController()
}

window["app"] = new App();
