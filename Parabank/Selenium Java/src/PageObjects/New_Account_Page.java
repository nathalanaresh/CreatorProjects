package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class New_Account_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Account_Number")
	public static WebElement Account_Number;

public static void verify_Account_Number(String data){
		Assert.assertSame(Account_Number,Account_Number);
}

public static void field_Account_Number(String data){
		Account_Number.sendKeys(data);
}

@FindBy(how= How.ID, using = "Message")
	public static WebElement Message;

public static void verify_Message(String data){
		Assert.assertSame(Message,Message);
}

public static void field_Message(String data){
		Message.sendKeys(data);
}

@FindBy(how= How.ID, using = "message")
	public static WebElement message;

public static void verify_message(String data){
		Assert.assertSame(message,message);
}

public static void field_message(String data){
		message.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}