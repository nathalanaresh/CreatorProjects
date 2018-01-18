'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''
'' Conformiq designed and generated test case.
''
'' Date 2017/11/17 20:39:05
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'' Test Suite: DC
'' Test case: Test Case 3
''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'' This test case has been automatically designed and generated
'' from a system model. Please be aware that manual changes to the
'' test cases will not be automatically reflected in the model and
'' will be lost if the test cases are regenerated later.
'' 
'' Conformiq generated test cases contain the full testing logic.
'' That is, they contain testing strategies (i.e test steps & exepected results)
'' If you receive a mismatching output or output is lacking, it means that
'' the model design from which this test was created (using model) and the SUT (application) are
'' inconsistent.
''

''Test Description : "User trying to create new account by clicking Register link in Home Page. When user enters non matching passwords in Password and confirm Password fileds then system should rejects create new account and then TSID: 3."
'' This test case links to the following requirements:
'' - Requirements/No data to Submit Alert
'' - Requirements/Adminstritation
'' - Requirements/Forgot Password
''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'' An object repository can be included by RepositoriesCollection.Add. For example:
'' RepositoriesCollection.Add "C:\path\object_repository.tsr"

'' Load the test harness code.
LoadFunctionLibrary "..\TestHarness.qfl"

Dim StepResult
Set StepResult  = CreateObject("Scripting.Dictionary")
StepResult.Add micDone,"Done"
StepResult.Add micWarning,"Warning"
StepResult.Add micPass,"Passed"
StepResult.Add micFail,"Failed"
Dim rc

Call f_WriteToDriverLogFile("Test Case <3>:<Test Case 3>")
Reporter.ReportEvent micPass, "Test Case <3>:<Test Case 3>","--Started"
Call START_TEST_CASE(3,"Test Case 3")

'External Circumstances

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <1>: <PERFORM enter URL ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <1>: <Creator 2 action:PERFORM enter URL ACTION>")

