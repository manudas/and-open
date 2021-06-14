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
