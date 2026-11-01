# Tip Calculator – Veda Technology Task 23

A responsive **Tip Calculator** built using HTML5, CSS3, and JavaScript as part of my Web Development Internship at Veda Technology. This application calculates the tip amount, total bill, and amount payable per person when sharing a bill.

## 🌐 Live Demo

[View Live Website](https://mullapati-nagalaxmi-2005.github.io/veda-task-23-tip-calculator/)

## 📂 GitHub Repository

[View Source Code](https://github.com/mullapati-nagalaxmi-2005/veda-task-23-tip-calculator)

## 📌 Project Details

| Item | Description |
|---|---|
| Project Name | Tip Calculator |
| Internship | Veda Technology |
| Task | Task 23 – Level 1, Day 23 |
| Domain | Web Development |
| Frontend | HTML5, CSS3 |
| Programming Language | JavaScript |
| Currency | Indian Rupee (INR) |

## ✨ Features

- Enter the bill amount.
- Select preset tip percentages: 5%, 10%, 15%, 20%, or 25%.
- Enter a custom tip percentage.
- Set the number of people sharing the bill.
- Calculate the total tip amount.
- Calculate the total bill, including the tip.
- Display the amount payable per person.
- Update results dynamically when inputs change.
- Validate bill amount, tip percentage, and number of people.
- Prevent division by zero.
- Display currency values with two decimal places.
- Reset inputs and results to their default values.
- Responsive design for desktop, tablet, and mobile devices.

## 🛠️ Technologies Used

- **HTML5:** Creates the webpage structure and input fields.
- **CSS3:** Provides styling, layout, and responsive design.
- **JavaScript:** Implements calculations, validation, and dynamic updates.

## 📁 Project Structure

```text
veda-task-23-tip-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Enter a bill amount.
5. Select a preset tip or enter a custom percentage.
6. Enter the number of people sharing the bill.
7. View the calculated tip, total bill, and amount payable per person.

No additional packages or build tools are required.

## 🧮 Calculation Logic

The calculator uses the following formulas:

**Tip Amount**

`Tip Amount = Bill Amount × Tip Percentage / 100`

**Total Bill**

`Total Bill = Bill Amount + Tip Amount`

**Amount Per Person**

`Amount Per Person = Total Bill / Number of People`

### Example

Suppose the bill amount is ₹1,000, the tip percentage is 10%, and two people are sharing the bill.

- Bill Amount: ₹1,000.00
- Tip Amount: ₹100.00
- Total Bill: ₹1,100.00
- Amount Per Person: ₹550.00

## ✅ Input Validation

- Bill amount must be zero or greater.
- Tip percentage must be between 0% and 100%.
- Number of people must be a whole number greater than or equal to 1.
- Invalid values are handled with appropriate validation messages.
- Division by zero is prevented.
- Currency values are formatted to two decimal places.

## 🧪 Testing

The following scenarios can be used to test the application:

| Test Case | Expected Result |
|---|---|
| Enter a valid bill amount | Tip and total are calculated |
| Select a preset tip | Results update using the selected percentage |
| Enter a custom tip | Results update using the custom percentage |
| Change the number of people | Per-person amount is recalculated |
| Enter an invalid people count | Validation message is displayed |
| Enter a tip outside the allowed range | Validation message is displayed |
| Click Reset | Inputs and results return to defaults |
| Open on a mobile device | Layout adjusts to the screen size |

## 🌍 Deployment Using GitHub Pages

1. Push the project files to the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Click **Save**.
7. Wait for deployment to complete.
8. Open the live website and test its functionality.

**Live URL:**  
https://mullapati-nagalaxmi-2005.github.io/veda-task-23-tip-calculator/

## 🔄 Rollback and Recovery

This is a static frontend project without a database or backend server.

If an update causes an issue:

1. Open the repository's commit history.
2. Identify the last working commit.
3. Revert the problematic changes or restore the previous working files.
4. Commit and push the corrected files.
5. Verify the website after GitHub Pages redeploys.

## 🎓 Learning Outcomes

Through this project, I practised:

- Creating web forms using HTML5.
- Designing responsive interfaces with CSS3.
- Handling user input and events using JavaScript.
- Performing arithmetic calculations.
- Implementing input validation.
- Formatting currency values.
- Updating webpage content dynamically using the DOM.
- Deploying a static website using GitHub Pages.

## 👩‍💻 Author

**Mullapati Nagalaxmi**  
Web Development Intern – Veda Technology

---

If you find this project useful, feel free to explore the source code and share your feedback!
