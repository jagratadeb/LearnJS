document.getElementById("username").addEventListener("keydown", handleKeyDown);

function fetchProfile() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username");
    return;
  }
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        alert("User not found");
      }
      return response.json();
    })
    .then((data) => {
      displayProfile(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function displayProfile(data) {
  const profile = document.getElementById("profile");
  profile.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}" />
        <h1>${data.name}</h1>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>BIO:</strong> ${data.bio}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Blog:</strong> <a href="${data.blog}" target="_blank">${
    data.blog
  }</a></p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Twitter:</strong> ${data.twitter_username}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><strong>Account Created:</strong> ${new Date(
          data.created_at
        ).toLocaleDateString()}</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/${
          data.login
        }" target="_blank">LinkedIn Profile</a></p>
    `;
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    fetchProfile();
  }
}
