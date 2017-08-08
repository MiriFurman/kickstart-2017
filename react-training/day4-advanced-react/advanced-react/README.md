# Advanced React

### Task 1 - Context

Add a translation method to the application context.
* Translations are taken from a JSON according to key.
* Translate these application texts with context:
  * Label on reset buttons of each Widget
  * Action reports labels

`(key, defaultValue) => translation`

Add a language JSON, and fill it with some translations to check your work.   
Example - 
````
{
   "resetLabel": "нулиране"
   "actionSourceLabel": "източник"
   "clearLog": "Ясен дневник"
}
````


### Task 2 - Widget
Add a new "RGB Widget" to the Widgets area (left side)
* Contains a square with a background color
* 3 input fields as controls, each a number in range 0 - 255
* The square background color should reflect the selected RGB.
* On mouse hover - should change color back and forth from 255,255,255 to 0,0,0 (any way you want)
* Inputs can be steppers or sliders doesn’t matter
* Report actions as the other widgets do

### Task 3 - Remove code duplication
Our widgets contain a lot of duplicated code.  
The only think worse than duplicated code is duplicated css   
Find a way to avoid duplication in our widgets


### Task 4 - Mixin
Create a hoverMixin and use it across the application components:
* Widgets
* Action reports
* Footer

### Task 5 - HOC
Create an HOC called "withProps"   
``withProps(propsGetter, Component)    
A HOC that adds the result of propsGetter to the wrapped component.     
    
**Arguments**
* propsGetter(() => addedProps) (_Function_): returns on object that would be added to the wrapped component props
* A React class to wrap

**Returns**     
A Wrapped React component class
    
**Use your HOC**    
You are given a component - OddButton.   
It shows a button that becomes disabled if the day of the month is odd.
          
Implement a React component class "OddButtonWithCurrentDate"    
It should use your withProps to wrap OddButton class (given in the project) so that OddButton gets the current Date in props.   


