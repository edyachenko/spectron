Feature: Anatha Wallet

  Scenario: Simple test
    When I create account
    Then I wait for Chart Pie is loaded
    When I open Menu
    And I open Wallet
    And I open Ripple Asset
    Then I receive Address Text
    When I send information
    Then verify something