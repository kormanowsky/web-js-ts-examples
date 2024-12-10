type WonderfulString = string;

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type SpecialRecordType = {
    digits: Digit[];
    wonder: WonderfulString;
}

interface IRunnable {
    run(): void;
}

function digitAdder(digits: Digit[]): number {
    let total = 0;
    for(const digit of digits) {
        total += digit;
    }

    return total;
}

class Camera {
    constructor(position: {x: number; y: number}) {
        this.position = position;
    }

    getX(): number {
        return this.position.x;
    }

    get x(): number {
        return this.position.x;
    }

    protected getPosition(): {x: number; y: number} {
        return this.position;
    }

    protected setPosition(newPosition: {x: number; y: number}): void {
        this.position = newPosition;
    }

    private position: {x: number; y: number};
}

// Ошибка 
//const cam1 = new Camera();

// Ошибка
const cam2 = new Camera({x: 0, y: 0});
//cam2.position = {x: 1, y: 1};

class RunningCamera extends Camera implements IRunnable {
    run(): void {
        for(let i = 0; i < 1e5; ++i) {
            console.log(`Camera is running on position: ${this.getPosition()}`);

            this.setPosition({x: 10*i, y: 5*i});
        }
    }
}
