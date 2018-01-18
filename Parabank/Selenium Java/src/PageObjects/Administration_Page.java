package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Administration_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Initial_Balance")
	public static WebElement Initial_Balance;

public static void verify_Initial_Balance(String data){
		Assert.assertSame(Initial_Balance,Initial_Balance);
}

public static void set_Initial_Balance(String data){
		Initial_Balance.sendKeys(data);
}

@FindBy(how= How.ID, using = "Available_Funds")
	public static WebElement Available_Funds;

public static void verify_Available_Funds(String data){
		Assert.assertSame(Available_Funds,Available_Funds);
}

public static void click_Available_Funds(){
		Available_Funds.click();
}

@FindBy(how= How.ID, using = "SUBMIT")
	public static WebElement SUBMIT;

public static void verify_SUBMIT(String data){
		Assert.assertSame(SUBMIT,SUBMIT);
}

public static void click_SUBMIT(){
		SUBMIT.click();
}

@FindBy(how= How.ID, using = "Loan_Processor")
	public static WebElement Loan_Processor;

public static void verify_Loan_Processor(String data){
		Assert.assertSame(Loan_Processor,Loan_Processor);
}

public static void select_Loan_Processor(String data){
		Select dropdown= new Select(Loan_Processor);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Min_Balance")
	public static WebElement Min_Balance;

public static void verify_Min_Balance(String data){
		Assert.assertSame(Min_Balance,Min_Balance);
}

public static void set_Min_Balance(String data){
		Min_Balance.sendKeys(data);
}

@FindBy(how= How.ID, using = "Loan_Provider")
	public static WebElement Loan_Provider;

public static void verify_Loan_Provider(String data){
		Assert.assertSame(Loan_Provider,Loan_Provider);
}

public static void select_Loan_Provider(String data){
		Select dropdown= new Select(Loan_Provider);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Threshold")
	public static WebElement Threshold;

public static void verify_Threshold(String data){
		Assert.assertSame(Threshold,Threshold);
}

public static void set_Threshold(String data){
		Threshold.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}