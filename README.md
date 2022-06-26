# Timescale Frontend Interview Assignment

Thank you for taking the time to apply for a front end position at Timescale!
We are asking applicants to build a small form in React. This exercise should take around 3-4 hours to complete at a time of your choosing and should follow the instructions below. If you have any questions, feel free to reach out to use and we'll be happy to help. Happy hacking!

## Assignment

You are tasked with building a signup form.

Please take a component-first approach: create a form, input, checkbox and button component. Use these components to create the form. Then, use storybook to document at least one of the components.

Please do not use external libraries for the form and validations (Formik, Yup, etc).

We will be focusing on code quality, code cleanliness and extensibility.

### Features

The main features that should be implemented

- The input forms should allow for a validate function and a list of validations. The email input should check for a valid email. The password input should check for 1 number, 1 special character, and a string that is at least 6 characters long. They should display errors on submit if there are any.
- The checkbox should have a "required" validation.
- When the submit button is pressed, if there are errors, they should be displayed, blocking submission.
- The button should have two themes, gold and blue (primary and secondary).
- When pressing submit, if there are no errors, the success screen should be shown.

### The rules

- Follow the [designs in Figma][figma] as closely as possible
- Site should have a simple responsive design
- Site should work in the latest Chrome on Mac OS
- Fork the repo to your own account, make it public and send us the repo url when you are completed. We will clone and run the site on our local.
- Feel free to use any library listed in the package.json.

[figma]: https://www.figma.com/file/xdOy5L4dmMeEQpeJsbmp5K/Senior-Web-Dev-Assignment?node-id=0%3A1
