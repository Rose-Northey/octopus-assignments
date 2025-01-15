/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

//why do we put a Promise<string> type in here - shouldn't it just be a string?
export async function warmupExercise(): Promise<string> {
    console.log("Program started");
    const myPromise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Program complete");
        }, 3000);
    });

    const result = await myPromise.then((resolveOutput: string) => {
        return resolveOutput;
    });
    return result;
}

export async function warmupExercise2(): Promise<string> {
    console.log("Program started");

    const myPromise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Program complete");
        }, 3000);
    });

    console.log(myPromise);
    console.log("Program in progress...");

    const result = await myPromise; // Directly await the promise
    console.log(result); // Logs "Program complete"

    return result; // Returns the string "Program complete"
}

// resolve and reject are functions
// promise is an object
// All code runs on synchronously but async operations start a new sync thread
// new sync thread includes the waiting and also the function calls for resolve and reject
// code on old thread will contunue to run while new thread is doing its thing (waiting)
// JS under the hood is single threaded btw (but the above is technically correct for other programs like c# but it helps to imagine like this)
// whenever there's an await, it becomes and async function
// just creating the promise object is not async - but when we use myPromise.then, we have to await it and it becomes async

// export async function warmupExercise(): Promise<string> {
//     console.log("Program started");

//     const myPromise = new Promise((resolve: (stringVariable: string) => void, reject) => {
//         setTimeout(() => {
//             resolve("Program complete");
//         }, 3000);
//     });

//     let stringVariable = "";//
//     const result = await myPromise.then(
//         (resolveString: string) => {
//             stringVariable = resolveString;
//         },
//         () => {},
//     );
//     return stringVariable;
// }

// 1. The code first creates a promise executor. Within the executor code is what the promise is actually tryng to do,
// when the code calls resolve, this highlights that the happy path has been selected. resolve is a function,
// there is an argument of a string within the function
// 2. myPromise.then - this method takes two arguments, resolve and reject
