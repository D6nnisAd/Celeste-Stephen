import { db, doc, onSnapshot } from "./firebase-init.js";

let globalRedirectUrl = "#";

// 1. Listen to Global Settings
const globalSettingsRef = doc(db, "settings", "global_config");
onSnapshot(globalSettingsRef, (doc) => {
    if (doc.exists()) {
        const data = doc.data();
        if (data.redirectUrl) {
            globalRedirectUrl = data.redirectUrl;
            console.log("Global Redirect Updated:", globalRedirectUrl);
        }
    }
});

// 2. Handle Clicks
document.addEventListener('DOMContentLoaded', () => {
    
    // Select elements that should trigger the global redirect
    // Images, Feature Cards, Package Cards
    const triggerSelectors = [
        'img', 
        '.feature-card', 
        '.pkg-card', 
        '.about-image-wrapper'
    ];

    document.body.addEventListener('click', (e) => {
        // Check if the clicked element or its parents match our triggers
        const target = e.target.closest(triggerSelectors.join(','));
        
        // Prevent redirect if clicking a button or specific link inside a card
        if (e.target.closest('a') || e.target.closest('button')) {
            return; 
        }

        if (target && globalRedirectUrl && globalRedirectUrl !== "#") {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = globalRedirectUrl;
        }
    });
});