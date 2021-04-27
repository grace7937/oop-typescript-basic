let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";        //String
color = 'red';

	
let list: number[] = [1, 2, 3];   //Array


let x: [string, number];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;


let notSure: any = 4;
notSure = "maybe a string instead";

function warnUser(): void {
    alert("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);


declare function create(o: object | null): void;
