OLED.init(128, 64)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        OLED.writeNumNewLine(index)
        basic.pause(1000)
        OLED.clear()
    }
})
