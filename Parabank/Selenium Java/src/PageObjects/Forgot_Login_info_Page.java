package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Forgot_Login_info_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Address")
	public static WebElement Address;

public static void verify_Address(String data){
		Assert.assertSame(Address,Address);
}

public static void set_Address(String data){
		Address.sendKeys(data);
}

@FindBy(how= How.ID, using = "Zip_Code")
	public static WebElement Zip_Code;

public static void verify_Zip_Code(String data){
		Assert.assertSame(Zip_Code,Zip_Code);
}

public static void set_Zip_Code(String data){
		Zip_Code.sendKeys(data);
}

@FindBy(how= How.ID, using = "State")
	public static WebElement State;

public static void verify_State(String data){
		Assert.assertSame(State,State);
}

public static void set_State(String data){
		State.sendKeys(data);
}

@FindBy(how= How.ID, using = "First_Name")
	public static WebElement First_Name;

public static void verify_First_Name(String data){
		Assert.assertSame(First_Name,First_Name);
}

public static void set_First_Name(String data){
		First_Name.sendKeys(data);
}

@FindBy(how= How.XPATH, using = ".//city")
	public static WebElement City;

public static void verify_City(String data){
		Assert.assertSame(City,City);
}

public static void set_City(String data){
		City.sendKeys(data);
}

@FindBy(how= How.ID, using = "Last_Name")
	public static WebElement Last_Name;

public static void verify_Last_Name(String data){
		Assert.assertSame(Last_Name,Last_Name);
}

public static void set_Last_Name(String data){
		Last_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "FIND_MY_LOGIN_INFO")
	public static WebElement FIND_MY_LOGIN_INFO;

public static void verify_FIND_MY_LOGIN_INFO(String data){
		Assert.assertSame(FIND_MY_LOGIN_INFO,FIND_MY_LOGIN_INFO);
}

public static void click_FIND_MY_LOGIN_INFO(){
		FIND_MY_LOGIN_INFO.click();
}

@FindBy(how= How.ID, using = "SSN")
	public static WebElement SSN;

public static void verify_SSN(String data){
		Assert.assertSame(SSN,SSN);
}

public static void set_SSN(String data){
		SSN.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}