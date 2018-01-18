package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Invalid_Credentials_Page extends PageObjectBase{
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