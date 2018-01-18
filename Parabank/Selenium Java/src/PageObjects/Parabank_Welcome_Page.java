package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Parabank_Welcome_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Username")
	public static WebElement Username;

public static void verify_Username(String data){
		Assert.assertSame(Username,Username);
}

public static void set_Username(String data){
		Username.sendKeys(data);
}

@FindBy(how= How.ID, using = "Register")
	public static WebElement Register;

public static void verify_Register(String data){
		Assert.assertSame(Register,Register);
}

public static void click_Register(){
		Register.click();
}

@FindBy(how= How.ID, using = "LOG_IN")
	public static WebElement LOG_IN;

public static void verify_LOG_IN(String data){
		Assert.assertSame(LOG_IN,LOG_IN);
}

public static void click_LOG_IN(){
		LOG_IN.click();
}

@FindBy(how= How.ID, using = "Forgot_login_info_")
	public static WebElement Forgot_login_info_;

public static void verify_Forgot_login_info_(String data){
		Assert.assertSame(Forgot_login_info_,Forgot_login_info_);
}

public static void click_Forgot_login_info_(){
		Forgot_login_info_.click();
}

@FindBy(how= How.ID, using = "Admin_Page")
	public static WebElement Admin_Page;

public static void verify_Admin_Page(String data){
		Assert.assertSame(Admin_Page,Admin_Page);
}

public static void click_Admin_Page(){
		Admin_Page.click();
}

@FindBy(how= How.ID, using = "Password")
	public static WebElement Password;

public static void verify_Password(String data){
		Assert.assertSame(Password,Password);
}

public static void set_Password(String data){
		Password.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}