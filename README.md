Reminder app
=====

<a href=#us>User Stories</a>  |  <a href= #ts>Tech Stack</a> |  <a href= #rs>React scripts reminder</a>

[Tech Stack](#ts)
-----
Part  | Using
------------- | -------------
Testing Framework  | Jest
Database  | PostgreSQL
FrontEnd  | React
Server environment  | Node
To connect to DB  | Express
Linter  | ESLint
Hosted on  | Heroku


[User Stories](#us)
-----

### MVP

```
As a user
So that I can save a notes
I want to enter a note with a due date
```

```
As a user
So that I can add reminders
I want to select how long before the due date I want to be reminded
```

```
As a user
So that I can view saved reminders
I want to see a list of notes, due dates and reminders
```

### Extending the app

```
As a user
So that I can reset a reminder for the following year
I want a reschedule option on the reminder
```

```
As a user
So that I can sort my reminders
I want to add a tag to the reminder by type
```

```
As a user
So that I can filter my reminders
I want to apply a tag filter to the reminder list
```

### Google calendar integration

```
As a user
So that I don't have to remember another login
I want to use my google credentials to log in
```

```
As a user
So that I can see everything in my usual calendar
I want the notes and reminders to show in my google calendar
```

### Text integration

```
As a user
So that I have an early heads up
I want a reminder message(?) 1 month in advance
```

```
As a user
So that I get a final chance to act
I want a reminder message(?) 1 week in advance
```

```
As a user
So that I get a final chance to act
I want a reminder message(?) 1 week in advance
```

[React Scripts Reminder](#rs)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
