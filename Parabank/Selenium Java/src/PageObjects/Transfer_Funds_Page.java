package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Transfer_Funds_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "From_Account")
	public static WebElement From_Account;

public static void verify_From_Account(String data){
		Assert.assertSame(From_Account,From_Account);
}

public static void select_From_Account(String data){
		Select dropdown= new Select(From_Account);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "TRANSFER")
	public static WebElement TRANSFER;

public static void verify_TRANSFER(String data){
		Assert.assertSame(TRANSFER,TRANSFER);
}

public static void click_TRANSFER(){
		TRANSFER.click();
}

@FindBy(how= How.ID, using = "Amount")
	public static WebElement Amount;

public static void verify_Amount(String data){
		Assert.assertSame(Amount,Amount);
}

public static void set_Amount(String data){
		Amount.sendKeys(data);
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

public static void field_unnamed(String data){
		unnamed.sendKeys(data);
}

@FindBy(how= How.ID, using = "To_Account")
	public static WebElement To_Account;

public static void verify_To_Account(String data){
		Assert.assertSame(To_Account,To_Account);
}

public static void select_To_Account(String data){
		Select dropdown= new Select(To_Account);
		 dropdown.selectByVisibleText(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}