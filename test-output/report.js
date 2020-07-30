$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Java/Program/ZVariar-BDD/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Actitime",
  "description": "",
  "id": "actitime",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login of Actitime Application",
  "description": "",
  "id": "actitime;login-of-actitime-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should login to actitime",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "by giving correct \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify home page is displayed or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "actitime;login-of-actitime-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "actitime;login-of-actitime-application;;1"
    },
    {
      "cells": [
        "Sushma",
        "12345"
      ],
      "line": 11,
      "id": "actitime;login-of-actitime-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login of Actitime Application",
  "description": "",
  "id": "actitime;login-of-actitime-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should login to actitime",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "by giving correct \"Sushma\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify home page is displayed or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefnition.user_should_login_to_actitime()"
});
formatter.result({
  "duration": 27973296200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sushma",
      "offset": 19
    },
    {
      "val": "12345",
      "offset": 32
    }
  ],
  "location": "LoginStepDefnition.by_giving_correct_uname_and_password(String,String)"
});
formatter.result({
  "duration": 7016094000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefnition.verify_home_page_is_displayed_or_not()"
});
formatter.result({
  "duration": 14979800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[actiTIME - Enter Time-Track]\u003e but was:\u003c[Variar]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginStepDefnition.verify_home_page_is_displayed_or_not(LoginStepDefnition.java:44)\r\n\tat ✽.Then verify home page is displayed or not(E:/Java/Program/ZVariar-BDD/src/main/java/Features/Login.feature:7)\r\n",
  "status": "failed"
});
});