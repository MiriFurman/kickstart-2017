# World Clocks Wall - Exercise App
### **Goal**: Learn to construct a React Application using Lifecycle methods 
 
## Task Overview
  * Create an App component for the entire app
  * Create a Digital Clock component that has a label and shows the current time
  * Create a “Delete” button for every Clock to be removed
  * Create an “Edit” button for every Clock to edit the label
  * Make sure every clock has a fitting Timezone (Israel should be UTC+02:00, while NYC should be UTC-05:00)
 
## Setup & Project scaffolding
  * Project should be scaffolded by using Yeoman Wix-JS Generator.
    * Run in your terminal the following to install Yeoman generator: ```npm i -g yo generator-wix-js``` 
    * Scaffold your Client project by running in your terminal: ```yo wix-js```
      * when asked for groupId, enter: "com.wixpress.ks17"

### Conditions
  * All Components need to have PropTypes validation for their props.
  * Return the focus to the “City Name” input box after clicking the “Add Clock” button.
  * Make sure to clean-up any interval / timeout hooks when removing a Clock.
  * When clicking “Edit”, focus the cursor on the input box so you can write right away
  * Render only what is necessary:
    * When Removing a Clock, make sure the rest of the clocks are not rendered.
    * When Editing a clock, render only the edited Clock.
    * When Adding a clock, render only the small add panel.
    * When adding the clock to the Wall, render only the newly added clock.
    > Add a Console.log to every component’s render function to track which component is rendering.


## Mock Up / Screenshot

![World Clocks Wall Mockup](https://static.wixstatic.com/media/32d4ec_db0e2957450d46feac3e39da8f7ee8f8~mv2.png/v1/fill/w_800,h_413,al_c,usm_0.66_1.00_0.01/32d4ec_db0e2957450d46feac3e39da8f7ee8f8~mv2.png)


## Assets
You can find Digital Fonts here: [http://www.1001fonts.com/digital+clock-fonts.html](http://www.1001fonts.com/digital+clock-fonts.html)
