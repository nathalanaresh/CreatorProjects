package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Transaction_Result_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Transaction_Results")
	public static WebElement Transaction_Results;

public static void verify_Transaction_Results(String data){
		Assert.assertSame(Transaction_Results,Transaction_Results);
}

public static void table_Transaction_Results(String data){
		Transaction_Results.sendKeys(data);
}

@FindBy(how= How.ID, using = "Debit")
	public static WebElement Debit;

public static void verify_Debit(String data){
		Assert.assertSame(Debit,Debit);
}

public static void field_Debit(String data){
		Debit.sendKeys(data);
}

@FindBy(how= How.ID, using = "Credit")
	public static WebElement Credit;

public static void verify_Credit(String data){
		Assert.assertSame(Credit,Credit);
}

public static void field_Credit(String data){
		Credit.sendKeys(data);
}

@FindBy(how= How.ID, using = "Transaction")
	public static WebElement Transaction;

public static void verify_Transaction(String data){
		Assert.assertSame(Transaction,Transaction);
}

public static void field_Transaction(String data){
		Transaction.sendKeys(data);
}

@FindBy(how= How.ID, using = "Date")
	public static WebElement Date;

public static void verify_Date(String data){
		Assert.assertSame(Date,Date);
}

public static void field_Date(String data){
		Date.sendKeys(data);
}

@FindBy(how= How.ID, using = "Result")
	public static WebElement Result;

public static void verify_Result(String data){
		Assert.assertSame(Result,Result);
}

public static void table_Result(String data){
		Result.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}