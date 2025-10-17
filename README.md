# Captcha Solver

A web application that displays CAPTCHA images and shows the recognized text below them. It supports both query parameter URLs and default sample images.

## Setup

1. Clone or download the repository
2. Open `index.html` in a web browser
3. The application will automatically load the default CAPTCHA image

## Usage

- To use the default sample CAPTCHA: Simply open the application
- To use a custom CAPTCHA URL: Add `?url=YOUR_IMAGE_URL` to the page URL

Example: `index.html?url=https://example.com/captcha.png`

## Code Explanation

The application consists of:

1. **HTML Structure**: Semantic layout with image display and text output areas
2. **CSS Styling**: Responsive design with Bootstrap and custom styles
3. **JavaScript Logic**:
   - URL parameter parsing
   - Image loading and display
   - CAPTCHA text simulation (in a real app, this would connect to a solver API)
   - Error handling for image loading

## License

MIT