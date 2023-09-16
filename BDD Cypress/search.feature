Feature: Website Search
  As a user
  I want to search for information on the website
  So that I can find relevant content

  Scenario: Searching for information
    Given I am on the homepage
    When I enter "bank" in the search bar
    And I click the "Search" button
    Then I should see search results
    And the results should include "personal banking"