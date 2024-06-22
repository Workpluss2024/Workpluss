declare module 'react-web-vector-icons' {

    export default function Icon({ name, size, color, font }: icon): any;
}


interface icon {
    name: string,
    size: number,
    color: string,
    font: string,
}