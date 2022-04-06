import { ProxyState } from "../AppState.js"
import { Boss } from "../Models/Boss.js"
import { bossService } from "../Services/BossService.js"

function _drawBossLevel() {

  // WAIT FULL STOP IF ????
  // if (ProxyState.currentBoss == null) { return } REVIEW - 
  if (!(ProxyState.currentBoss instanceof Boss)) {
    return
  }

  let stageBg = `background-image: url(${ProxyState.currentBoss.stage});`

  document.getElementById('stage').innerHTML = `
    <div class="boss-bg" style="${stageBg}">
      <button onclick="app.bossController.stopFighting()">✌️</button>
    </div>
  `

  console.log('doing a thing')
}

export class BossController {
  // IF I want to do something when this loads you need a constructor
  constructor() {
    ProxyState.on('currentBoss', _drawBossLevel)
  }

  stopFighting() {
    console.log('stop fighting')
    bossService.setCurrentBoss(null)
  }

}



