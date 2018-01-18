package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Update_Profile_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "UPDATE_PROFILE")
	public static WebElement UPDATE_PROFILE;

public static void verify_UPDATE_PROFILE(String data){
		Assert.assertSame(UPDATE_PROFILE,UPDATE_PROFILE);
}

public static void click_UPDATE_PROFILE(){
		UPDATE_PROFILE.click();
}

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

@FindBy(how= How.ID, using = "Phone")
	public static WebElement Phone;

public static void verify_Phone(String data){
		Assert.assertSame(Phone,Phone);
}

public static void set_Phone(String data){
		Phone.sendKeys(data);
}

@FindBy(how= How.ID, using = "First_Name")
	public static WebElement First_Name;

public static void verify_First_Name(String data){
		Assert.assertSame(First_Name,First_Name);
}

public static void set_First_Name(String data){
		First_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "City")
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

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}