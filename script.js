async function typing(text, elementId, delay = 100) {
    const sentence = text.split("")

    for (let i = 0; i < sentence.length; i++) {
        await waitForMs(delay);
        if (sentence[i] == '?') {
            $(elementId).append("<br>")
            continue
        }
        $(elementId).append(sentence[i])

    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}