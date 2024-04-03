# Creating Squares

![Creating Squares](/creatingSquare.gif "Creating Squares")

[DEMO](https://manoelteixeira.github.io/creating-squares/)



This project demonstrates how to dynamically create nested squares with randomly generated colors upon a button click. It's a good way to understand event handling, DOM manipulation, and CSS styling in web development. 

## Setup

To set this project up on GitHub Pages, follow these steps:

1. Fork or clone this repository to your GitHub account.
2. Navigate to the repository settings on GitHub.
3. Find the "Pages" section.
4. Select the branch you wish to deploy (usually `main` or `master`) and the folder (`/ (root)` or `/docs` if your project is in the `docs` folder).
5. Click "Save", and GitHub will automatically deploy your project to GitHub Pages. You'll be provided with a link to access your project.

## Requirements

This project is structured with HTML, CSS, and JavaScript to meet the following requirements:

1. **HTML Structure**: The outermost square serves as a parent container with a black border. It is designed to host all other dynamically generated squares.
   
2. **Center Button**: A button is positioned at the center of the parent square. This button is used to trigger the generation of new nested squares.

3. **Dynamic Square Generation**:
    - Clicking the button generates a new square inside the parent square.
    - Each newly generated square is nested within the previously created square.
    - The color of each square is randomly generated to add visual diversity.

4. **Space Capacity Check**: The generation of new squares is conditional upon the available space within the parent square. Once there is insufficient space to accommodate another square, the ability to generate new squares is disabled to prevent overflow.

## How It Works

The logic behind this project involves:

- **CSS** for styling the squares and positioning the button.
  
- **JavaScript** for handling button clicks, generating squares with approriate styling, applying random colors, and checking for the remaining space within the parent square.


## Submission
1. Fork and clone 
2. Create a Github pages link 
3. Place Github pages link in README.md
4. Submit link to Github repository