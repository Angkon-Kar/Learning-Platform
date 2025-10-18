// 1. IMPORT your data
import { contentData } from './skill/categories.js';

// 2. DECLARE variables in the top-level scope
// We define them here with 'let' so all functions can access them
let contentContainer;
let searchInput;
let clearSearchBtn;
let noResultsMessage;
let backButton;
let currentCategoryTitle;

let currentView = 'categories';
let currentCategoryId = null;

// 3. DEFINE all your functions

// Function to display sub-topics within a category
function displaySubTopics(categoryId, filteredSubTopics = null) {
    const category = contentData.categories.find(cat => cat.id === categoryId);
    if (!category || !category.subTopics){
        window.location.hash = '';
        return;
    }

    contentContainer.innerHTML = '';
    noResultsMessage.classList.add('hidden');
    backButton.classList.remove('hidden');
    currentCategoryTitle.classList.remove('hidden');
    currentCategoryTitle.textContent = category.name;
    currentView = 'subTopics';
    currentCategoryId = categoryId;

    const topicsToDisplay = filteredSubTopics || category.subTopics;

    if (topicsToDisplay.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    }

    topicsToDisplay.forEach(subTopic => {
        const subTopicCard = createCard(subTopic, 'subTopic');
        contentContainer.appendChild(subTopicCard);
    });
}

// Function to display projects (when 'Projects' category is clicked)
function showProjects(filteredProjects = null) {
    const projectsCategory = contentData.categories.find(cat => cat.id === 'projects');
    if (!projectsCategory || !projectsCategory.projects) {
        window.location.hash = '';
        return;
    }

    contentContainer.innerHTML = '';
    noResultsMessage.classList.add('hidden');
    backButton.classList.remove('hidden');
    currentCategoryTitle.classList.remove('hidden');
    currentCategoryTitle.textContent = projectsCategory.name;
    currentView = 'projects';
    currentCategoryId = 'projects';

    const projectsToDisplay = filteredProjects || projectsCategory.projects;

    if (projectsToDisplay.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    }

    projectsToDisplay.forEach(project => {
        const projectCard = createCard(project, 'project');
        contentContainer.appendChild(projectCard);
    });
}

