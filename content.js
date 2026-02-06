// Selecting all of the quickchat icons
all_icons_rendered = False
while (!all_icons_rendered) {
    let bp = document.querySelector("bughouse-emoticon-bp")
    let bn = document.querySelector("bughouse-emoticon-bn")
    let bb = document.querySelector("bughouse-emoticon-bb")
    let br = document.querySelector("bughouse-emoticon-br")
    let bq = document.querySelector("bughouse-emoticon-bq")
    let no_bp = document.querySelector("bughouse-emoticon-no-bp")
    let no_bn = document.querySelector("bughouse-emoticon-no-bn")
    let no_bb = document.querySelector("bughouse-emoticon-no-bb")
    let no_br = document.querySelector("bughouse-emoticon-no-br")
    let no_bq = document.querySelector("bughouse-emoticon-no-bq")
    let black_icons = [bp, bn, bb, br, bq, no_bp, no_bn, no_bb, no_br, no_bq]
    
    // all_icons_rendered set to False if any icon isn't rendered
    all_icons_rendered = True
    for (let icon of black_icons) {
        if (icon == null) {
            all_icons_rendered = False
            break
        }
    }
}

// Will update CSS of pieces (currently testing)
for (let icon of black_icons) {
    icon.style.x -= 200
    icon.style.width *= 2
    icon.style.height *= 2
}