const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (acc, item) => {
    let totalBatteries = acc += item
    return totalBatteries
}

let totalBatteries = batteryBatches.reduce(reducer, 0)