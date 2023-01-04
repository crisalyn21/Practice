Feature: login feature


Scenario: Member successfully log in
  When user enters username
     And user enters password
    And user clicks "log in" button
  Then prompt message displayed

 Scenario: Can't login using incorrect password
  When user enters username
     And user enters incorrect password
    And user clicks "log in" button
  Then prompt message displayed


Scenario: Can't login using incorrect username
When user enters incorrect username 
    And user enters  password1
  And user clicks "log in" button
Then prompt message displayed
