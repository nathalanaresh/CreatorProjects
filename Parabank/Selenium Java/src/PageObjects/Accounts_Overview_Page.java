package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Accounts_Overview_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Account")
	public static WebElement Account;

public static void verify_Account(String data){
		Assert.assertSame(Account,Account);
}

public static void field_Account(String data){
		Account.sendKeys(data);
}

@FindBy(how= How.ID, using = "Available_Amount")
	public static WebElement Available_Amount;

public static void verify_Available_Amount(String data){
		Assert.assertSame(Available_Amount,Available_Amount);
}

public static void field_Available_Amount(String data){
		Available_Amount.sendKeys(data);
}

@FindBy(how= How.ID, using = "unnamed")
	public static WebElement unnamed;

public static void verify_unnamed(String data){
		Assert.assertSame(unnamed,unnamed);
}

public static void table_unnamed(String data){
		unnamed.sendKeys(data);
}

@FindBy(how= How.ID, using = "Balance")
	public static WebElement Balance;

public static void verify_Balance(String data){
		Assert.assertSame(Balance,Balance);
}

public static void field_Balance(String data){
		Balance.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}