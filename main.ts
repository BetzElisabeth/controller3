radio.onReceivedString(function (receivedString) {
    let mittel = ""
    let leicht = ""
    let receivedsteing = ""
    if (receivedsteing == spielen) {
        spielphase = spielen
    } else if (receivedsteing == leicht) {
        schwirigkeit = 1
    } else if (receivedsteing == mittel) {
    	
    } else {
    	
    }
})
let spielen = ""
let schwirigkeit = 0
let spielphase = ""
radio.setGroup(3)
spielphase = "warten"
schwirigkeit = 1
let platzhalter = input.acceleration(Dimension.X)
basic.forever(function () {
    if (spielphase == "warten") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (spielphase == spielen) {
    	
    }
})
