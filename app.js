const API_URL = "https://dummyjson.com/users";

const userListContainer = document.getElementById("user-list-container");
const loadMoreBtn = document.getElementById("load-more-btn");
let contador = 0;

async function fetchUsers() {
  try {
    
    loadMoreBtn.textContent = "Loading...";
    loadMoreBtn.disabled = true;

    
    const response = await fetch(`${API_URL}?limit=10&skip=${contador}`);

    const data = await response.json();
    const users = data.users;

    
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.email}</p>
      `;

      userListContainer.appendChild(userCard);
    });

    
    contador += 10;

  } catch (error) {
    console.error("Failed to fetch users:", error);
    userListContainer.innerHTML = "<p>Something went wrong!</p>";

  } finally {
    
    loadMoreBtn.textContent = "Load More";
    loadMoreBtn.disabled = false;
  }
}

loadMoreBtn.addEventListener("click", fetchUsers);


fetchUsers();



    