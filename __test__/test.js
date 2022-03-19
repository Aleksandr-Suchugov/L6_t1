import orderByProps from "../index.js";

test('should check that object propeties within values is sorted by requested propeties or in alphabet order', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const expectedArr = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    expect(orderByProps(obj, ["name", "level"])).toEqual(expectedArr);
});
