const CracklePop = () => {
    let i = 1;  // Start with i as number 1.
    while (i < 101) { // While Loop from 1 to 100.
        if (i % 15 == 0) {
            // Is i divisible by 15?
            console.log("CracklePop");
        } else if (i % 3 == 0) {
            // Is i divisible by 3?
            console.log("Crackle");
        } else if (i % 5 == 0) {
            // is i divisible by 5
            console.log("Pop");
        } else {
            console.log(i);
        }
        i++; // Increment i each pass of the loop 
    }
};

CracklePop();











