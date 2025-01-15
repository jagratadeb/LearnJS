// Define a function that simulates an asynchronous operation using a Promise
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = 0; // This is just a placeholder for your actual condition

            if (success) {
                resolve("Operation was successful!");
            } else {
                reject("Operation failed.");
            }
        }, 2500); // 2.5-second delay
    });
}

// Handling the async operation using async/await
async function handleAsyncOperation() {
    try {
        let message = await asyncOperation();
        console.log(message); // Output: Operation was successful!
    } catch (error) {
        console.error(error); // Output: Operation failed.
    }
}

handleAsyncOperation();

// This code defines an asyncOperation function that returns a Promise. The handleAsyncOperation function is an async function that uses await to wait for the asyncOperation to complete. If the operation is successful, it logs the success message; otherwise, it catches and logs the error message.
