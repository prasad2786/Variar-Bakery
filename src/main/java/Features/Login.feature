Feature: Actitime

Scenario Outline: Login of Actitime Application

Given user should login to actitime
When by giving correct "<username>" and "<password>"
Then verify home page is displayed or not

Examples:
| username | password |
| Sushma | 12345 |