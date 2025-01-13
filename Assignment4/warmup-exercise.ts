/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

export async function warmupExercise(): Promise<string> {
    console.log("Program started");

    const myPromise = new Promise((resolve: (stringVariable: string) => void, reject) => {
        setTimeout(() => {
            resolve("Program complete");
        }, 3000);
    });

    let stringVariable = "";
    const result = await myPromise.then(
        (resolveString: string) => {
            stringVariable = resolveString;
        },
        () => {},
    );
    return stringVariable;
}

// resolve and reject are functions
// promise is an object
// All code runs on synchronously but async operations start a new sync thread
// new sync thread includes the waiting and also the function calls for resolve and reject
// code on old thread will contunue to run while new thread is doing its thing (waiting)
// JS under the hood is single threaded btw (but the above is technically correct for other programs like c# but it helps to imagine like this)
// whenever there's an await, it becomes and async function
// just creating the promise object is not async - but when we use myPromise.then, we have to await it and it becomes async
