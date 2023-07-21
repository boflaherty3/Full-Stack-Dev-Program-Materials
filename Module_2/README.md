# Module 2 - HTML, CSS, JavaScript

## Reading Materials

- [ ] Read the `HTML`, `CSS`, and `JavaScript` sections in the [front end development roadmap](https://roadmap.sh/frontend).


## Exercises

- [x]  Complete the [tutorials](https://www.internetingishard.com/html-and-css/) for learning HTML and CSS in website design.
- [ ] Create sample website using the following technologies, with a separate file for each:
  - [x] HTML. Make sure to use semantic HTML tags. Use `div` as needed. [Useful resource](https://html5example.com/)
    - [x] `head` tag, with `title`, `link`, `meta` tags
    - [x] `body` tag, with `header`, `nav`, `footer`
    - [x] `h<number>` tags with `section`, `p` for content
    - [x] `image`
    - [x] `table`
    - [x] `form`, inluding `input`, `label`. Use 2-3 inputs
    - [x] `button` (see JS section for functionality)
    - [x] `a` (link to some files in your repo, perhaps)
    - [x] inline styling for one element, just as proof of concept
    - [x] attributes such as id/class as necessary
  - [x] CSS. Don't go crazy here, just the basics will do
    - [x] manually set the font to something other than the default
    - [x] styles for primary button
    - [x] styles for the nav, background color
    - [ ] if you're feeling ambitious, import [bootstrap](https://getbootstrap.com/docs/3.3/getting-started/#download-cdn) and use their styling to format your page
    ```html
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    ```
  - [ ] JavaScript
    - [x] pop up an alert with the current date and time (formatted so a human can read it) when a button is clicked
    - [x] write a function to handle the on submit button for the form. This should print the input names and values in a box below the form.
    - [x] write a function to clear the input box when a button is pressed
    - [ ] after the page loads, wait 5 seconds and then show a new section on the page (using a self invoking function)
    - [ ] in the navigation bar, show the curent time, refreshing every 30 seconds
    - [ ] after a button is clicked, retrieve data from this [the bacon ipsum API](https://baconipsum.com/json-api/) and print it on the screen
