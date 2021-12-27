type Age = number;
type Person = {
    name: string;
    age: Age;
    preferColor?: string;
}

type RGBColor = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type PreferredColor = RGBColor | CMYKColor;

const person4: Person = {
    age: 2902,
    name: 'leo',
};

export function setPreferredColor(person4: Person, color: PreferredColor): Person {
    return { ...person4, preferColor: color };
}

console.log(setPreferredColor(
    person4, 'Red'
))