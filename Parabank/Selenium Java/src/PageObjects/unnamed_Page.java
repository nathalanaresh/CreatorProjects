package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class unnamed_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "unnamed")
	public static WebElement unnamed;

public static void verify_unnamed(String data){
		Assert.assertSame(unnamed,unnamed);
}

public static void field_unnamed(String data){
		unnamed.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}