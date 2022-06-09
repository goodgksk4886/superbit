radio.onReceivedString(function (receivedString) {
    if (receivedString == "Left") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedString == "Right") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        0
        )
    } else if (receivedString == "Forward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedString == "Backward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M3,
        -100
        )
    } else {
        SuperBit.MotorStopAll()
    }
})
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P4, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showIcon(IconNames.Happy)
