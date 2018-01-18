package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Find_Transactions_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Find_By_Transaction_ID")
	public static WebElement Find_By_Transaction_ID;

public static void verify_Find_By_Transaction_ID(String data){
		Assert.assertSame(Find_By_Transaction_ID,Find_By_Transaction_ID);
}

public static void set_Find_By_Transaction_ID(String data){
		Find_By_Transaction_ID.sendKeys(data);
}

@FindBy(how= How.ID, using = "Find_by_Transaction_ID")
	public static WebElement Find_by_Transaction_ID;

public static void verify_Find_by_Transaction_ID(String data){
		Assert.assertSame(Find_by_Transaction_ID,Find_by_Transaction_ID);
}

public static void set_Find_by_Transaction_ID(String data){
		Find_by_Transaction_ID.sendKeys(data);
}

@FindBy(how= How.ID, using = "And")
	public static WebElement And;

public static void verify_And(String data){
		Assert.assertSame(And,And);
}

public static void set_And(String data){
		And.sendKeys(data);
}

@FindBy(how= How.ID, using = "Between")
	public static WebElement Between;

public static void verify_Between(String data){
		Assert.assertSame(Between,Between);
}

public static void set_Between(String data){
		Between.sendKeys(data);
}

@FindBy(how= How.ID, using = "Select_an_account")
	public static WebElement Select_an_account;

public static void verify_Select_an_account(String data){
		Assert.assertSame(Select_an_account,Select_an_account);
}

public static void select_Select_an_account(String data){
		Select dropdown= new Select(Select_an_account);
		 dropdown.selectByVisibleText(data);
}

@FindBy(how= How.ID, using = "Find_By_Date")
	public static WebElement Find_By_Date;

public static void verify_Find_By_Date(String data){
		Assert.assertSame(Find_By_Date,Find_By_Date);
}

public static void set_Find_By_Date(String data){
		Find_By_Date.sendKeys(data);
}

@FindBy(how= How.ID, using = "Find_Transactions")
	public static WebElement Find_Transactions;

public static void verify_Find_Transactions(String data){
		Assert.assertSame(Find_Transactions,Find_Transactions);
}

public static void click_Find_Transactions(){
		Find_Transactions.click();
}

@FindBy(how= How.ID, using = "Find_Transactions__2_")
	public static WebElement Find_Transactions__2_;

public static void verify_Find_Transactions__2_(String data){
		Assert.assertSame(Find_Transactions__2_,Find_Transactions__2_);
}

public static void click_Find_Transactions__2_(){
		Find_Transactions__2_.click();
}

@FindBy(how= How.ID, using = "Find_Transactions__1_")
	public static WebElement Find_Transactions__1_;

public static void verify_Find_Transactions__1_(String data){
		Assert.assertSame(Find_Transactions__1_,Find_Transactions__1_);
}

public static void click_Find_Transactions__1_(){
		Find_Transactions__1_.click();
}

@FindBy(how= How.ID, using = "Find_By_Amount")
	public static WebElement Find_By_Amount;

public static void verify_Find_By_Amount(String data){
		Assert.assertSame(Find_By_Amount,Find_By_Amount);
}

public static void set_Find_By_Amount(String data){
		Find_By_Amount.sendKeys(data);
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}