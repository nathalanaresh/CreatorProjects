package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Open_New_Account_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Open_New_Account")
	public static WebElement Open_New_Account;

public static void verify_Open_New_Account(String data){
		Assert.assertSame(Open_New_Account,Open_New_Account);
}

public static void click_Open_New_Account(){
		Open_New_Account.click();
}

@FindBy(how= How.ID, using = "Account_Overview")
	public static WebElement Account_Overview;

public static void verify_Account_Overview(String data){
		Assert.assertSame(Account_Overview,Account_Overview);
}

public static void click_Account_Overview(){
		Account_Overview.click();
}

@FindBy(how= How.ID, using = "Existing_Account")
	public static WebElement Existing_Account;

public static void verify_Existing_Account(String data){
		Assert.assertSame(Existing_Account,Existing_Account);
}

public static void click_Existing_Account(){
		Existing_Account.click();
}

@FindBy(how= How.ID, using = "Account_Type")
	public static WebElement Account_Type;

public static void verify_Account_Type(String data){
		Assert.assertSame(Account_Type,Account_Type);
}

public static void select_Account_Type(String data){
		Select dropdown= new Select(Account_Type);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Request_Loan")
	public static WebElement Request_Loan;

public static void verify_Request_Loan(String data){
		Assert.assertSame(Request_Loan,Request_Loan);
}

public static void click_Request_Loan(){
		Request_Loan.click();
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}