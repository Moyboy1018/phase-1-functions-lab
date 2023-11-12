// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return (blocks - 42);
    } else if (blocks < 42) {
        return (42 - blocks);
    }
}

function distanceFromHqInFeet(blocks) {
    let feet = (distanceFromHqInBlocks(blocks) * 264);
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    if ((start - destination) > 0) {
        return ((start - destination) * 264);
    } else if ((start - destination) < 0) {
        return ((destination - start) * 264);
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        let free = 0;
        return free;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        let cheap = ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
        return cheap;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        let flat = 25;
        return flat;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        let nope = 25;
        return 'cannot travel that far';
    }
}