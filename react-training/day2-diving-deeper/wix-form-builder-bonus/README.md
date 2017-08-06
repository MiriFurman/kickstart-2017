# **React App Exercise**: Wix Form builder

## Goal: Practicing writing a small React Application

## Task Overview
  * Create an App component for the entire app.
  * Your App needs to be composed of 2 parts, the "Builder", and the "Preview" showing the form you are building.
  * The Builder lets you add fields to the form. 
  * A field has a label, and an input of one of the following types:
    * text
    * number
    * email
    * textArea
    * checkbox.
  * The Builder needs to let you remove fields from the form.
  * You may either generate the Form in the "Preview" automatically or by clicking a “Generate” button in the "Builder".
  * The Form in the Preview needs to be “Submittable” - Logging the information to the screen, somewhere in the preview underneath the form (see screenshot).
  * The Builder needs to let you change the order of the fields (move a field up/down).
  * All your components need to support PropTypes validations for their props
  * Use CSS Style as you see fit to make your App look great!

## Setup App
  * Scaffold your application using Yeoman and Wix-JS scaffolding generator.
    * Make sure you have wix-js Yeoman generator, by installing it in the terminal:
    ```npm i -g yo generator-wix-js```
    * Run ```yo wix-js``` in the terminal to scaffold your project.
  * A second alternative (less preferable) is to use the [create-react-app](https://github.com/facebookincubator/create-react-app)  scaffolding tool.

## Screenshot / Mock Up

<img src="https://static.wixstatic.com/media/32d4ec_48bef3446fb54928a0c17b6a1a7cf91e~mv2_d_1370_1218_s_2.png/v1/fill/w_1218,h_1082,al_c,usm_0.66_1.00_0.01/32d4ec_48bef3446fb54928a0c17b6a1a7cf91e~mv2_d_1370_1218_s_2.png" width="580px"/>
 
## *Bonus*
  * Add a drop-down option (HTML select element).
  * Add a radio-group option.
  * Add the ability to save Form presets (in memory), and load them back to the Builder.
  
 
