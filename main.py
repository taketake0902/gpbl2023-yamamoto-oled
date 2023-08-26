OLED.init(128, 64)

def on_forever():
    for index in range(5):
        OLED.write_num_new_line(index)
        basic.pause(1000)
        OLED.clear()
basic.forever(on_forever)
