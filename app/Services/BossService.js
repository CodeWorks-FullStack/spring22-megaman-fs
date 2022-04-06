import { ProxyState } from "../AppState.js";

class BossService {
  setCurrentBoss(bossId) {
    ProxyState.currentBoss = ProxyState.bosses.find(boss => boss.id == bossId) || null
  }
}

// REVIEW singleton pattern
export const bossService = new BossService()