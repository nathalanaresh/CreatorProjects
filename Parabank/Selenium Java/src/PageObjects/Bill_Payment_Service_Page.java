package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Bill_Payment_Service_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "From_Account")
	public static WebElement From_Account;

public static void verify_From_Account(String data){
		Assert.assertSame(From_Account,From_Account);
}

public static void select_From_Account(String data){
		Select dropdown= new Select(From_Account);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Account")
	public static WebElement Account;

public static void verify_Account(String data){
		Assert.assertSame(Account,Account);
}

public static void set_Account(String data){
		Account.sendKeys(data);
}

@FindBy(how= How.ID, using = "Address")
	public static WebElement Address;

public static void verify_Address(String data){
		Assert.assertSame(Address,Address);
}

public static void set_Address(String data){
		Address.sendKeys(data);
}

@FindBy(how= How.ID, using = "Payee_Name")
	public static WebElement Payee_Name;

public static void verify_Payee_Name(String data){
		Assert.assertSame(Payee_Name,Payee_Name);
}

public static void set_Payee_Name(String data){
		Payee_Name.sendKeys(data);
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

@FindBy(how= How.ID, using = "SEND_PAYMENT")
	public static WebElement SEND_PAYMENT;

public static void verify_SEND_PAYMENT(String data){
		Assert.assertSame(SEND_PAYMENT,SEND_PAYMENT);
}

public static void click_SEND_PAYMENT(){
		SEND_PAYMENT.click();
}

@FindBy(how= How.ID, using = "Amount")
	public static WebElement Amount;

public static void verify_Amount(String data){
		Assert.assertSame(Amount,Amount);
}

public static void set_Amount(String data){
		Amount.sendKeys(data);
}

@FindBy(how= How.ID, using = "City")
	public static WebElement City;

public static void verify_City(String data){
		Assert.assertSame(City,City);
}

public static void set_City(String data){
		City.sendKeys(data);
}

@FindBy(how= How.ID, using = "Verify_Account")
	public static WebElement Verify_Account;

public static void verify_Verify_Account(String data){
		Assert.assertSame(Verify_Account,Verify_Account);
}

public static void set_Verify_Account(String data){
		Verify_Account.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}