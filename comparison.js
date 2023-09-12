export async function comparison(subscriberCount, version) {
    var V6,
        V5,
        V4,
        V7,
        plan
    let res = await fetch('./data/V6-3.json')
    V6 = await res.json();
    res = await fetch('./data/V5-3.json')
    V5 = await res.json();
    res = await fetch('./data/V4-3.json')
    V4 = await res.json();
    res = await fetch('./data/V7-3.json')
    V7 = await res.json();
    let oldMax = "0",
        i = 0,
        middle

    let low = 0
    switch (version.toString()) {
        case 'V4':
            version = V4
            break;
        case 'V5':
            version = V5
            break;
        case 'V6':
            version = V6
            break;
        case 'V7':
            version = V7
            break;
        default:
    }

    let high = Math.floor((Object.keys(version).length) - 1)
    console.log(version, subscriberCount.toString())

    while (i < 13) {
        console.log("high" + high)
        middle = Math.floor((high + low) / 2)

        console.log("current min " + intConvert(version[middle].Min))
        if (subscriberCount < 1) {
            subscriberCount = 0
        } else if (parseInt(subscriberCount) >= intConvert(version[middle].Min) && parseInt(subscriberCount) <= intConvert(version[middle].Max)) {
            console.log("First exit")
            return version[middle]
        } else if (parseInt(subscriberCount) < intConvert(version[middle].Max)) {
            high = middle - 1
            console.log("Lower")

        } else if (parseInt(subscriberCount) > intConvert(version[middle].Max)) {
            low = middle + 1
            console.log("Higher")
        } else {
            console.log("Nothing happens")
        }
        i = i + 1
    }

}


function intConvert(count) {
    console.log(count)
    let result = count.replace(/,/g, '')

    return parseInt(result)
}