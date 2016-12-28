# React-Redux App to track task status

## Goal
* TODO app
* Each task has three phases that have to be completed in order to close the task

## React Components
* Apps
* TaskList
* Task

## Redux Actions
* Create new task
* Update task

## Redux Reducers
* Tasks

## Redux state
* Task: object
* TaskList: array of objects

## Model
* JSON file

## Enzyme: functionality to test
* Display list of tasks
* Create new task
* Update task


# Log
* Basic components: App, TaskList, Task
* Basic redux implementation: loadTasks action, tasksReducer
* Basic task status functionality: colored circles and button.
* Integrate status functionality with redux: update color state.
 * input onChange: update this.state.currentTask with eventObject.target.value
 * form onSubmit: call preventDefault(), call updateTask(currentTask), empty this.state.currentTask
 * updateTask action: map through the state to find the item, then update the color field
* Create new task
 * component: form
 * action: createTask
 * reducer: add the new task object to state array

* Delete a task
 * Delete button
 * Delete action
 * Reducer: filter the state array without the task to delete

* Update a task
 * Display the task in a form: update button sets condition 'editing', that displays UpdateTask component with placeholders
 * Submit changes
 * Call updateTask action
 * Reducer: find the task in the state array and update it

* Separate update task functionality
 * Part one: isolate editing in Component state
 * Part two: isolate UpdateTask Component

* Error logging:
 * if we do not update the task, editedTask reaches the reducer -- FIXED
 * if we update the task, editedTask does not reach the reducer -- FIXED
 * if we do not update the task, it results an empty task -- FIXED with "no update button"
 * it does not update the task if we do not change the taskID: this makes it impossible to update a task properly -- FIXED
 with heterodox solution (todo: find the orthodox one).
































# Using: Performance-optimized Boilerplate for React Apps with Webpack, Redux, Mocha, Chai and Enzyme

### Webpack
* Module packaging
* Development
* Production pipeline automation

### Webpack configuration: main features
* See notes in webpack.config.js

### Webpack loaders
* css-loader: uses @import instead of require()
* postcss-loader: adds css post-processing capabilities
* style-loader: turns css into js modules that inject style tags
* json-loader: allows to import json files

### Webpack plugins
* html-webpack-plugin: generates index.html from a template
* copy-webpack-plugin: copy folders from source to build

### Other config files
* autoprefixer: automatic vendor prefixes for postcss
* normalize.css: cross-browser reset file
* precss: allows us to use variables and mixins in postcss
* postcss-easy-import: allows us to configure the @import statements via webpack

### Webpack development server
* webpack-development-server

### Babel configuration
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-stage-1
* babel-preset-react
* babel-preset-airbnb (enzyme testing)
* babel-preset-hmre (hot reloading, required only during development)

### Performance optimization
* clean-webpack-plugin: clear build folder before each build
* extract-text-webpack-plugin: css in a single file
* html-minifier: html minification
* css minification: the css-loader uses css-nano
* see notes in webpack.prod.config.js: only dependencies (no devDependencies), add chunkhash to filenames (only updated files are
  downloaded: optimizes browser cache and CDN speed)