// Function to create cards
function createCard(item, type) {
    const card = document.createElement('div');
    // UPDATED CARD STYLING for better aesthetics
    card.className = "bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-gray-200 hover:border-blue-500";

    if (type === 'category') {
        card.classList.add("cursor-pointer");
        card.innerHTML = `
            <h3 class="text-2xl font-bold text-blue-700 mb-3">${item.name}</h3>
            <p class="text-gray-700 leading-relaxed">${item.description}</p>
        `;
        card.onclick = () => {
            window.location.hash = item.id;
        };
    } else if (type === 'subTopic') {
        let imageHtml = '';
        if (item.imageLink) {
            imageHtml = `<div class="mb-4">
                            <img src="${item.imageLink}" alt="${item.title}" class="rounded-lg w-full h-40 object-cover shadow-md">
                        </div>`;
        }

        let buttonsHtml = '';
        if (item.videoLink) {
            buttonsHtml += `
                <a href="${item.videoLink}" target="_blank" class="flex-1 text-center bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200">
                    Watch Video
                </a>
            `;
        }
        if (item.pdfLink) {
            buttonsHtml += `
                <a href="${item.pdfLink}" target="_blank" class="flex-1 text-center bg-purple-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-200">
                    See PDF
                </a>
            `;
        }
        if (item.websiteLink) {
            buttonsHtml += `
                <a href="${item.websiteLink}" target="_blank" class="flex-1 text-center bg-green-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition-colors duration-200">
                    Visit Website
                </a>
            `;
        }
        if (item.githubLink) {
            buttonsHtml += `
                <a href="${item.githubLink}" target="_blank" class="flex-1 text-center bg-gray-700 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200">
                    View GitHub
                </a>
            `;
        }

        card.innerHTML = `
            ${imageHtml}
            <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${item.title}</h3>
                <p class="text-gray-600 mb-4">${item.description}</p>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row gap-2">
                ${buttonsHtml}
            </div>
        `;
    } else if (type === 'project') {
        card.classList.remove("cursor-pointer");
        card.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${item.name}</h3>
            <p class="text-gray-600 mb-4">${item.description}</p>
            <a href="${item.githubLink}" target="_blank" class="inline-block bg-gray-700 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200">
                View GitHub
            </a>
        `;
    }
    return card;
}

// Function to display categories (initial view)
function displayCategories(filteredCategories = contentData.categories) {
    contentContainer.innerHTML = '';
    noResultsMessage.classList.add('hidden'); 
    backButton.classList.add('hidden');
    currentCategoryTitle.classList.add('hidden');
    currentView = 'categories';
    currentCategoryId = null;

    if (!Array.isArray(filteredCategories) || filteredCategories.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    }

    filteredCategories.forEach(category => {
        const categoryCard = createCard(category, 'category');
        contentContainer.appendChild(categoryCard);
    });
}

// Function to handle search logic
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    clearSearchBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';

    if (currentView === 'categories') {
        const filteredCategories = contentData.categories.filter(cat =>
            cat.name.toLowerCase().includes(searchTerm) ||
            cat.description.toLowerCase().includes(searchTerm)
        );
        displayCategories(filteredCategories);
    } else if (currentView === 'subTopics' && currentCategoryId) {
        const category = contentData.categories.find(cat => cat.id === currentCategoryId);
        if (category && category.subTopics) {
            const filteredSubTopics = category.subTopics.filter(sub =>
                sub.title.toLowerCase().includes(searchTerm) ||
                sub.description.toLowerCase().includes(searchTerm)
            );
            displaySubTopics(currentCategoryId, filteredSubTopics);
        }
    } else if (currentView === 'projects') {
        const projectsCategory = contentData.categories.find(cat => cat.id === 'projects');
        if (projectsCategory && projectsCategory.projects) {
            const filteredProjects = projectsCategory.projects.filter(proj =>
                proj.name.toLowerCase().includes(searchTerm) ||
                proj.description.toLowerCase().includes(searchTerm)
            );
            showProjects(filteredProjects);
        }
    }
}

// --- Routing Function ---
function route() {
    const hash = window.location.hash.substring(1);
    const parts = hash.split('/');

    if (parts.length > 0 && parts[0]) {
        const categoryId = parts[0];
        const category = contentData.categories.find(cat => cat.id === categoryId);

        if (category) {
            if (categoryId === 'projects') {
                showProjects();
            } else if (category.subTopics) {
                displaySubTopics(categoryId);
            } else {
                window.location.hash = '';
                displayCategories();
            }
        } else {
            window.location.hash = '';
            displayCategories();
        }
    } else {
        displayCategories();
    }
}

// 4. SET UP event listeners
// We wrap everything in 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
    
    // FIX: We ASSIGN the DOM elements *inside* this listener 
    // to prevent the "Cannot read properties of null" error.
    contentContainer = document.getElementById('content-container');
    searchInput = document.getElementById('searchInput');
    clearSearchBtn = document.getElementById('clearSearchBtn');
    noResultsMessage = document.getElementById('noResultsMessage');
    backButton = document.getElementById('backButton');
    currentCategoryTitle = document.getElementById('currentCategoryTitle');

    // Now we can safely add event listeners
    if (searchInput) {
        searchInput.addEventListener('keyup', handleSearch);
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
            }
            handleSearch();
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
            }
            handleSearch();
            
            if (currentView === 'subTopics' || currentView === 'projects') {
                 window.location.hash = '';
            } else {
                window.history.pushState(null, '', window.location.pathname);
                route();
            }
        });
    }

    // Initial page load
    // This call is now safe because all variables are assigned
    route();
});

// Listen for hash changes (browser back/forward)
window.addEventListener('hashchange', route);