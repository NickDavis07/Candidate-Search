# Candidate Search Application

## Description

The Candidate Search Application allows users to search for GitHub users and view their details. Users can save potential candidates to a list or skip to the next candidate.

## Features

- Display candidate's name, username, location, avatar, email, html_url, and company.
- Save candidates to a list of potential candidates.
- Skip to the next candidate without saving.

## Live Site


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/candidate-search-app.git
   cd candidate-search-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create an `.env` file in the `environment` folder and add your GitHub token:
   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open the application in your browser:
   ```
   http://localhost:5173/
   ```

2. The application will display a candidate's information.

3. Click the "+" button to save the candidate and display the next candidate.

4. Click the "-" button to skip to the next candidate without saving.

## Project Structure

```
candidate-search-app/
├── environment/
│   └── .env
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── API.tsx
│   ├── components/
│   │   ├── CandidateCard.tsx
│   │   └── Nav.tsx
│   ├── interfaces/
│   │   └── Candidate.interface.tsx
│   ├── pages/
│   │   └── CandidateSearch.tsx
│   ├── utils/
│   │   └── localStorage.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
