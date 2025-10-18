// 1. Import all your individual category objects
import { basicCategory } from './basic.js';
import { cCategory } from './c.js';
import { cppCategory } from './cpp.js';
// import { webCategory } from './web.js'; // (Uncomment when you create these files)
// import { cpCategory } from './cp.js';
// import { appCategory } from './app.js';
// import { projectsCategory } from './projects.js';

// 2. Export the final contentData object
export const contentData = {
    categories: [
        basicCategory,
        cCategory,
        cppCategory,
        // webCategory, // (Uncomment when you create these files)
        // cpCategory,
        // appCategory,
        // projectsCategory
    ]
};