package PageObjects;
import org.testng.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import utilities.WebController;
import utilities.PageObjectBase;
@SuppressWarnings("deprecation")
public class Account_Services_Page extends PageObjectBase{
@FindBy(how= How.ID, using = "Transfer_Funds")
	public static WebElement Transfer_Funds;

public static void verify_Transfer_Funds(String data){
		Assert.assertSame(Transfer_Funds,Transfer_Funds);
}

public static void click_Transfer_Funds(){
		Transfer_Funds.click();
}

@FindBy(how= How.ID, using = "Bill_Pay")
	public static WebElement Bill_Pay;

public static void verify_Bill_Pay(String data){
		Assert.assertSame(Bill_Pay,Bill_Pay);
}

public static void click_Bill_Pay(){
		Bill_Pay.click();
}

@FindBy(how= How.ID, using = "Open_New_Account")
	public static WebElement Open_New_Account;

public static void verify_Open_New_Account(String data){
		Assert.assertSame(Open_New_Account,Open_New_Account);
}

public static void click_Open_New_Account(){
		Open_New_Account.click();
}

@FindBy(how= How.ID, using = "Account_Overview")
	public static WebElement Account_Overview;

public static void verify_Account_Overview(String data){
		Assert.assertSame(Account_Overview,Account_Overview);
}

public static void click_Account_Overview(){
		Account_Overview.click();
}

@FindBy(how= How.ID, using = "Find_Transactions")
	public static WebElement Find_Transactions;

public static void verify_Find_Transactions(String data){
		Assert.assertSame(Find_Transactions,Find_Transactions);
}

public static void click_Find_Transactions(){
		Find_Transactions.click();
}

@FindBy(how= How.ID, using = "Update_Contact_Info")
	public static WebElement Update_Contact_Info;

public static void verify_Update_Contact_Info(String data){
		Assert.assertSame(Update_Contact_Info,Update_Contact_Info);
}

public static void click_Update_Contact_Info(){
		Update_Contact_Info.click();
}

@FindBy(how= How.ID, using = "Log_Out")
	public static WebElement Log_Out;

public static void verify_Log_Out(String data){
		Assert.assertSame(Log_Out,Log_Out);
}

public static void click_Log_Out(){
		Log_Out.click();
}

@FindBy(how= How.ID, using = "Request_Loan")
	public static WebElement Request_Loan;

public static void verify_Request_Loan(String data){
		Assert.assertSame(Request_Loan,Request_Loan);
}

public static void click_Request_Loan(){
		Request_Loan.click();
}

public static void verify_Text(String data){
	Assert.assertSame(data,data);
}
}