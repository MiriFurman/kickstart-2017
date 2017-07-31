# React Workshop - Kickstart 2017, Day 1


## Goal

After this day, you will understand what React aims to solve, will be familiar with it's basic API and will some basic components, stateless and statefull, using basic (and most used) features; props, state, callbacks, children, composition and more.
By the end of it, you will have a working Todo App and over a dozen components done in React.
Advanced learners will proceed to learning more about the concept of Virtual DOM, and read about some of the alternatives to React and understand the differences.
*It is importnant that even those with previous experience with React will complete all the exercises, and only then will continue to advanced material.*


## Part A - Syntax & Stateless components

Topics: Motivation and philosophy of React, JSX syntax, React stateless (pure) components, props, inline styles, attributes, event handlers, component composition and children mapping.

### Exercises

Please complete the exercises in order, and push them into the 

### Resources:
- TODO: WESBOS Relevant parts
- http://buildwithreact.com/tutorial

#### 1. Title Component

`<Title text='Bob'>`

#### 2. Header 

`<Header title='Bob' subtitle='Bobette'/>`

#### 3. Image Viewer

`<ImageView src='bob.png' caption='dfgfdg'/>`

#### 4. Gallery

`<SimpleGallery images={['bob.png', 'david.png']}/>`

#### 5. Todo Item

`<TodoItem completed={true} title='Buy milk'/>`

#### 6. Canvas

`<SimpleCanvas data={[['red', 'white'], ['yellow', 'green]]} width=500 height=500/>`

#### 7. Button

`<Button onClick={alertClickedNormally} onSpecialClick={alertClickedSpecial}/>`

#### 8. Todo Item v2

Add a remove button to our todo item from #5, that will call a new prop - `onRemove` when clicked.
Bonus: use the button from the previous exercise and use `window.confirm` when a normal click is used, but skip the confirmation when the t special click is triggered.

#### 9. Canvas v1.6
Add a new prop to our cancas from #6, `onCellClick={handler}` that will receive the row and col of the clicked cell.

#### 10. Static Todo App
`<TodoApp items={[{title: 'Reach 1M', done: true}, {title: 'Reach 5M', done: false}]}/>`


### Advanced
- https://github.com/workshopper/learnyoureact
- https://github.com/asbjornenge/thinking-in-react
- https://www.youtube.com/watch?v=dflUbuHEITk
- http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
- http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/
- Play around with other view libraries; vue.js, preact, [yoyo](https://github.com/maxogden/yo-yo)


## Part B - Syntax & Stateless components

Topics: Component classes, state, setState, state vs props


### Exercises


#### 1. Counter
`<Counter initial={5}/>' -> (-) 5 (+)`

#### 2. Gallery v2
Statefull Gallery - Create a component that wraps `<SimpleGallery>` from #4b, and adds a button that `window.prompt`s for a new src and caption, and adds it to the list.

#### 3. Canvas v2
Change the canvas from #6 so that clicking on each cell will toggle the color (cycling between some colors, i.e. 'red', 'yellow', 'blue', 'orange')

#### 4. Working Todo App
Change <TodoApp> from #10 so the items are now stateful. Add an input and "add" button to your todo app from , and also make sure that removing items works. Bonus: add a navigation bar that allows users to filter between tasks; "only completed", "only incomplete" and "all". Bonus: add a textual search bar.


