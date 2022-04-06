export class Boss {
  constructor(data) {
    this.id = data.id || (`fdsa-${Math.floor(Math.random() * 5000)}-sdfaslkdjlf`)
    this.name = data.name
    this.stage = data.stage
    this.life = data.life || 100
  }

  get isDead() {
    return this.life <= 0
  }

  damage(amount) {
    if (this.isDead) { // always handle the out conditions first
      return // full stop  
    }
    this.life -= amount
    this.life = this.life < 0 ? 0 : this.life // clamp life at 0
  }

  get BossSelectTemplate() {

    let clickable = this.isDead ? '' : `onclick="app.bossMenuController.select('${this.id}')"`

    return /*html*/`
    <div class="boss-container m-3 ${this.isDead ? 'dead' : ''}" title="${this.name}"  ${clickable} >
      <img src="https://robohash.org/${this.name}" alt="${this.name}" />
      <div class="highlight-box ts"></div>
      <div class="highlight-box te"></div>
      <div class="highlight-box bs"></div>
      <div class="highlight-box be"></div>
    </div>
    `
  }

}