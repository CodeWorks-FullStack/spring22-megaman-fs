import { ProxyState } from "../AppState.js"
import { bossService } from "../Services/BossService.js"

function _drawBossMenu() {
  // REVIEW if the boss is null draw the menu 
  if (ProxyState.currentBoss !== null) {
    return 
  }
  console.log('did this happen')
  let bossesTemplate = ''
  ProxyState.bosses.forEach(boss => bossesTemplate += boss.BossSelectTemplate)
  document.getElementById('stage').innerHTML = `
    <div class="container">
      <div class="d-flex flex-wrap p-lg-5">
        ${bossesTemplate}
      </div>
    </div>
  `
}

export class BossMenuController {
  // IF I want to do something when this loads you need a constructor
  constructor() {
    console.log('hello is this thing on????')
    ProxyState.on('currentBoss', _drawBossMenu)
    _drawBossMenu()
  }

  select(bossId) {
    console.log('did this work', { bossId })
    bossService.setCurrentBoss(bossId)
  }


}



