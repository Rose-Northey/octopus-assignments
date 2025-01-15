/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

export async function exercise1(): Promise<string> {
    console.log("Program started");
    const myPromise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Program complete");
        }, 3000);
        setTimeout(() => {
            reject("Program failure");
        }, 2000);
    });
    console.log(myPromise);
    console.log("Program in progress...");
    const result = await myPromise.then((resolveMessage: string) => resolveMessage).catch((rejectMessage: string) => rejectMessage);
    return result;
}
