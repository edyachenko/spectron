Feature: Anatha Wallet

  Scenario: Simple test successfull 2
    When I create account
    Then I wait for Chart Pie is loaded
    When I open Menu
    And I open Wallet
    And I open Ripple Asset
    Then I receive Address Text
    When I send information
    Then verify something

  Scenario: Simple test fail 1
    When I create account
    Then Something is false