Dim step1url_actionData
Set step1url_actionData =  CreateObject("Scripting.Dictionary")
Dim Interface_step1
Interface_step1 =  "url"
Dim step1url_actionDataurl
Dim step1url_actionDataurl_VALUE_TYPE
step1url_actionDataurl = "Enter URL as http://parabank2.parasoft.com/parabank/index.htm"
step1url_actionDataurl_VALUE_TYPE = "[Value]"
step1url_actionData.Add "url_actionDataurl",step1url_actionDataurl
step1url_actionData.Add "url_actionDataurl_VALUE_TYPE",step1url_actionDataurl_VALUE_TYPE
rc = PERFORM_enter_URL_ACTION(Interface_step1,step1url_actionData)
f_WriteToDriverLogFile("<Step <1>: <Creator 2 action:PERFORM enter URL ACTION>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step <1>: <Creator 2 action:PERFORM enter URL ACTION>","--" & StepResult(rc)


' Covered requirement: Requirements/No data to Submit Alert

f_WriteToDriverLogFile("Requirement Covered: Requirements/No data to Submit Alert")

Reporter.ReportEvent micPass, "Requirement Covered:  Requirements/No data to Submit Alert",""

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <2>: <VERIFY Parabank Welcome SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <2>: <Creator 2 action:VERIFY Parabank Welcome SCREEN>")


Dim step2guiData
Set step2guiData =  CreateObject("Scripting.Dictionary")
Dim step2guiContext
Set step2guiContext =  CreateObject("Scripting.Dictionary")
Dim step2Parabank_Welcome_Customer_Login_Username_TEXTBOX
step2Parabank_Welcome_Customer_Login_Username_TEXTBOX = "Dont care"
Dim step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_VALUE_TYPE
step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_VALUE_TYPE = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Username_TEXTBOX",step2Parabank_Welcome_Customer_Login_Username_TEXTBOX
step2guiData.Add "Parabank_Welcome_Customer_Login_Username_TEXTBOX_VALUE_TYPE",step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_VALUE_TYPE
Dim step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_STATUS
step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Username_TEXTBOX_STATUS",step2Parabank_Welcome_Customer_Login_Username_TEXTBOX_STATUS
Dim step2Parabank_Welcome_Customer_Login_Password_TEXTBOX
step2Parabank_Welcome_Customer_Login_Password_TEXTBOX = "Dont care"
Dim step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_VALUE_TYPE
step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_VALUE_TYPE = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Password_TEXTBOX",step2Parabank_Welcome_Customer_Login_Password_TEXTBOX
step2guiData.Add "Parabank_Welcome_Customer_Login_Password_TEXTBOX_VALUE_TYPE",step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_VALUE_TYPE
Dim step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_STATUS
step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Password_TEXTBOX_STATUS",step2Parabank_Welcome_Customer_Login_Password_TEXTBOX_STATUS
Dim step2Parabank_Welcome_Customer_Login_LOG_IN_BUTTON_STATUS
step2Parabank_Welcome_Customer_Login_LOG_IN_BUTTON_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_LOG_IN_BUTTON_STATUS",step2Parabank_Welcome_Customer_Login_LOG_IN_BUTTON_STATUS
Dim step2Parabank_Welcome_Customer_Login_Register_HYPERLINK_STATUS
step2Parabank_Welcome_Customer_Login_Register_HYPERLINK_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Register_HYPERLINK_STATUS",step2Parabank_Welcome_Customer_Login_Register_HYPERLINK_STATUS
Dim step2Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK_STATUS
step2Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK_STATUS",step2Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK_STATUS
Dim step2Parabank_Welcome_Customer_Login_Admin_Page_HYPERLINK_STATUS
step2Parabank_Welcome_Customer_Login_Admin_Page_HYPERLINK_STATUS = "[Dont care]"
step2guiData.Add "Parabank_Welcome_Customer_Login_Admin_Page_HYPERLINK_STATUS",step2Parabank_Welcome_Customer_Login_Admin_Page_HYPERLINK_STATUS
rc = VERIFY_Parabank_Welcome_SCREEN(step2guiContext,step2guiData)
f_WriteToDriverLogFile("<Step 2>: <Creator 2 action:VERIFY Parabank Welcome SCREEN>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 2>: <Creator 2 action:VERIFY Parabank Welcome SCREEN>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <3>: <CLICK Register HYPERLINK Parabank Welcome Customer Login>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <3>: <Creator 2 action:CLICK Register HYPERLINK Parabank Welcome Customer Login>")


Dim step3guiData
Set step3guiData =  CreateObject("Scripting.Dictionary")
Dim step3guiContext
Set step3guiContext =  CreateObject("Scripting.Dictionary")
Dim step3Parabank_Welcome_Customer_Login_Register_HYPERLINK
step3Parabank_Welcome_Customer_Login_Register_HYPERLINK = "Register"
step3guiContext.Add "Parabank_Welcome_Customer_Login_Register_HYPERLINK",step3Parabank_Welcome_Customer_Login_Register_HYPERLINK
rc = CLICK_Register_HYPERLINK_Parabank_Welcome_Customer_Login(step3guiContext,step3guiData)
f_WriteToDriverLogFile("<Step 3>: <Creator 2 action:CLICK Register HYPERLINK Parabank Welcome Customer Login>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 3>: <Creator 2 action:CLICK Register HYPERLINK Parabank Welcome Customer Login>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <4>: <VERIFY Register SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <4>: <Creator 2 action:VERIFY Register SCREEN>")


Dim step4guiData
Set step4guiData =  CreateObject("Scripting.Dictionary")
Dim step4guiContext
Set step4guiContext =  CreateObject("Scripting.Dictionary")
Dim step4Register_Signup_First_Name_TEXTBOX
step4Register_Signup_First_Name_TEXTBOX = "Dont care"
Dim step4Register_Signup_First_Name_TEXTBOX_VALUE_TYPE
step4Register_Signup_First_Name_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_First_Name_TEXTBOX",step4Register_Signup_First_Name_TEXTBOX
step4guiData.Add "Register_Signup_First_Name_TEXTBOX_VALUE_TYPE",step4Register_Signup_First_Name_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_First_Name_TEXTBOX_STATUS
step4Register_Signup_First_Name_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_First_Name_TEXTBOX_STATUS",step4Register_Signup_First_Name_TEXTBOX_STATUS
Dim step4Register_Signup_Last_Name_TEXTBOX
step4Register_Signup_Last_Name_TEXTBOX = "Dont care"
Dim step4Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE
step4Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Last_Name_TEXTBOX",step4Register_Signup_Last_Name_TEXTBOX
step4guiData.Add "Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE",step4Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Last_Name_TEXTBOX_STATUS
step4Register_Signup_Last_Name_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Last_Name_TEXTBOX_STATUS",step4Register_Signup_Last_Name_TEXTBOX_STATUS
Dim step4Register_Signup_Address_TEXTBOX
step4Register_Signup_Address_TEXTBOX = "Dont care"
Dim step4Register_Signup_Address_TEXTBOX_VALUE_TYPE
step4Register_Signup_Address_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Address_TEXTBOX",step4Register_Signup_Address_TEXTBOX
step4guiData.Add "Register_Signup_Address_TEXTBOX_VALUE_TYPE",step4Register_Signup_Address_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Address_TEXTBOX_STATUS
step4Register_Signup_Address_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Address_TEXTBOX_STATUS",step4Register_Signup_Address_TEXTBOX_STATUS
Dim step4Register_Signup_City_TEXTBOX
step4Register_Signup_City_TEXTBOX = "Dont care"
Dim step4Register_Signup_City_TEXTBOX_VALUE_TYPE
step4Register_Signup_City_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_City_TEXTBOX",step4Register_Signup_City_TEXTBOX
step4guiData.Add "Register_Signup_City_TEXTBOX_VALUE_TYPE",step4Register_Signup_City_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_City_TEXTBOX_STATUS
step4Register_Signup_City_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_City_TEXTBOX_STATUS",step4Register_Signup_City_TEXTBOX_STATUS
Dim step4Register_Signup_State_TEXTBOX
step4Register_Signup_State_TEXTBOX = "Dont care"
Dim step4Register_Signup_State_TEXTBOX_VALUE_TYPE
step4Register_Signup_State_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_State_TEXTBOX",step4Register_Signup_State_TEXTBOX
step4guiData.Add "Register_Signup_State_TEXTBOX_VALUE_TYPE",step4Register_Signup_State_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_State_TEXTBOX_STATUS
step4Register_Signup_State_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_State_TEXTBOX_STATUS",step4Register_Signup_State_TEXTBOX_STATUS
Dim step4Register_Signup_Zip_Code_TEXTBOX
step4Register_Signup_Zip_Code_TEXTBOX = 0
Dim step4Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE
step4Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Zip_Code_TEXTBOX",step4Register_Signup_Zip_Code_TEXTBOX
step4guiData.Add "Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE",step4Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Zip_Code_TEXTBOX_STATUS
step4Register_Signup_Zip_Code_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Zip_Code_TEXTBOX_STATUS",step4Register_Signup_Zip_Code_TEXTBOX_STATUS
Dim step4Register_Signup_Phone_TEXTBOX
step4Register_Signup_Phone_TEXTBOX = 0
Dim step4Register_Signup_Phone_TEXTBOX_VALUE_TYPE
step4Register_Signup_Phone_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Phone_TEXTBOX",step4Register_Signup_Phone_TEXTBOX
step4guiData.Add "Register_Signup_Phone_TEXTBOX_VALUE_TYPE",step4Register_Signup_Phone_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Phone_TEXTBOX_STATUS
step4Register_Signup_Phone_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Phone_TEXTBOX_STATUS",step4Register_Signup_Phone_TEXTBOX_STATUS
Dim step4Register_Signup_SSN_TEXTBOX
step4Register_Signup_SSN_TEXTBOX = "Dont care"
Dim step4Register_Signup_SSN_TEXTBOX_VALUE_TYPE
step4Register_Signup_SSN_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_SSN_TEXTBOX",step4Register_Signup_SSN_TEXTBOX
step4guiData.Add "Register_Signup_SSN_TEXTBOX_VALUE_TYPE",step4Register_Signup_SSN_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_SSN_TEXTBOX_STATUS
step4Register_Signup_SSN_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_SSN_TEXTBOX_STATUS",step4Register_Signup_SSN_TEXTBOX_STATUS
Dim step4Register_Signup_Username_TEXTBOX
step4Register_Signup_Username_TEXTBOX = "Dont care"
Dim step4Register_Signup_Username_TEXTBOX_VALUE_TYPE
step4Register_Signup_Username_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Username_TEXTBOX",step4Register_Signup_Username_TEXTBOX
step4guiData.Add "Register_Signup_Username_TEXTBOX_VALUE_TYPE",step4Register_Signup_Username_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Username_TEXTBOX_STATUS
step4Register_Signup_Username_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Username_TEXTBOX_STATUS",step4Register_Signup_Username_TEXTBOX_STATUS
Dim step4Register_Signup_Password_TEXTBOX
step4Register_Signup_Password_TEXTBOX = "Dont care"
Dim step4Register_Signup_Password_TEXTBOX_VALUE_TYPE
step4Register_Signup_Password_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Password_TEXTBOX",step4Register_Signup_Password_TEXTBOX
step4guiData.Add "Register_Signup_Password_TEXTBOX_VALUE_TYPE",step4Register_Signup_Password_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Password_TEXTBOX_STATUS
step4Register_Signup_Password_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Password_TEXTBOX_STATUS",step4Register_Signup_Password_TEXTBOX_STATUS
Dim step4Register_Signup_Confirm_TEXTBOX
step4Register_Signup_Confirm_TEXTBOX = "Dont care"
Dim step4Register_Signup_Confirm_TEXTBOX_VALUE_TYPE
step4Register_Signup_Confirm_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Confirm_TEXTBOX",step4Register_Signup_Confirm_TEXTBOX
step4guiData.Add "Register_Signup_Confirm_TEXTBOX_VALUE_TYPE",step4Register_Signup_Confirm_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Confirm_TEXTBOX_STATUS
step4Register_Signup_Confirm_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Confirm_TEXTBOX_STATUS",step4Register_Signup_Confirm_TEXTBOX_STATUS
Dim step4Register_Signup_RIGISTER_BUTTON_STATUS
step4Register_Signup_RIGISTER_BUTTON_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_RIGISTER_BUTTON_STATUS",step4Register_Signup_RIGISTER_BUTTON_STATUS
Dim step4Register_Signup_Dob_TEXTBOX
step4Register_Signup_Dob_TEXTBOX = "Dont care"
Dim step4Register_Signup_Dob_TEXTBOX_VALUE_TYPE
step4Register_Signup_Dob_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Register_Signup_Dob_TEXTBOX",step4Register_Signup_Dob_TEXTBOX
step4guiData.Add "Register_Signup_Dob_TEXTBOX_VALUE_TYPE",step4Register_Signup_Dob_TEXTBOX_VALUE_TYPE
Dim step4Register_Signup_Dob_TEXTBOX_STATUS
step4Register_Signup_Dob_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Register_Signup_Dob_TEXTBOX_STATUS",step4Register_Signup_Dob_TEXTBOX_STATUS
rc = VERIFY_Register_SCREEN(step4guiContext,step4guiData)
f_WriteToDriverLogFile("<Step 4>: <Creator 2 action:VERIFY Register SCREEN>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 4>: <Creator 2 action:VERIFY Register SCREEN>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <5>: <FILL Signup FORM Register>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <5>: <Creator 2 action:FILL Signup FORM Register>")


Dim step5guiData
Set step5guiData =  CreateObject("Scripting.Dictionary")
Dim step5guiContext
Set step5guiContext =  CreateObject("Scripting.Dictionary")
Dim step5Register_Signup_First_Name_TEXTBOX
step5Register_Signup_First_Name_TEXTBOX = "valid first name"
Dim step5Register_Signup_First_Name_TEXTBOX_VALUE_TYPE
step5Register_Signup_First_Name_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_First_Name_TEXTBOX",step5Register_Signup_First_Name_TEXTBOX
step5guiData.Add "Register_Signup_First_Name_TEXTBOX_VALUE_TYPE",step5Register_Signup_First_Name_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_First_Name_TEXTBOX_STATUS
step5Register_Signup_First_Name_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_First_Name_TEXTBOX_STATUS",step5Register_Signup_First_Name_TEXTBOX_STATUS
Dim step5Register_Signup_Last_Name_TEXTBOX
step5Register_Signup_Last_Name_TEXTBOX = "valid last name"
Dim step5Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE
step5Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Last_Name_TEXTBOX",step5Register_Signup_Last_Name_TEXTBOX
step5guiData.Add "Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE",step5Register_Signup_Last_Name_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Last_Name_TEXTBOX_STATUS
step5Register_Signup_Last_Name_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Last_Name_TEXTBOX_STATUS",step5Register_Signup_Last_Name_TEXTBOX_STATUS
Dim step5Register_Signup_Address_TEXTBOX
step5Register_Signup_Address_TEXTBOX = "valid Address"
Dim step5Register_Signup_Address_TEXTBOX_VALUE_TYPE
step5Register_Signup_Address_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Address_TEXTBOX",step5Register_Signup_Address_TEXTBOX
step5guiData.Add "Register_Signup_Address_TEXTBOX_VALUE_TYPE",step5Register_Signup_Address_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Address_TEXTBOX_STATUS
step5Register_Signup_Address_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Address_TEXTBOX_STATUS",step5Register_Signup_Address_TEXTBOX_STATUS
Dim step5Register_Signup_City_TEXTBOX
step5Register_Signup_City_TEXTBOX = "valid city"
Dim step5Register_Signup_City_TEXTBOX_VALUE_TYPE
step5Register_Signup_City_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_City_TEXTBOX",step5Register_Signup_City_TEXTBOX
step5guiData.Add "Register_Signup_City_TEXTBOX_VALUE_TYPE",step5Register_Signup_City_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_City_TEXTBOX_STATUS
step5Register_Signup_City_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_City_TEXTBOX_STATUS",step5Register_Signup_City_TEXTBOX_STATUS
Dim step5Register_Signup_State_TEXTBOX
step5Register_Signup_State_TEXTBOX = "valid state"
Dim step5Register_Signup_State_TEXTBOX_VALUE_TYPE
step5Register_Signup_State_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_State_TEXTBOX",step5Register_Signup_State_TEXTBOX
step5guiData.Add "Register_Signup_State_TEXTBOX_VALUE_TYPE",step5Register_Signup_State_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_State_TEXTBOX_STATUS
step5Register_Signup_State_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_State_TEXTBOX_STATUS",step5Register_Signup_State_TEXTBOX_STATUS
Dim step5Register_Signup_Zip_Code_TEXTBOX
step5Register_Signup_Zip_Code_TEXTBOX = 12346
Dim step5Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE
step5Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Zip_Code_TEXTBOX",step5Register_Signup_Zip_Code_TEXTBOX
step5guiData.Add "Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE",step5Register_Signup_Zip_Code_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Zip_Code_TEXTBOX_STATUS
step5Register_Signup_Zip_Code_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Zip_Code_TEXTBOX_STATUS",step5Register_Signup_Zip_Code_TEXTBOX_STATUS
Dim step5Register_Signup_Phone_TEXTBOX
step5Register_Signup_Phone_TEXTBOX = 12346789
Dim step5Register_Signup_Phone_TEXTBOX_VALUE_TYPE
step5Register_Signup_Phone_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Phone_TEXTBOX",step5Register_Signup_Phone_TEXTBOX
step5guiData.Add "Register_Signup_Phone_TEXTBOX_VALUE_TYPE",step5Register_Signup_Phone_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Phone_TEXTBOX_STATUS
step5Register_Signup_Phone_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Phone_TEXTBOX_STATUS",step5Register_Signup_Phone_TEXTBOX_STATUS
Dim step5Register_Signup_SSN_TEXTBOX
step5Register_Signup_SSN_TEXTBOX = "12456"
Dim step5Register_Signup_SSN_TEXTBOX_VALUE_TYPE
step5Register_Signup_SSN_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_SSN_TEXTBOX",step5Register_Signup_SSN_TEXTBOX
step5guiData.Add "Register_Signup_SSN_TEXTBOX_VALUE_TYPE",step5Register_Signup_SSN_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_SSN_TEXTBOX_STATUS
step5Register_Signup_SSN_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_SSN_TEXTBOX_STATUS",step5Register_Signup_SSN_TEXTBOX_STATUS
Dim step5Register_Signup_Username_TEXTBOX
step5Register_Signup_Username_TEXTBOX = "valid username"
Dim step5Register_Signup_Username_TEXTBOX_VALUE_TYPE
step5Register_Signup_Username_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Username_TEXTBOX",step5Register_Signup_Username_TEXTBOX
step5guiData.Add "Register_Signup_Username_TEXTBOX_VALUE_TYPE",step5Register_Signup_Username_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Username_TEXTBOX_STATUS
step5Register_Signup_Username_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Username_TEXTBOX_STATUS",step5Register_Signup_Username_TEXTBOX_STATUS
Dim step5Register_Signup_Password_TEXTBOX
step5Register_Signup_Password_TEXTBOX = "valid password"
Dim step5Register_Signup_Password_TEXTBOX_VALUE_TYPE
step5Register_Signup_Password_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Password_TEXTBOX",step5Register_Signup_Password_TEXTBOX
step5guiData.Add "Register_Signup_Password_TEXTBOX_VALUE_TYPE",step5Register_Signup_Password_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Password_TEXTBOX_STATUS
step5Register_Signup_Password_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Password_TEXTBOX_STATUS",step5Register_Signup_Password_TEXTBOX_STATUS
Dim step5Register_Signup_Confirm_TEXTBOX
step5Register_Signup_Confirm_TEXTBOX = "non matching password"
Dim step5Register_Signup_Confirm_TEXTBOX_VALUE_TYPE
step5Register_Signup_Confirm_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Register_Signup_Confirm_TEXTBOX",step5Register_Signup_Confirm_TEXTBOX
step5guiData.Add "Register_Signup_Confirm_TEXTBOX_VALUE_TYPE",step5Register_Signup_Confirm_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Confirm_TEXTBOX_STATUS
step5Register_Signup_Confirm_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Confirm_TEXTBOX_STATUS",step5Register_Signup_Confirm_TEXTBOX_STATUS
Dim step5Register_Signup_Dob_TEXTBOX
step5Register_Signup_Dob_TEXTBOX = "Dont care"
Dim step5Register_Signup_Dob_TEXTBOX_VALUE_TYPE
step5Register_Signup_Dob_TEXTBOX_VALUE_TYPE = "[Dont care]"
step5guiData.Add "Register_Signup_Dob_TEXTBOX",step5Register_Signup_Dob_TEXTBOX
step5guiData.Add "Register_Signup_Dob_TEXTBOX_VALUE_TYPE",step5Register_Signup_Dob_TEXTBOX_VALUE_TYPE
Dim step5Register_Signup_Dob_TEXTBOX_STATUS
step5Register_Signup_Dob_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Register_Signup_Dob_TEXTBOX_STATUS",step5Register_Signup_Dob_TEXTBOX_STATUS
rc = FILL_Signup_FORM_Register(step5guiContext,step5guiData)
f_WriteToDriverLogFile("<Step 5>: <Creator 2 action:FILL Signup FORM Register>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 5>: <Creator 2 action:FILL Signup FORM Register>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <6>: <CLICK RIGISTER BUTTON Register Signup>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <6>: <Creator 2 action:CLICK RIGISTER BUTTON Register Signup>")


Dim step6guiData
Set step6guiData =  CreateObject("Scripting.Dictionary")
Dim step6guiContext
Set step6guiContext =  CreateObject("Scripting.Dictionary")
Dim step6Register_Signup_RIGISTER_BUTTON
step6Register_Signup_RIGISTER_BUTTON = "RIGISTER"
step6guiContext.Add "Register_Signup_RIGISTER_BUTTON",step6Register_Signup_RIGISTER_BUTTON
rc = CLICK_RIGISTER_BUTTON_Register_Signup(step6guiContext,step6guiData)
f_WriteToDriverLogFile("<Step 6>: <Creator 2 action:CLICK RIGISTER BUTTON Register Signup>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 6>: <Creator 2 action:CLICK RIGISTER BUTTON Register Signup>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <3>: Step <7>: <VERIFY Invalid Register ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <3>: Step <7>: <Creator 2 action:VERIFY Invalid Register ACTION>")

Dim step7user_actionData
Set step7user_actionData =  CreateObject("Scripting.Dictionary")
Dim Interface_step7
Interface_step7 =  "user"
Dim step7user_actionDataInvalid_Register
Dim step7user_actionDataInvalid_Register_VALUE_TYPE
step7user_actionDataInvalid_Register = "Password and Confirm Password should be same"
step7user_actionDataInvalid_Register_VALUE_TYPE = "[Value]"
step7user_actionData.Add "user_actionDataInvalid_Register",step7user_actionDataInvalid_Register
step7user_actionData.Add "user_actionDataInvalid_Register_VALUE_TYPE",step7user_actionDataInvalid_Register_VALUE_TYPE
rc = VERIFY_Invalid_Register_ACTION(Interface_step7,step7user_actionData)
f_WriteToDriverLogFile("<Step <7>: <Creator 2 action:VERIFY Invalid Register ACTION>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step <7>: <Creator 2 action:VERIFY Invalid Register ACTION>","--" & StepResult(rc)

Call END_TEST_CASE(3,"Test Case 3")

