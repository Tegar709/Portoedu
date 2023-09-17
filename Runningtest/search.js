import Search from '../PatternObject/search.result.js';
 
import {Given, When, Then,} from "cypress-cucumber-preprocessor/steps";

Given("I am on the homepage", () => {
  Search.visit()
});

When('I type "bank" in the search bar', () => {
 
  Search.search();
});

Then('I should see search results "Zero - Personal Banking - Loans - Credit Cards"', () => {
  
  Search.searchresult();
});