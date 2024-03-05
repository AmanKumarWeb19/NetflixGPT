## Netflix GPT

## Overview
Netflix GPT is a React web application that leverages the power of GPT (Generative Pre-trained Transformer) from OpenAI to provide a personalized movie browsing experience. The app allows users to sign up, log in, browse a collection of movies, watch trailers, and utilize a GPT-powered search feature for movie recommendations.

### Features:

## Authentication:
- User authentication is implemented using Firebase, allowing users to sign up, log in, and sign out securely.

## Browse Movies:
- Users can explore a curated selection of movies fetched from the TMDB (The Movie Database) API. The browsing experience is enhanced with TailwindCSS for sleek UI design.
  
## Main Container:
- The main container displays featured movies, including title, description, and background trailer for an immersive browsing experience.

## Secondary Container:
-Provides additional movie lists, including Now Playing, Popular Movies, and personalized GPT movie suggestions.

## Search Functionality:
-Utilizes GPT for intelligent movie search suggestions. Users can easily find movies by typing keywords in the search bar.

## Multi-language Support (BONUS):
- The app supports multi-language functionality, enhancing accessibility for users worldwide.

## Installation
Before starting, ensure you have set up your .env file with the necessary API keys for TMDB and OpenAI.

## Clone the repository:

## bash:
- git clone <https://github.com/AmanKumarWeb19/NetflixGPT.git>

## Install dependencies:
- npm install

## Start the development server:
- npm start

## Project Structure:
- src/components: Contains React components used throughout the application.
- src/hooks: Custom hooks for fetching data and managing state.
- src/redux: Redux store setup and slices for managing user authentication, movie data, and GPT suggestions.
- src/utils: Utility functions and constants used across the project.

## Deployment
This project is deployed and accessible at: https://netflixgpt-27f3f.web.app/

## To deploy the app to production:

## 1. Build the project:
 - npm run build

## 2. Deploy to your preferred hosting platform.

## Bug Fixes & Improvements:
- Implemented form validation for sign up and login forms.
- Fixed issues related to user profile updates and display name.
- Implemented redirects to ensure users are directed to the appropriate pages based on authentication status.
- Enhanced performance with memoization and optimized API calls.
- Made the site responsive for seamless browsing on various devices.
  
## Technologies Used:
- React
- Redux
- Firebase Authentication
- TailwindCSS
- TMDB API
- OpenAI API

## Contact:
- Mobile No. :- 6202378933
- Email Id:- akgupta0524@gmail.com
- Linkedin :- https://www.linkedin.com/in/aman-kumar-1a3047194/

## License
This project is licensed under the MIT License.
Happy coding!
