// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name ,health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        super.receiveDamage(damage)

        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }

        if(this.health<= 0){
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        super.receiveDamage(damage)

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }

        if(this.health<= 0){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }


    addViking(vikObj){
        this.vikingArmy.push(vikObj)
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex]
        const randomSaxon = this.saxonArmy[randomSaxonIndex]

        const result = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }

        return result

    }


    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex]
        const randomSaxon = this.saxonArmy[randomSaxonIndex]

        const result = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }

        return result
    }


    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }

        if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }

        else{
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}



