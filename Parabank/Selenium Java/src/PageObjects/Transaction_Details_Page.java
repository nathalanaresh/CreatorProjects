package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Transaction_Details_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Type")
	public static WebElement Type;

public static void verify_Type(String data){
		Assert.assertSame(Type,Type);
}

public static void field_Type(String data){
		Type.sendKeys(data);
}

@FindBy(how= How.ID, using = "Description")
	public static WebElement Description;

public static void verify_Description(String data){
		Assert.assertSame(Description,Description);
}

public static void field_Description(String data){
		Description.sendKeys(data);
}

@FindBy(how= How.ID, using = "Amount")
	public static WebElement Amount;

public static void verify_Amount(String data){
		Assert.assertSame(Amount,Amount);
}

public static void field_Amount(String data){
		Amount.sendKeys(data);
}

@FindBy(how= How.ID, using = "Date")
	public static WebElement Date;

public static void verify_Date(String data){
		Assert.assertSame(Date,Date);
}

public static void field_Date(String data){
		Date.sendKeys(data);
}

@FindBy(how= How.ID, using = "Transaction_ID")
	public static WebElement Transaction_ID;

public static void verify_Transaction_ID(String data){
		Assert.assertSame(Transaction_ID,Transaction_ID);
}

public static void field_Transaction_ID(String data){
		Transaction_ID.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}