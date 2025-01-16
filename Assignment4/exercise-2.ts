/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

export async function exercise2(): Promise<void> {
    console.log("Program started");
    const myFirstPromise = new Promise<Promise<string>>((resolve, reject) => {
        setTimeout(() => {
            resolve(
                new Promise<string>((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Step 2 complete");
                    }, 2000);
                }),
            );
        }, 2000);
    });

    console.log(myFirstPromise);
    console.log("Program in progress...");
    await myFirstPromise
        .then((mySecondPromise) => {
            console.log("Step 1 complete");
            return mySecondPromise;
        })
        .then((step2String) => {
            console.log(step2String);
        });
}
// we return the second promise and then this means the entire line of code can be .then'ed and you could do this many times if you really wanted
