Feature: Admin can view Main Page

Scenario: Admin sees Main Page
#     Then Admin sees welcome banner
Then Admin sees welcome banner

Scenario: Admin sees Safer Gaming page
    When Admin clicks "Safer Gaming" 
    Then Admin should be routed to Safer Gaming page
