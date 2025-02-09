// Async/Await in JavaScript

// Function returning a promise
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

// Async function
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData(); // Data fetched!

// Async function with multiple awaits
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
};

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
};

const getUserData = async () => {
  try {
    const user = await fetchUser();
    console.log("User:", user);

    const posts = await fetchPosts();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

getUserData(); // User: { name: "Alice", age: 25 } // Posts: ["Post 1", "Post 2", "Post 3"]
