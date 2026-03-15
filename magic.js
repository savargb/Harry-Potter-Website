// Function for the footer button
function mischiefManaged() {
    document.body.classList.toggle('mischief-hide');
    alert("I solemnly swear that I am up to no good... and now, mischief managed!");
}

document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the page from refreshing

    // Get the search input and make it lowercase
    const spell = this.querySelector('input').value.toLowerCase().trim();
    const body = document.body;

    // 1. Secret Easter Egg Spells
    if (spell === "lumos") {
        body.style.filter = "brightness(1.5)";
        alert("The room brightens with magical light!");
    }
    else if (spell === "nox") {
        body.style.filter = "brightness(0.5)";
        alert("Darkness falls...");
    }
    else if (spell === "revelio") {
        // Highlights all house cards
        document.querySelectorAll('.house-card').forEach(card => {
            card.style.boxShadow = "0 0 20px #ffc107";
        });
        alert("Hidden secrets revealed!");
    }

    // 2. Practical Search/Filter Logic
    else {
        const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"];

        if (houses.includes(spell)) {
            // Smooth scroll to the house section
            const houseSection = document.querySelector(`.${spell}`);
            houseSection.scrollIntoView({ behavior: 'smooth' });

            // Add a temporary glow effect
            houseSection.style.outline = "5px solid gold";
            setTimeout(() => houseSection.style.outline = "none", 2000);
        } else {
            alert(`The spell "${spell}" didn't work. Perhaps try 'Gryffindor' or 'Lumos'?`);
        }
    }

    // Clear the search bar
    this.querySelector('input').value = "";
});
// 1. Your Data (This could be an array of strings or objects)
const items = ['JK Rowling', 'The Daily Prophet', 'The Battle of Hogwarts'];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

// 2. The Search Function
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search

    // Filter the array
    const filtered = items.filter(item =>
        item.toLowerCase().includes(term)
    );

    displayResults(filtered);
});

// 3. Helper function to update the UI
function displayResults(results) {
    resultsList.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}

// Initialize with all items
displayResults(items);