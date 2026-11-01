Tip Calculator – Veda Technology Task 23
A responsive tip calculator built using HTML5, CSS3, and JavaScript. It helps users calculate the tip amount, total bill, and amount payable by each person when a bill is shared.
Live Demo
After enabling GitHub Pages, add your published website URL here:

https://mullapati-nagalaxmi-2005.github.io/veda-task-23-tip-calculator/
GitHub Repository
https://github.com/mullapati-nagalaxmi-2005/veda-task-23-tip-calculator
Project Details
Item	Description
Project	Tip Calculator
Internship	Veda Technology
Task	Task 23 – Level 1, Day 23
Domain	Web Development
Frontend	HTML5, CSS3
Programming Language	JavaScript
Currency	Indian Rupee (INR)


Features
- Enter the bill amount.
- Choose a preset tip percentage: 5%, 10%, 15%, 20%, or 25%.
- Enter a custom tip percentage.
- Set the number of people sharing the bill.
- Calculate the total tip amount.
- Calculate the bill total, including the tip.
- Display the amount payable by each person.
- Update results immediately when inputs change.
- Validate bill amount, tip percentage, and number of people.
- Prevent invalid division by zero by requiring at least one person.
- Format monetary values to two decimal places.
- Reset the calculator to its default values.
- Responsive design for desktop, tablet, and mobile screens.
Technologies Used
- HTML5 – Creates the calculator structure and input fields.
- CSS3 – Provides the layout, colors, responsive design, and styling.
- JavaScript – Handles calculations, input validation, and live updates.
Project Structure
veda-task-23-tip-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
How to Run the Project Locally
1. Download or clone this repository.
2. Extract the project folder if you downloaded the ZIP file.
3. Open the folder in Visual Studio Code.
4. Open index.html in your browser, or run it using the VS Code Live Server extension.
5. Enter a bill amount, choose a tip percentage, and enter the number of people.
6. View the tip, total bill, and per-person amount in the results panel.
No package installation or build tools are required.
Calculation Logic
The calculator uses these formulas:
Tip Amount = Bill Amount × Tip Percentage / 100

Total Bill = Bill Amount + Tip Amount

Amount Per Person = Total Bill / Number of People
Example:

If the bill is ₹1,000, the tip is 10%, and 2 people are sharing:
Tip Amount       = ₹1,000 × 10 / 100 = ₹100.00
Total Bill       = ₹1,000 + ₹100    = ₹1,100.00
Amount Per Person= ₹1,100 / 2       = ₹550.00
Input Validation
- Bill amount must be zero or greater.
- Tip percentage must be between 0% and 100%.
- Number of people must be a whole number greater than or equal to 1.
- The calculator does not divide by zero.
- Invalid input displays an error message.
- All displayed currency values are rounded and formatted to two decimal places.
Testing
Test case	Expected result
Enter a valid bill amount	Tip and total are calculated
Select a preset tip	Results update using the selected percentage
Enter a custom tip	Results update using the custom percentage
Change the number of people	Per-person amount is recalculated
Enter 0 or an invalid people count	Validation message is displayed
Enter a tip below 0% or above 100%	Validation message is displayed
Click Reset	Inputs and results return to defaults
View on a mobile screen	Layout adjusts to the screen size


Deployment Using GitHub Pages
1. Push the project files to the main branch of this public GitHub repository.
2. Open the repository on GitHub.
3. Select Settings.
4. Select Pages from the sidebar.
5. Under Build and deployment, choose Deploy from a branch.
6. Select the main branch and the / (root) folder.
7. Click Save.
8. Wait for GitHub Pages to publish the website.
9. Open the published URL and test the calculator.
The expected GitHub Pages URL is:

https://mullapati-nagalaxmi-2005.github.io/veda-task-23-tip-calculator/

If your GitHub username or repository name is different, update the URL accordingly.
Rollback and Recovery
This is a static frontend project and does not use a database or backend server. If a new update causes a problem:
1. Open the repository's Commits history.
2. Find the last working commit.
3. Use GitHub's Revert option where available, or restore the previous working versions of the changed files.
4. Commit and push the restored files to the main branch.
5. Check the GitHub Pages website after it redeploys.
Keep screenshots of the working website and relevant commit history if rollback evidence is required for submission. A rollback is not considered completed until the restored version has been pushed and checked.
Learning Outcomes
Through this task, I practised:
- Working with HTML form inputs and buttons.
- Styling a responsive web interface using CSS.
- Handling input events with JavaScript.
- Performing arithmetic calculations.
- Validating user input with conditional statements.
- Formatting currency values.
- Updating webpage content dynamically using the DOM.
- Publishing a static website using GitHub Pages.
Author
Mullapati Nagalaxmi
Web Development Intern – Veda Technology
