import { Boss } from "./Models/Boss.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Boss').Boss[]} */
  bosses = [
    new Boss({ name: 'CodeMan', stage: 'assets/img/codeman.gif', life: -10 }),
    new Boss({ name: 'ErrorMan', stage: 'assets/img/errorman.jpg' }),
    new Boss({ name: 'JavaMan', stage: 'assets/img/javaman.webp' }),
    new Boss({ name: 'ScrumMan', stage: 'assets/img/scrumman.png' }),
    new Boss({ name: 'SpaceMan', stage: 'assets/img/spaceman.gif' }),
    new Boss({ name: 'TrashMan', stage: 'assets/img/trashman.jpg', life: -10 })
  ]

  currentBoss = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
