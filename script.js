// Parse URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get image URL from query parameter or use default
function getImageUrl() {
    const urlParam = getUrlParameter('url');
    if (urlParam) {
        return urlParam;
    }
    
    // Use the sample image from attachments
    return "data:image/jpeg;base64,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";
}

// Display the CAPTCHA image
function displayCaptchaImage(imageUrl) {
    const imgElement = document.getElementById('captcha-image');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    
    // Show loading indicator
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    
    // Set image source
    imgElement.onload = function() {
        loadingElement.style.display = 'none';
        // In a real application, this would call an API to solve the CAPTCHA
        // For this demo, we'll simulate solving it
        simulateCaptchaSolving();
    };
    
    imgElement.onerror = function() {
        loadingElement.style.display = 'none';
        errorElement.textContent = 'Failed to load CAPTCHA image. Please check the URL and try again.';
        errorElement.style.display = 'block';
    };
    
    imgElement.src = imageUrl;
}

// Simulate CAPTCHA solving (in a real app, this would call an API)
function simulateCaptchaSolving() {
    const captchaTextElement = document.getElementById('captcha-text');
    
    // Simulate processing delay
    setTimeout(() => {
        // This is where you would normally display the result from a CAPTCHA solving API
        // For demo purposes, we'll show a placeholder message
        captchaTextElement.innerHTML = '<span class="text-muted">In a real application, this would show the solved CAPTCHA text</span>';
        
        // For the sample image, we know it's not a real CAPTCHA, so we'll show a special message
        const urlParam = getUrlParameter('url');
        if (!urlParam) {
            captchaTextElement.innerHTML = '<span class="text-warning">Note: This is a sample image. A real CAPTCHA solver would process actual CAPTCHA images.</span>';
        }
    }, 1500);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const imageUrl = getImageUrl();
    displayCaptchaImage(imageUrl);
});