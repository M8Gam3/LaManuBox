const objects = [
    {
        id: 0,
        name: "Chaise",
        cubic: 0.15,
        stackable: true,
    },
    {
        id: 1,
        name: "Table",
        cubic: 1.5,
        stackable: true,
    },
    {
        id: 2,
        name: "Table de nuit",
        cubic: 1.2,
        stackable: true,
    },
    {
        id: 3,
        name: "Canapé 3 places",
        cubic: 2.5,
        stackable: false,
    },
    {
        id: 4,
        name: "Fauteuil",
        cubic: 0.4,
        stackable: false,
    },
    {
        id: 5,
        name: "Tableau",
        cubic: 0.1,
        stackable: false,
    },
]

const boxs = [
    {
        name: "S",
        height: 2.5,
        squareMin: 0,
        squareMax: 3,
        cubic: 7.5,
        price: 50,
    },
    {
        name: "M",
        height: 2.5,
        squareMin: 3,
        squareMax: 6,
        cubic: 15,
        price: 80,
    },
    {
        name: "L",
        height: 2.5,
        squareMin: 6,
        squareMax: 10,
        cubic: 25,
        price: 140,
    },
    {
        name: "XL",
        height: 2.5,
        squareMin: 10,
        squareMax: 16,
        cubic: 40,
        price: 2,
    },
]

function addObjectById(id) {
    const object = objects.find(obj => obj.id === id);
    if (object) {
        objects_list.push(object);
    }
}

function removeObjectById(id) {
    const indexToRemove = objects_list.findIndex(obj => obj.id === id);
    if (indexToRemove !== -1) {
        objects_list.splice(indexToRemove, 1);
    }
}

function calculateCubic() {
    result = objects_list.reduce((total, element) => total + element.cubic, 0);
    console.log(result);
    const selectedBox = boxs.find(box => box.squareMax >= result);
    if (selectedBox) {
        const sBox = selectedBox.name;
    }
}
