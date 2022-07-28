input.onButtonPressed(Button.A, function () {
    makerbit.clearLcd1602()
    makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `))
    makerbit.lcdMakeCharacter(LcdChar.c2, makerbit.lcdCharacterPixels(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `))
})
loops.everyInterval(60000, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("staff", makerbit.position1602(LcdPosition1602.Pos1), 5)
    makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `))
})
loops.everyInterval(120000, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        . . . . .
        # . . . #
        # # # # #
        `)
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("Ask me for help", makerbit.position1602(LcdPosition1602.Pos1), 15, TextOption.AlignLeft)
    makerbit.showStringOnLcd1602("welcome to Expo!", makerbit.position1602(LcdPosition1602.Pos17), 16, TextOption.AlignLeft)
})
