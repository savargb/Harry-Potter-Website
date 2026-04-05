const searchData = [
    { label: "Gryffindor", url: "quizzes.html" },
    { label: "Slytherin", url: "quizzes.html" },
    { label: "Hufflepuff", url: "quizzes.html" },
    { label: "Ravenclaw", url: "quizzes.html" },
    { label: "JK Rowling", url: "jkrowling.html" },
    { label: "Sorting Hat Quiz", url: "quizzes.html" },
    { label: "Young Wizards", url: "forkids.html" },
    { label: "Library Records", url: "historyofhogwarts.html" },
    { label: "The Daily Prophet", url: "Dailyprophet.html" },
];

function searchFunction() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsBox = document.getElementById("searchResults");

    if (!query) {
        resultsBox.style.display = "none";
        resultsBox.innerHTML = "";
        return;
    }

    const matches = searchData.filter(item =>
        item.label.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        resultsBox.innerHTML = `<li class="list-group-item bg-dark text-secondary">No spells found for "${query}"</li>`;
    } else {
        resultsBox.innerHTML = matches.map(item =>
            `<li class="list-group-item list-group-item-action bg-dark text-warning" 
                 style="cursor:pointer;" 
                 onclick="window.location='${item.url}'">⚡ ${item.label}</li>`
        ).join("");
    }

    resultsBox.style.display = "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");
    if (input && results && !input.contains(e.target) && !results.contains(e.target)) {
        results.style.display = "none";
    }
});

// Mischief Managed button
function mischiefManaged() {
    document.body.classList.toggle('mischief-hide');
    alert("I solemnly swear that I am up to no good... and now, mischief managed!");
}
