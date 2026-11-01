# Veda Technology – Task 23: Tip Calculator

A responsive tip calculator built using **HTML5, CSS3 and vanilla JavaScript**.

## Features
- Enter a bill amount in Indian Rupees (₹).
- Select a preset tip (5%, 10%, 15%, 20%, or 25%) or enter a custom percentage.
- Set the number of people and split the total bill.
- Live calculation as values change.
- Displays total tip, total bill, and amount payable per person.
- Input validation, including protection against zero/invalid people counts.
- Currency values are formatted to two decimal places.
- Responsive layout for mobile, tablet, and desktop.
- Reset button restores the default values.

## Project files
```text
veda-task-23-tip-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Enter the bill amount, choose a tip percentage, and set the number of people.

No package installation or build step is required.

## Deploy with GitHub Pages
1. Create a public GitHub repository named `veda-task-23-tip-calculator`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Copy the published URL into your internship submission.

## Validation and testing
- Bill amount left empty: calculation starts at ₹0.00.
- Bill amount entered: tip and total update immediately.
- Custom tip: accepts values from 0 to 100 percent.
- People count: must be a whole number greater than or equal to 1.
- Per-person amount: total is divided only after the people count is validated.
- Monetary outputs: formatted to exactly two decimal places.

## Rollback evidence / recovery
This project is static and has no database or server-side state. To roll back a deployment, use GitHub:
1. Open the repository's **Commits** history.
2. Identify the last working commit.
3. Revert the faulty commit (or restore the previous versions of the changed files).
4. Push the rollback commit to `main`; GitHub Pages will redeploy the restored version.

Keep screenshots of the working deployed page and the relevant GitHub commit history as evidence if your internship portal requires screenshots. Do not claim a deployment or rollback has happened until you have performed those steps.

## Author
Veda Technology Web Development Track – Task 23.
