package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Invalid_Register_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Invalid_Register")
	public static WebElement Invalid_Register;

public static void verify_Invalid_Register(String data){
		Assert.assertSame(Invalid_Register,Invalid_Register);
}

public static void field_Invalid_Register(String data){
		Invalid_Register.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}