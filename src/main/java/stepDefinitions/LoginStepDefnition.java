package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefnition 
{
	public WebDriver driver;
	@Given("^user should login to actitime$")
	public void user_should_login_to_actitime() throws InterruptedException
	{
		System.setProperty("webdriver.gecko.driver","./Softwares/geckodriver.exe");
		driver=new FirefoxDriver();
		
		driver.get("http://54.67.70.56/admin/login.php");
		
		Thread.sleep(3000);
	}

	@When("^by giving correct \"(.*)\" and \"(.*)\"$")//Simple Data driven
	public void by_giving_correct_uname_and_password(String uname,String pwd) throws Throwable
	{
		driver.findElement(By.id("login")).sendKeys(uname);;
		
		driver.findElement(By.name("password")).sendKeys(pwd);
		
		driver.findElement(By.xpath("//input[@value='Log In']")).click(); 
		
		Thread.sleep(3000);
	}

	@Then("^verify home page is displayed or not$")
	public void verify_home_page_is_displayed_or_not() throws Throwable 
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Variar",title);
	}

}
