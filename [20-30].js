console.log("Heiii")
let Bike = {
    brand: "Yamaha",
    model: "R15 V4",
    price: 500000,              // in local currency (e.g., BDT or INR)
    engine: "155cc Liquid-Cooled",
    mileage: "45 km/l",
    color: "Racing Blue",
    topSpeed: "140 km/h",
    weight: "142 kg",
    fuelCapacity: "11 L",
    transmission: "6-Speed Manual",
    brakeType: {
        front: "Disc with ABS",
        rear: "Disc"
    },
    features: [
        "LED Headlight",
        "Digital Instrument Cluster",
        "Dual Channel ABS",
        "Assist and Slipper Clutch"
    ],
    isAvailable: true,
    year: 2025,
    getSummary: function () {
        return `${this.brand} ${this.model} (${this.year}) costs ${this.price} and has a top speed of ${this.topSpeed}.`;
    }
};

console.log(Bike.getSummary());
