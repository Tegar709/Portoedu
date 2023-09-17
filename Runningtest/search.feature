Feature: Website Search
  As a user
  I want to search for information on the website
  So that I can find relevant content

  Scenario: Searching for information
    Given I am on the homepage
    When I type "bank" in the search bar
    Then I should see search results "Zero - Personal Banking - Loans - Credit Cards"
    