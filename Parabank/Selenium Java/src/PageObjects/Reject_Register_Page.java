package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Reject_Register_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "UserName")
	public static WebElement UserName;

public static void verify_UserName(String data){
		Assert.assertSame(UserName,UserName);
}

public static void field_UserName(String data){
		UserName.sendKeys(data);
}

@FindBy(how= How.ID, using = "Zip_Code")
	public static WebElement Zip_Code;

public static void verify_Zip_Code(String data){
		Assert.assertSame(Zip_Code,Zip_Code);
}

public static void field_Zip_Code(String data){
		Zip_Code.sendKeys(data);
}

@FindBy(how= How.ID, using = "State")
	public static WebElement State;

public static void verify_State(String data){
		Assert.assertSame(State,State);
}

public static void field_State(String data){
		State.sendKeys(data);
}

@FindBy(how= How.ID, using = "Phone")
	public static WebElement Phone;

public static void verify_Phone(String data){
		Assert.assertSame(Phone,Phone);
}

public static void field_Phone(String data){
		Phone.sendKeys(data);
}

@FindBy(how= How.ID, using = "Adress")
	public static WebElement Adress;

public static void verify_Adress(String data){
		Assert.assertSame(Adress,Adress);
}

public static void field_Adress(String data){
		Adress.sendKeys(data);
}

@FindBy(how= How.ID, using = "First_Name")
	public static WebElement First_Name;

public static void verify_First_Name(String data){
		Assert.assertSame(First_Name,First_Name);
}

public static void field_First_Name(String data){
		First_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "Confirm")
	public static WebElement Confirm;

public static void verify_Confirm(String data){
		Assert.assertSame(Confirm,Confirm);
}

public static void field_Confirm(String data){
		Confirm.sendKeys(data);
}

@FindBy(how= How.ID, using = "City")
	public static WebElement City;

public static void verify_City(String data){
		Assert.assertSame(City,City);
}

public static void field_City(String data){
		City.sendKeys(data);
}

@FindBy(how= How.ID, using = "Last_Name")
	public static WebElement Last_Name;

public static void verify_Last_Name(String data){
		Assert.assertSame(Last_Name,Last_Name);
}

public static void field_Last_Name(String data){
		Last_Name.sendKeys(data);
}

@FindBy(how= How.ID, using = "SSN")
	public static WebElement SSN;

public static void verify_SSN(String data){
		Assert.assertSame(SSN,SSN);
}

public static void field_SSN(String data){
		SSN.sendKeys(data);
}

@FindBy(how= How.ID, using = "Password")
	public static WebElement Password;

public static void verify_Password(String data){
		Assert.assertSame(Password,Password);
}

public static void field_Password(String data){
		Password.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}