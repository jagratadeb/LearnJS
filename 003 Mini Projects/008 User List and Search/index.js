let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        ProfileUrl: "https://www.topmodeloftheworld.com/wp-content/uploads/2023/02/Top-Model-Of-the-world_0004_Sri-Lanka.jpg",
        name: "Alice Johnson",
        email: "alice.johnson@gmail.com"
    },
    {
        ProfileUrl: "https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg",
        name: "Brian Smith",
        email: "brian.smith@hotmail.com"
    },
    {
        ProfileUrl: "https://th.bing.com/th/id/OIP.1O0gEatuyr40CQJlOT6Q_QHaJj?rs=1&pid=ImgDetMain",
        name: "David Patel",
        email: "david.patel@gmail.com"
    },
    {
        ProfileUrl: "https://i.pinimg.com/originals/e9/98/48/e998483ead12f67835595b8b9f6b96c1.jpg",
        name: "Catherine Lee",
        email: "catherine.lee@yahoomail.com"
    }
];

function renderUsers(arr) {
    userContainer.innerHTML = "";
    if (arr.length === 0) {
        userContainer.innerHTML = "<p>No users found.</p>";
        return;
    }
    arr.forEach(function (obj) {
        let { ProfileUrl, name, email } = obj;
        let divElement = document.createElement('div');
        divElement.className = `userItem`;
        divElement.innerHTML = `
            <div class="userItem">
                <img src="${ProfileUrl}" alt="${name} image">
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p class="userEmail">${email}</p>
                </div>
            </div>
        `
        userContainer.append(divElement);
    });
}

// Initial render: display all users
renderUsers(users);

function handleSearch(e) {
    let searchValue = e.target.value.trim();
    if (searchValue === "") {
        // If search is empty, show all users
        renderUsers(users);
        return;
    }
    let filteredUsers = users.filter(obj =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    renderUsers(filteredUsers);
}

searchInput.addEventListener('input', handleSearch);