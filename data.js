// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Dinah Lee",        // TODO: Add your name
        title: "Product Marketing Manager",      // TODO: Add your professional title
        email: "jiwondinah.lee@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: " I'm interested in the intersection of AI and marketing, and how emerging technology is changing the way brands connect with people. When I'm not in class, I'm usually planning my next trip somewhere new." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Product Marketing",   // TODO: Replace with your actual skills
        "Brand Storytelling",  // TODO: Add more skills
        "Growth",    // TODO: Students should have at least 5 skills
        "Campaign Management",
        "AI & Marketing"
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Little Big Emotion",
            description: "A mini concept EV designed as a ride-on car for kids. I was the project manager for this marketing campaign, which won the 2021 Red Dot Award.",
            technologies: ["Marketing", "Product Management"], // Array of technologies used
            completionDate: "2021-06-01",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Task Manager UI", 
            description: "A responsive task manager interface built from a design mockup, using semantic HTML5 and Flexbox layout.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-24",
            featured: true
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// TODO: Students will learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);