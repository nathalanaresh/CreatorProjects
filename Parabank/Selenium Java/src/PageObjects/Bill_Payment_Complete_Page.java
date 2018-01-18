package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Bill_Payment_Complete_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Bill_Payment")
	public static WebElement Bill_Payment;

public static void verify_Bill_Payment(String data){
		Assert.assertSame(Bill_Payment,Bill_Payment);
}

public static void field_Bill_Payment(String data){
		Bill_Payment.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}