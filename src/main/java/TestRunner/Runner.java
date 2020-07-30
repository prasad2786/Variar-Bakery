package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="E:\\Java\\Program\\ZVariar-BDD\\src\\main\\java\\Features\\Login.feature",//path of feature file
		glue={"stepDefinitions"},//path of step definition package
		format={"pretty","html:test-output","junit:junit_xml/cucumber.xml"},//to generate different reporting formats
		monochrome=true,//displays proper readable console output
		dryRun=false,//to check mapping is proper between feature file and step definition file
		strict=true//it will check if any step is not defined in the step definition file
)

public class Runner 
{
	

}
