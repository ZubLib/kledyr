input.onButtonPressed(Button.A, function () {
    Sult += -1
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showIcon(IconNames.House)
    if (Sult > 10) {
        Sult = 10
        basic.showIcon(IconNames.Sad)
        Lykke += -1
    }
    if (Sult < 0) {
        Sult = 0
        Lykke += 1
    }
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Sult" + " " + Sult + "  " + "Lykke" + " " + Lykke)
})
input.onButtonPressed(Button.B, function () {
    Lykke += 1
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.House)
    if (Lykke < 0) {
        Lykke = 0
        basic.showIcon(IconNames.Skull)
    }
    if (Lykke > 10) {
        Lykke = 10
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(200)
})
let Sult = 0
let Lykke = 0
basic.showIcon(IconNames.House)
Lykke = 5
Sult = 0
loops.everyInterval(60000, function () {
    Sult += 1
})
