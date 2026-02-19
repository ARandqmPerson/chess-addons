console.log("test 1")

let count = 0
let black_icons = [];
// Select all elements to modify, updates every 100 ms until all rendered or 10 seconds pass
const selectElements = setInterval(() => {
    count += 1

    // Testing vvv
    let sidebar = document.querySelector(".board-layout-sidebar")
    let chat_box = document.querySelector(".resizable-chat-area-component")
    chat_box.style.transform = "scale(2)"
    sidebar.style.transform = "translateX(100px)"
    console.log("Testing")
    // Testing ^^^

    let bp = document.querySelector(".bughouse-emoticon-bp");
    let bn = document.querySelector(".bughouse-emoticon-bn");
    let bb = document.querySelector(".bughouse-emoticon-bb");
    let br = document.querySelector(".bughouse-emoticon-br");
    let bq = document.querySelector(".bughouse-emoticon-bq");
    let no_bp = document.querySelector(".bughouse-emoticon-no-bp");
    let no_bn = document.querySelector(".bughouse-emoticon-no-bn");
    let no_bb = document.querySelector(".bughouse-emoticon-no-bb");
    let no_br = document.querySelector(".bughouse-emoticon-no-br");
    let no_bq = document.querySelector(".bughouse-emoticon-no-bq");

    black_icons = [bp, bn, bb, br, bq, no_bp, no_bn, no_bb, no_br, no_bq];

    all_elements = []
    all_elements += black_icons
    all_elements += chat_box

    // If any element isn't rendered, allRendered set to false
    let allRendered = true
    for (let element of all_elements) {
        if (element === null) {
            allRendered = false;
            break;
        }
    }

    if (allRendered || count >= 100) {
        clearInterval(selectElements);

        // Update CSS for icons
        for (let icon of black_icons) {
            icon.style.transform = "translateX(-200px) scale(2)";
        }

        chat_box.style.transform = "scale(2)"
    }
}, 100);