package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Apply_for_a_Loan_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "From_Account")
	public static WebElement From_Account;

public static void verify_From_Account(String data){
		Assert.assertSame(From_Account,From_Account);
}

public static void select_From_Account(String data){
		Select dropdown= new Select(From_Account);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Apply_Now")
	public static WebElement Apply_Now;

public static void verify_Apply_Now(String data){
		Assert.assertSame(Apply_Now,Apply_Now);
}

public static void click_Apply_Now(){
		Apply_Now.click();
}

@FindBy(how= How.ID, using = "Down_Payment")
	public static WebElement Down_Payment;

public static void verify_Down_Payment(String data){
		Assert.assertSame(Down_Payment,Down_Payment);
}

public static void set_Down_Payment(String data){
		Down_Payment.sendKeys(data);
}

@FindBy(how= How.ID, using = "Existing_Accounts")
	public static WebElement Existing_Accounts;

public static void verify_Existing_Accounts(String data){
		Assert.assertSame(Existing_Accounts,Existing_Accounts);
}

public static void click_Existing_Accounts(){
		Existing_Accounts.click();
}

@FindBy(how= How.ID, using = "Account_Overview")
	public static WebElement Account_Overview;

public static void verify_Account_Overview(String data){
		Assert.assertSame(Account_Overview,Account_Overview);
}

public static void click_Account_Overview(){
		Account_Overview.click();
}

@FindBy(how= How.ID, using = "Loan_Amount")
	public static WebElement Loan_Amount;

public static void verify_Loan_Amount(String data){
		Assert.assertSame(Loan_Amount,Loan_Amount);
}

public static void set_Loan_Amount(String data){
		Loan_Amount.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}