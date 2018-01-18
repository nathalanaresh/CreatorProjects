package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class enter_URL_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "url")
	public static WebElement url;

public static void verify_url(String data){
		Assert.assertSame(url,url);
}

public static void field_url(String data){
		driver.get(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}