package testsuite;
import org.testng.annotations.Test;
import PageObjects.*;
import utilities.PageObjectBase;
import org.openqa.selenium.support.PageFactory;
import utilities.Configurations;
import javax.xml.soap.SOAPMessage;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import java.net.HttpURLConnection;
import java.util.HashMap;
import org.testng.annotations.AfterTest;
import utilities.TestReport;
import java.io.IOException;
import org.testng.Reporter;


/** Conformiq generated test case
	Test Case 4
*/
public class Test_Case_4 extends PageObjectBase
{

	public Test_Case_4()
	{
	}

	private TestReport testReport= new TestReport();


	private StringBuilder overallTestData= new StringBuilder();


	@Test
	public void test() throws Exception
	{

	Parabank_Welcome_Page parabank_welcome_page_init=PageFactory.initElements(driver, Parabank_Welcome_Page.class);

	enter_URL_Page enter_url_page_init=PageFactory.initElements(driver, enter_URL_Page.class);

	Register_Page register_page_init=PageFactory.initElements(driver, Register_Page.class);

	Forgot_Login_info_Page forgot_login_info_page_init=PageFactory.initElements(driver, Forgot_Login_info_Page.class);

	Account_Created_Page account_created_page_init=PageFactory.initElements(driver, Account_Created_Page.class);

	Invalid_Credentials_Page invalid_credentials_page_init=PageFactory.initElements(driver, Invalid_Credentials_Page.class);

	Administration_Page administration_page_init=PageFactory.initElements(driver, Administration_Page.class);

	Accounts_Overview_Page accounts_overview_page_init=PageFactory.initElements(driver, Accounts_Overview_Page.class);

	Invalid_Register_Page invalid_register_page_init=PageFactory.initElements(driver, Invalid_Register_Page.class);

	Reject_Register_Page reject_register_page_init=PageFactory.initElements(driver, Reject_Register_Page.class);

	Open_New_Account_Page open_new_account_page_init=PageFactory.initElements(driver, Open_New_Account_Page.class);

	Transfer_Funds_Page transfer_funds_page_init=PageFactory.initElements(driver, Transfer_Funds_Page.class);

	Bill_Payment_Service_Page bill_payment_service_page_init=PageFactory.initElements(driver, Bill_Payment_Service_Page.class);

	Update_Profile_Page update_profile_page_init=PageFactory.initElements(driver, Update_Profile_Page.class);

	Find_Transactions_Page find_transactions_page_init=PageFactory.initElements(driver, Find_Transactions_Page.class);

	Transaction_Result_Page transaction_result_page_init=PageFactory.initElements(driver, Transaction_Result_Page.class);

	Apply_for_a_Loan_Page apply_for_a_loan_page_init=PageFactory.initElements(driver, Apply_for_a_Loan_Page.class);

	Account_Services_Page account_services_page_init=PageFactory.initElements(driver, Account_Services_Page.class);

	Bill_Payment_Complete_Page bill_payment_complete_page_init=PageFactory.initElements(driver, Bill_Payment_Complete_Page.class);

	New_Account_Page new_account_page_init=PageFactory.initElements(driver, New_Account_Page.class);

	Account_Overviews_Page account_overviews_page_init=PageFactory.initElements(driver, Account_Overviews_Page.class);

	Profile_Updated_Page profile_updated_page_init=PageFactory.initElements(driver, Profile_Updated_Page.class);

	Loan_Request_Processed_Page loan_request_processed_page_init=PageFactory.initElements(driver, Loan_Request_Processed_Page.class);

	Account_Overviews_for_Loan_Page account_overviews_for_loan_page_init=PageFactory.initElements(driver, Account_Overviews_for_Loan_Page.class);

	Click_Transaction_Page click_transaction_page_init=PageFactory.initElements(driver, Click_Transaction_Page.class);

	Transaction_Details_Page transaction_details_page_init=PageFactory.initElements(driver, Transaction_Details_Page.class);

	Transaction_Error_Page transaction_error_page_init=PageFactory.initElements(driver, Transaction_Error_Page.class);

	unnamed_Page unnamed_page_init=PageFactory.initElements(driver, unnamed_Page.class);
	testReport.createTesthtmlHeader(overallTestData);

	testReport.createHead(overallTestData);

	testReport.putLogo(overallTestData);

	float ne = (float) 0.0;

	testReport.generateGeneralInfo(overallTestData, "Test_Case_4", "TC_Test_Case_4", "",ne);

	testReport.createStepHeader();

	//External Circumstances


	Reporter.log("Step - 1- Perform enter URL Action");

	testReport.fillTableStep("Step 1", "Perform enter URL Action");

	enter_url_page_init.field_url("Enter URL as http://parabank2.parasoft.com/parabank/index.htm");

	Reporter.log("Step - 2- verify Parabank Welcome screen");

	testReport.fillTableStep("Step 2", "verify Parabank Welcome screen");

	parabank_welcome_page_init.verify_Username("Username");
	parabank_welcome_page_init.verify_Password("Password");
	parabank_welcome_page_init.verify_LOG_IN("LOG_IN");
	Parabank_Welcome_Page.verify_Register("Register");
	Parabank_Welcome_Page.verify_Forgot_login_info_("Forgot_login_info_");
	Parabank_Welcome_Page.verify_Admin_Page("Admin_Page");
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_2");

	Reporter.log("Step - 3- click Forgot login info  hyperlink Parabank Welcome screen Customer Login form");

	testReport.fillTableStep("Step 3", "click Forgot login info  hyperlink Parabank Welcome screen Customer Login form");

	parabank_welcome_page_init.click_Forgot_login_info_();
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_3");

	Reporter.log("Step - 4- verify Forgot Login info screen");

	testReport.fillTableStep("Step 4", "verify Forgot Login info screen");

	forgot_login_info_page_init.verify_First_Name("First_Name");
	forgot_login_info_page_init.verify_Last_Name("Last_Name");
	forgot_login_info_page_init.verify_Address("Address");
	forgot_login_info_page_init.verify_City("City");
	forgot_login_info_page_init.verify_State("State");
	forgot_login_info_page_init.verify_Zip_Code("Zip_Code");
	forgot_login_info_page_init.verify_SSN("SSN");
	forgot_login_info_page_init.verify_FIND_MY_LOGIN_INFO("FIND_MY_LOGIN_INFO");
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_4");

	Reporter.log("Step - 5- Fill Forgot Login info form Forgot Login info screen");

	testReport.fillTableStep("Step 5", "Fill Forgot Login info form Forgot Login info screen");

	forgot_login_info_page_init.set_First_Name("First Name");
	forgot_login_info_page_init.set_Last_Name("Last Name");
	forgot_login_info_page_init.set_Address("Address");
	forgot_login_info_page_init.set_City("City");
	forgot_login_info_page_init.set_State("State");
	forgot_login_info_page_init.set_Zip_Code("123456");
	forgot_login_info_page_init.set_SSN("SSN");
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_5");

	Reporter.log("Step - 6- click FIND MY LOGIN INFO button Forgot Login info screen Forgot Login info form");

	testReport.fillTableStep("Step 6", "click FIND MY LOGIN INFO button Forgot Login info screen Forgot Login info form");

	forgot_login_info_page_init.click_FIND_MY_LOGIN_INFO();
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_6");

	Reporter.log("Step - 7- Verify Transaction Error  Action");

	testReport.fillTableStep("Step 7", "Verify Transaction Error  Action");

	transaction_error__page_init.field_Error("Your login information was located successfully. You are now logged in. User Name:XXX Password:YYY");

	Reporter.log("Step - 8- verify Account Services screen");

	testReport.fillTableStep("Step 8", "verify Account Services screen");

	Account_Services_Page.verify_Open_New_Account("Open_New_Account");
	Account_Services_Page.verify_Account_Overview("Account_Overview");
	Account_Services_Page.verify_Transfer_Funds("Transfer_Funds");
	Account_Services_Page.verify_Bill_Pay("Bill_Pay");
	Account_Services_Page.verify_Find_Transactions("Find_Transactions");
	Account_Services_Page.verify_Update_Contact_Info("Update_Contact_Info");
	Account_Services_Page.verify_Request_Loan("Request_Loan");
	Account_Services_Page.verify_Log_Out("Log_Out");
	getScreenshot(driver,Configurations.screenshotLocation , "Test_Case_4","Step_8");
	}
	@AfterTest
	public void export(){
		testReport.appendtestData(overallTestData);
		testReport.closeStepTable();
		testReport.closeTestHTML(overallTestData);
		driver.close();
		try {
			testReport.writeTestReporthtml(overallTestData, "Test_Case_4");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
