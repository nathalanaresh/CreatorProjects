package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Transaction_Error_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Error")
	public static WebElement Error;

public static void verify_Error(String data){
		Assert.assertSame(Error,Error);
}

public static void field_Error(String data){
		Error.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}