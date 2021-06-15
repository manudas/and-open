# &amp;Open

## &amp;Open Coding Challenge

## Introduction

Please develop a single-screen application that allows a user to interactively filter a data set of users based on certain criteria, to narrow down the number of users. The app should present a set of interactive filters, a graph of matching users and a table of matching users. Changes to the filters should modify the contents of the graph and table in realtime.

```javascript
export const Users = [
	{ id: '1', birthday: 3, spend: 1000, region: 'United States', gender: 'Female'},
	{ id: '2', birthday: 12, spend: 2000, region: 'APAC', gender: 'Female'},
	{ id: '3', birthday: 10, spend: 4000, region: 'Asia', gender: 'Female'},
	{ id: '4', birthday: 9, spend: 2109, region: 'Latin America', gender: 'Female'},
	...
];
```

You should generate a test file that has at least 1000 rows with users in this format and include this as instance data on your page.

 - id is unique and numeric sequential
 - birthday is a number between 1 and 12 (indicating month of birth)
 - spend is a number between 0 and 5000, indicating how much a customer has spent with the company in dollars
 - region is an enum of ‘United States’, ‘Europe’, ‘APAC’, or ‘Latin America’
 - gender is ‘Male’, or ‘Female’

The intention of this mini-application is to calculate the costs involved in giving a $5 coupon to each of these customers over the course of a year, if they received it on their birthday.


## Requirements

Please use the UI library Ant.design (“antd”) for the tables (https://ant.design/components/table/). Your choice of graphing library is up to you, but we can recommend chart.js as an option if you don’t have a preference.

The below mockup shows an example of how this could look, with three interactive filters above (minimum spend, region and gender), and a graph below. A table is not shown but should be rendered below the graph. This visualisation is not prescriptive, so yours can look different as long as the logic is correct.

The graph should redraw itself dynamically based on the UI state, so that users with spend less than minimum spend are filtered from the graph and table as the slider is interacted with. Similarly a selection in the region dropdown should filter the data set to just those users. Gender can be filtered by either male, female or both (i.e., no filter applied).

The graph should plot the count of users that remain after the filters are applied, bucketed by their month of birth (the “monthly” line). A second line (labelled “cumulative” in the diagram above) should show the accumulated cost over the course of the year if every one of those users was given (and redeemed) a $5 discount. So if the “monthly” line was plotted at 10 and 12 for January and February, for example, the “cumulative” line would be plotted at $50 (10 × $5) and $110 (22 × $5).

Please include documentation on how to run this project from scratch and view in the browser, assuming that the target machine has git and yarn installed. You can build the react app statically or serve it from a local server as preferred.

## Instructions
The answers for the background questions will be at the end of this document

### Download the sources

To download the sources you can clone the repository. For this to be done, open a terminal in your operating system and type:
```bash
git clone https://github.com/manudas/and-open.git
```

Once you have downloaded the sources, you can build the assets or run the unit tests

### Build the assets
Open the folder you cloned before:
```bash
cd and-open
```
If you are running the project for the first time, you need to install the dependencies:
```bash
yarn install
```
Then run the following command:
```bash
yarn start
```
Let the assets compile. Once you get this message:

> Compiled successfully!

You'll probably have your browser open and can see the application running. In case you haven't just type the following address into your browser, or click in the link bellow:

[http://localhost:3000/](http://localhost:3000/)

### Run the unit tests
In the same folder you cloned before, just run the following command:
```bash
yarn test
```
All the contained unit tests will be run automatically

## Background Questions

### Question 1:
Please explain what is wrong with this code and what the observed behaviour might be in a component that included it.
```javascript
this.setState({count: this.state.count + 1})
```
#### Answer
setState call is an asynchronous function, meaning that is not immediately run when you call it. React could batch many of them together. In case you don't call it too often maybe you won't notice anything and your application will work as expected.
If you set your state many times in a short period of time you can find your application only applying your state update once. In reality, all your setState calls have been run, but as you relied on the current state value to compute the next state, all the function calls return the same value.
Imagine that you have many setStates batched together at some point in time, and React starts to run them all. Let's see an example:
```javascript
// this.state.count is 0 at this point in time
// now React starts to run the state update in an asynchronous way, meaning that this.state.count is the same for a bunch of different state updates:
this.state.count = this.state.count + 1 // becomes this.state.count = 0 + 1
this.state.count = this.state.count + 1 // becomes this.state.count = 0 + 1
this.state.count = this.state.count + 1 // becomes this.state.count = 0 + 1
this.state.count = this.state.count + 1 // becomes this.state.count = 0 + 1
```
So at the end after 4 updates of count, its value is only 1 and not 4.
The approach to solve this issue is to call setState with a callback. This callback is passed the previous state and the props. For this example it would be something like this:
```javascript
this.setState((previousState) => ({
    count: previousState.count + 1
}));
```
[Read more about this issue here](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

### Question 2:
Can you please explain how Redux works, assuming you were talking to a non-technical audience.
#### Answer
Redux is like a store in which you put all the necessary info that many parts of your application may need. It's common that if more than two different parts of your applications the common approach is to use a Redux store for this. This is how it works:
 - Some part of your application gets a small portion of information, maybe the birthday of a group of people. It could be that it connected to the internet to get that, or that the user typed it with their keyboard.
 - That part of your application, that wants to share this data, creates an action, let's call it BIRTHDAY_FETCHED, and attach to it all the birthday dates that it got in the previous point. Then it tells the Redux store: "Hey, I have this action, please take care of telling everybody about it"
 - Then the Redux store goes one by one throughout all the components of your application that previously showed some interest in the birthday of an user. The store provides this data to be manipulated as the interested receiver needs.
 - Once the receiver has its data in the format they needed, it proceeds to use it for its own convenience. Many of those receiver components will use the birthday to show something on the screen, for instance, a birthday congratulation if the user using the app is celebrating their birthday today.
