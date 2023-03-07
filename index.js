const mustache = require('mustache');
const fs = require('fs');

// Read the template files
const headerTemplate = fs.readFileSync('templates/header.mustache', 'utf8');
const bodyTemplate = fs.readFileSync('templates/body.mustache', 'utf8');

// Define the data for the templates
const data = {
  title: 'My Website',
  description: 'Welcome to my website!'
};

// Render the templates with the data
const headerOutput = mustache.render(headerTemplate, data);
const bodyOutput = mustache.render(bodyTemplate, data);

// Concatenate the outputs together
const output = headerOutput + bodyOutput;

// Output the final HTML
console.log(output);