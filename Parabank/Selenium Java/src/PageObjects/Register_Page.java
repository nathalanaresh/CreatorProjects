package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Register_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Address")
	public static WebElement Address;

public static void verify_Address(String data){
		Assert.assertSame(Address,Address);
}

public static void set_Address(String data){
		Address.sendKeys(data);
}

@FindBy(how= How.ID, using = "First_Name")
	public static WebElement First_Name;

public static void verify_First_Name(String data){
		Assert.assertSame(First_Name,First_Name);
}

public static void set_First_Name(String data){
		First_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "Confirm")
	public static WebElement Confirm;

public static void verify_Confirm(String data){
		Assert.assertSame(Confirm,Confirm);
}

public static void set_Confirm(String data){
		Confirm.sendKeys(data);
}

@FindBy(how= How.ID, using = "unnamed")
	public static WebElement unnamed;

public static void verify_unnamed(String data){
		Assert.assertSame(unnamed,unnamed);
}

public static void select_unnamed(String data){
		Select dropdown= new Select(unnamed);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "City")
	public static WebElement City;

public static void verify_City(String data){
		Assert.assertSame(City,City);
}

public static void set_City(String data){
		City.sendKeys(data);
}

@FindBy(how= How.ID, using = "SSN")
	public static WebElement SSN;

public static void verify_SSN(String data){
		Assert.assertSame(SSN,SSN);
}

public static void set_SSN(String data){
		SSN.sendKeys(data);
}

@FindBy(how= How.ID, using = "Zip_Code")
	public static WebElement Zip_Code;

public static void verify_Zip_Code(String data){
		Assert.assertSame(Zip_Code,Zip_Code);
}

public static void set_Zip_Code(String data){
		Zip_Code.sendKeys(data);
}

@FindBy(how= How.ID, using = "Username")
	public static WebElement Username;

public static void verify_Username(String data){
		Assert.assertSame(Username,Username);
}

public static void set_Username(String data){
		Username.sendKeys(data);
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

@FindBy(how= How.ID, using = "Dob")
	public static WebElement Dob;

public static void verify_Dob(String data){
		Assert.assertSame(Dob,Dob);
}

public static void set_Dob(String data){
		Dob.sendKeys(data);
}

@FindBy(how= How.ID, using = "Last_Name")
	public static WebElement Last_Name;

public static void verify_Last_Name(String data){
		Assert.assertSame(Last_Name,Last_Name);
}

public static void set_Last_Name(String data){
		Last_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "RIGISTER")
	public static WebElement RIGISTER;

public static void verify_RIGISTER(String data){
		Assert.assertSame(RIGISTER,RIGISTER);
}

public static void click_RIGISTER(){
		RIGISTER.click();
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