package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Loan_Request_Processed_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Status")
	public static WebElement Status;

public static void verify_Status(String data){
		Assert.assertSame(Status,Status);
}

public static void field_Status(String data){
		Status.sendKeys(data);
}

@FindBy(how= How.ID, using = "Account_Number")
	public static WebElement Account_Number;

public static void verify_Account_Number(String data){
		Assert.assertSame(Account_Number,Account_Number);
}

public static void field_Account_Number(String data){
		Account_Number.sendKeys(data);
}

@FindBy(how= How.ID, using = "message")
	public static WebElement message;

public static void verify_message(String data){
		Assert.assertSame(message,message);
}

public static void field_message(String data){
		message.sendKeys(data);
}

@FindBy(how= How.ID, using = "Loan_Provider")
	public static WebElement Loan_Provider;

public static void verify_Loan_Provider(String data){
		Assert.assertSame(Loan_Provider,Loan_Provider);
}

public static void field_Loan_Provider(String data){
		Loan_Provider.sendKeys(data);
}

@FindBy(how= How.ID, using = "Date")
	public static WebElement Date;

public static void verify_Date(String data){
		Assert.assertSame(Date,Date);
}

public static void field_Date(String data){
		Date.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}