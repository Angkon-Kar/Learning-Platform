const contentData = {
    categories: [
        {
            id: 'basic',
            name: 'Basic',
            description: 'Learn about code Editor, (VS Code, MinGW, Git & Github, SFML) Setup, Some Montivational & Fundamental concepts.',
            subTopics: [
                { title: "VS Code Instalation", videoLink: "https://youtu.be/bN6DE-4uFNo?si=0AqFK2SP3uffKoOQ", description: "VS Code Download & installation & Set up your coding environment.", imageLink: "https://img.youtube.com/vi/bN6DE-4uFNo/hqdefault.jpg" },
                { title: "VS Code Instalation with Example(C/C++)", videoLink: "https://youtu.be/z2jDamkbBF0?si=xS9kQErHaNz-mj9z", description: " VS Code Download & installation & Set up with Examples", imageLink: "https://img.youtube.com/vi/z2jDamkbBF0/hqdefault.jpg" },
                { title: "SFML Setup in Visual Studio Code", videoLink: "https://youtu.be/rZE700aaT5I?si=lD51vmJ9swLr-P7N", description: "It is essential for C/C++ Projects", imageLink: "https://img.youtube.com/vi/rZE700aaT5I/hqdefault.jpg" },
                { title: "GitHub Basics Made Easy: A Fast Beginner's Tutorial!", videoLink: "https://youtu.be/Oaj3RBIoGFc?si=X73o6KPAgfb08bCd", description: "Introduction to version control(Github).", imageLink: "https://img.youtube.com/vi/Oaj3RBIoGFc/hqdefault.jpg" },
                { title: "How To Use GitHub For Beginners", videoLink: "https://youtu.be/a9u2yZvsqHA?si=8EHWgR4flLscY5LG", description: "Introduction to version control(Github).", imageLink: "https://img.youtube.com/vi/a9u2yZvsqHA/hqdefault.jpg" },
                { title: "Complete Git and GitHub Tutorial for Beginners", videoLink: "https://youtu.be/Ez8F0nW6S-w?si=cEzTZI6K-mFBE-9z", description: "All about Github.", imageLink: "https://img.youtube.com/vi/Ez8F0nW6S-w/hqdefault.jpg" },
                { title: "Learn to Push Your Code to GitHub in 10 Minutes (Beginner Video) ", videoLink: "https://youtu.be/ufKRYe8ZPaw?si=FlmQm3twDCa9qx-1", description: "Push Your Code to GitHub", imageLink: "https://img.youtube.com/vi/ufKRYe8ZPaw/hqdefault.jpg" },
                { title: "5 Github Hacks that you should know", videoLink: "https://youtu.be/B67X9xtOyuI?si=ID8ZxXM0hxQ1su5R", description: "Github Hacks.", imageLink: "https://img.youtube.com/vi/B67X9xtOyuI/hqdefault.jpg" },
                { title: "How to use the Command Line | Terminal Basics for Beginners", videoLink: "https://youtu.be/5XgBd6rjuDQ?si=DR1rtDj0JfyaFMLY", description: "Basic commands for using the terminal.", imageLink: "https://img.youtube.com/vi/5XgBd6rjuDQ/hqdefault.jpg" },
                { title: "Command Line Crash Course For Beginners | Terminal Commands", videoLink: "https://youtu.be/uwAqEzhyjtw?si=gixOP5Pnnr7FB5ip", description: "Command Line Crash Course For Beginner | Terminal Commands.", imageLink: "https://img.youtube.com/vi/uwAqEzhyjtw/hqdefault.jpg" }
            ]
        },
        {
            id: 'c',
            name: 'C Language',
            description: 'Learn the details of C Programming Language.',
            subTopics: [
                { title: "C or C++ | What coding language should you learn ?", videoLink: "https://youtu.be/_FFRRMEXdBU?si=xJswf4RJ5TUgAaW8", description: "C/C++ Basics", imageLink: "https://img.youtube.com/vi/_FFRRMEXdBU/hqdefault.jpg" },
                { title: "C Programming For Beginners - A 20 Day Curriculum!", websiteLink: "https://www.geeksforgeeks.org/c/c-programming-for-beginners-a-20-day-curriculum/", description: "All about C Language", imageLink: "https://placehold.co/100x100/103b46/fff?text=C" },
                { title: "C Programming Roadmap", websiteLink: "https://coderstar.in/codingroadmap/c-roadmap.html", description: "C Language", imageLink: "https://placehold.co/100x100/103b46/fff?text=Roadmap" },
                { title: "Programming in C: Basics", pdfLink: "https://cse.iitkgp.ac.in/~pallab/PDS-2011-SPRING/Lec-1c.pdf", description: "CS10001: Programming & Data Structures", imageLink: "https://placehold.co/100x100/103b46/fff?text=C" },
                { title: "Learn C Language In 10 Minutes!! C Language Tutorial", videoLink: "https://youtu.be/dTp0c41XnrQ?si=rE0GRCpTVuGbfLsu", description: "Quick Overview of C Language", imageLink: "https://img.youtube.com/vi/dTp0c41XnrQ/hqdefault.jpg" },
                { title: "C Language Tutorial for Beginners", videoLink: "https://youtu.be/irqbmMNs2Bo?si=244HWTiUwVQLfg5T", description: "C Language Tutorial for Beginners (with Notes & Practice Questions)", imageLink: "https://img.youtube.com/vi/irqbmMNs2Bo/hqdefault.jpg" },
                { title: "C Programming for Beginners", videoLink: "https://youtu.be/aZb0iu4uGwA?si=oDqc8hpFcx9rS67X", description: "C Programming for Beginners", imageLink: "https://img.youtube.com/vi/aZb0iu4uGwA/hqdefault.jpg" }
            ]
        },
        {
            id: 'cplus-plus',
            name: 'C++ Language',
            description: 'Learn the details of C++ Programming Language.',
            subTopics: [
                { title: "C or C++ | What coding language should you learn ?", videoLink: "https://youtu.be/_FFRRMEXdBU?si=xJswf4RJ5TUgAaW8", description: "C/C++ Basics", imageLink: "https://img.youtube.com/vi/_FFRRMEXdBU/hqdefault.jpg" },
                { title: "Difference between C and C++ | Which is Best Suitable For You ?", videoLink: "https://youtu.be/KKmPvSID_SM?si=0N-l-lBaorBXr14p", description: "C VS C++", imageLink: "https://img.youtube.com/vi/KKmPvSID_SM/hqdefault.jpg" },
                { title: "C++ Programming Roadmap", pdfLink: "https://roadmap.sh/pdfs/roadmaps/cpp.pdf", description: "C++ Roadmap", imageLink: "https://placehold.co/100x100/103b46/fff?text=Roadmap" },
                { title: "A 20-Day Curriculum!", websiteLink: "https://www.geeksforgeeks.org/cpp/learn-cpp-programming-step-by-step-a-20-day-curriculum/", description: "All about C++ Language", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B" },
                { title: "Introduction to Programming", pdfLink: "https://www.cs.upc.edu/~jordicf/Teaching/programming/pdf/IP01_Introduction.pdf", description: "Introduction to Programming (in C++)", imageLink: "httpsfs://placehold.co/100x100/103b46/fff?text=Intro" },
                { title: "Complete C++ DSA Course", videoLink:"https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt", description: "Data Structure & Algorithms", imageLink: "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLANRgL8BByNSNvuNhHjMmJmfD3GBQ" },
                { title: "C++ Programming Language | D.S. Malik", pdfLink: "https://drive.google.com/file/d/0B5mKRs3NaP_UdVY5d3NJVkh1d2s/view?resourcekey=0-lbHiqijryi6XUKsTYvwegA", description: "C++ Programming: From Problem analysis to Program Design", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B" },
                { title: "Modern C++ for Absolute Begineers", pdfLink: "https://content.e-bookshelf.de/media/reading/L-14046715-ea28a80baa.pdf", description: "A Friendly Introduction to C++ Programming Language", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B" },
                { title: "Complete C++ Tutorial | Basics Of C++ Programming", videoLink: "https://youtu.be/e7sAf4SbS_g?si=TfWaR9MRc4Y-hkvs", description: "Basics Of C++ Programming", imageLink: "https://img.youtube.com/vi/e7sAf4SbS_g/hqdefault.jpg" },
                { title: "C++ Programming Language | Bjarne Stroustrup", pdfLink: "https://ia902307.us.archive.org/13/items/gate-2020-computer-science-and-technology-by-disha-experts/The%20C%2B%2B%20Programming%20Language%2C%204th%20Edition%20by%20Stroustrup%20B..pdf", description: "C++ Programming Language | Fourth Edition | Bjarne Stroustrup", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B" },
                { title: "C++ Programming All-in-One Tutorial Series", videoLink: "https://youtu.be/_bYFu9mBnr4?si=LX2U39A686otn4Un", description: "C++ Programming", imageLink: "https://img.youtube.com/vi/_bYFu9mBnr4/hqdefault.jpg" },
                { title: "Practical C++ Programming", pdfLink: "http://debracollege.dspaces.org/bitstream/123456789/654/1/O%27Reilly%20-%20Practical%20C%2B%2B%20Programming.pdf", description: "Practical C++ Programming by Steve Oualline", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B" },
                { title: "C++ & DSA Journey", githubLink: "https://github.com/Angkon-Kar/Cpp-DSA-Journey", description: "All about C++", imageLink: "https://placehold.co/100x100/103b46/fff?text=C%2B%2B+DSA" },
                { title: "OOP in C++", videoLink: "https://youtu.be/mlIUKyZIUUU?si=QcGHqH1eesU7jKAt", description: "OOPs Tutorial in One Shot", imageLink: "https://img.youtube.com/vi/mlIUKyZIUUU/hqdefault.jpg" }

        ]
        },
        /*
        {
            id: 'web-development',
            name: 'Web Development',
            description: 'Learn the details of frontend and backend development.',
            subTopics: [
                { title: "Basic HTML and CSS", videoLink: "https://www.youtube.com/watch?v=G3e-C3l3O1o", description: "Learn the fundamentals of building web pages.", imageLink: "https://placehold.co/100x100/103b46/fff?text=HTML" },
                { title: "CSS Grid Tutorial", websiteLink: "https://css-tricks.com/snippets/css/complete-guide-grid/", description: "A comprehensive guide to CSS Grid.", imageLink: "https://placehold.co/100x100/103b46/fff?text=CSS" },
                { title: "JavaScript Fundamentals", videoLink: "https://www.youtube.com/watch?v=W6NZK-d5oO0", description: "Basic concepts of JavaScript for dynamic websites.", imageLink: "https://placehold.co/100x100/103b46/fff?text=JS" },
                { title: "JavaScript Hoisting Explained", pdfLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", description: "A PDF document explaining JavaScript Hoisting.", websiteLink: "https://www.javascript.com/hoisting-explained", imageLink: "https://placehold.co/100x100/103b46/fff?text=JS" }, // Example with both PDF and Website
                { title: "Building Web Apps with React.js", videoLink: "https://www.youtube.com/watch?v=Ke90Tje7VS0", description: "Popular library for modern web applications.", imageLink: "https://placehold.co/100x100/103b46/fff?text=React" },
                { title: "Backend Development with Node.js", videoLink: "https://www.youtube.com/watch?v=RLtyhwFtXQA", description: "Build server-side applications using JavaScript.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Node.js" },
                { title: "Database Management (SQL)", videoLink: "https://www.youtube.com/watch?v=HXV3zeQKqtg", description: "Learn to use SQL for data storage and management.", imageLink: "https://placehold.co/100x100/103b46/fff?text=SQL" },
                { title: "API Design & Integration", videoLink: "https://www.youtube.com/watch?v=your_api_link", description: "Understand Application Programming Interfaces.", imageLink: "https://placehold.co/100x100/103b46/fff?text=API" }
            ]
        },
        {
            id: 'competitive-programming',
            name: 'Competitive Programming',
            description: 'Learn algorithms and data structures.',
            subTopics: [
                { title: "Algorithms Basics", videoLink: "https://www.youtube.com/watch?v=your_algo_link", description: "Techniques for solving programming problems.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Algorithms" },
                { title: "Introduction to Data Structures", videoLink: "https://www.youtube.com/watch?v=your_datastruct_link", description: "Various methods for storing data.", imageLink: "https://placehold.co/100x100/103b46/fff?text=DS" },
                { title: "Sorting Algorithms", videoLink: "https://www.youtube.com/watch?v=your_sorting_link", description: "Different methods for sorting data.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Sorting" },
                { title: "Graph Theory", videoLink: "https://www.youtube.com/watch?v=your_graph_link", description: "Graph data structures and their applications.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Graphs" }
            ]
        },
        {
            id: 'app-development',
            name: 'App Development',
            description: 'Learn techniques for building mobile applications.',
            subTopics: [
                { title: "Android App Development (Kotlin)", videoLink: "https://www.youtube.com/watch?v=F_fP9aJ-q5E", description: "Get started with Android app development using Kotlin.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Kotlin" },
                { title: "Cross-Platform Apps with Flutter", videoLink: "https://www.youtube.com/watch?v=qj6gD_a3G04", description: "Build iOS and Android apps using the Flutter framework.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Flutter" },
                { title: "iOS App Development (Swift)", videoLink: "https://www.youtube.com/watch?v=your_ios_link", description: "Get started with iOS app development using Swift.", imageLink: "https://placehold.co/100x100/103b46/fff?text=iOS" }
            ]
        },
        {
            id: 'projects', // This is now treated as a special category
            name: 'Projects',
            description: 'Explore various projects with their GitHub links.',
            projects: [ // This array now directly holds the projects
                { name: "E-commerce Website", githubLink: "https://github.com/your-username/ecommerce-project", description: "A complete e-commerce solution.", imageLink: "https://placehold.co/100x100/103b46/fff?text=E-Commerce" },
                { name: "Chat Application", githubLink: "https://github.com/your-username/chat-app", description: "Real-time chatting application.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Chat" },
                { name: "Task Manager App", githubLink: "https://github.com/your-username/task-manager", description: "A simple app for managing daily tasks.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Tasks" },
                { name: "Weather App", githubLink: "https://github.com/your-username/weather-app", description: "An app to display current weather information.", imageLink: "https://placehold.co/100x100/103b46/fff?text=Weather" },
                { name: "", githubLink: "", description: "", imageLink: "https://placehold.co/100x100/103b46/fff?text=Project" }
            ]
        }
        */
    ]
};