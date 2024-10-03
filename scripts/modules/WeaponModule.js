
const WeaponModule = () => {
    const weapons = [
        {
            id: 7,
            name: "cannon",
            price: 2,
            image: "cannon.png"
        },
        {
            id: 8,
            name: "catapult",
            price: 200,
            image: "catapult.png"
        },
        {
            id: 9,
            name: "elephant",
            price: 500,
            image: "elephant.png"
        },
        {
            id: 10,
            name: "horse",
            price: 150,
            image: "horse.png"
        }
    ];

    const getWeapons = () => {
        return structuredClone(weapons);
    };

    return {
        getWeapons
    };
};

export default WeaponModule;
