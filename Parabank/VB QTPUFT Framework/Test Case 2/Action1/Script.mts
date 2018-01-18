'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''
'' Conformiq designed and generated test case.
''
'' Date 2017/11/17 20:39:05
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'' Test Suite: DC
'' Test case: Test Case 2
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

''Test Description : "TSID: 1."
'' This test case links to the following requirements:
'' - Requirements/No data to Submit Alert
'' - Requirements/Adminstritation
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

Call f_WriteToDriverLogFile("Test Case <2>:<Test Case 2>")
Reporter.ReportEvent micPass, "Test Case <2>:<Test Case 2>","--Started"
Call START_TEST_CASE(2,"Test Case 2")

'External Circumstances

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <1>: <PERFORM enter URL ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <1>: <Creator 2 action:PERFORM enter URL ACTION>")

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

'f_WriteToDriverLogFile("Test Case <2>: Step <2>: <VERIFY Parabank Welcome SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <2>: <Creator 2 action:VERIFY Parabank Welcome SCREEN>")


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

'f_WriteToDriverLogFile("Test Case <2>: Step <3>: <CLICK Forgot login info  HYPERLINK Parabank Welcome Customer Login>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <3>: <Creator 2 action:CLICK Forgot login info  HYPERLINK Parabank Welcome Customer Login>")


Dim step3guiData
Set step3guiData =  CreateObject("Scripting.Dictionary")
Dim step3guiContext
Set step3guiContext =  CreateObject("Scripting.Dictionary")
Dim step3Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK
step3Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK = "Forgot login info?"
step3guiContext.Add "Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK",step3Parabank_Welcome_Customer_Login_Forgot_login_info__HYPERLINK
rc = CLICK_Forgot_login_info__HYPERLINK_Parabank_Welcome_Customer_Login(step3guiContext,step3guiData)
f_WriteToDriverLogFile("<Step 3>: <Creator 2 action:CLICK Forgot login info  HYPERLINK Parabank Welcome Customer Login>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 3>: <Creator 2 action:CLICK Forgot login info  HYPERLINK Parabank Welcome Customer Login>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <4>: <VERIFY Forgot Login info SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <4>: <Creator 2 action:VERIFY Forgot Login info SCREEN>")


Dim step4guiData
Set step4guiData =  CreateObject("Scripting.Dictionary")
Dim step4guiContext
Set step4guiContext =  CreateObject("Scripting.Dictionary")
Dim step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX = 0
Dim step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX
step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX = "Dont care"
Dim step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE
step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX",step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE",step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE
Dim step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS
step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS",step4Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS
Dim step4Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON_STATUS
step4Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON_STATUS = "[Dont care]"
step4guiData.Add "Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON_STATUS",step4Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON_STATUS
rc = VERIFY_Forgot_Login_info_SCREEN(step4guiContext,step4guiData)
f_WriteToDriverLogFile("<Step 4>: <Creator 2 action:VERIFY Forgot Login info SCREEN>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 4>: <Creator 2 action:VERIFY Forgot Login info SCREEN>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <5>: <FILL Forgot Login info FORM Forgot Login info>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <5>: <Creator 2 action:FILL Forgot Login info FORM Forgot Login info>")


Dim step5guiData
Set step5guiData =  CreateObject("Scripting.Dictionary")
Dim step5guiContext
Set step5guiContext =  CreateObject("Scripting.Dictionary")
Dim step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX = "First Name"
Dim step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_First_Name_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX = "Last Name"
Dim step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_Last_Name_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX = "Address"
Dim step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_Address_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX = "City"
Dim step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_City_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX = "State"
Dim step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_State_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX = 123456
Dim step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_Zip_Code_TEXTBOX_STATUS
Dim step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX
step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX = "SSN"
Dim step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE
step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX",step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE",step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_VALUE_TYPE
Dim step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS
step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS",step5Forgot_Login_info_Forgot_Login_info_SSN_TEXTBOX_STATUS
rc = FILL_Forgot_Login_info_FORM_Forgot_Login_info(step5guiContext,step5guiData)
f_WriteToDriverLogFile("<Step 5>: <Creator 2 action:FILL Forgot Login info FORM Forgot Login info>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 5>: <Creator 2 action:FILL Forgot Login info FORM Forgot Login info>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <6>: <CLICK FIND MY LOGIN INFO BUTTON Forgot Login info Forgot Login info>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <6>: <Creator 2 action:CLICK FIND MY LOGIN INFO BUTTON Forgot Login info Forgot Login info>")


Dim step6guiData
Set step6guiData =  CreateObject("Scripting.Dictionary")
Dim step6guiContext
Set step6guiContext =  CreateObject("Scripting.Dictionary")
Dim step6Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON
step6Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON = "FIND MY LOGIN INFO"
step6guiContext.Add "Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON",step6Forgot_Login_info_Forgot_Login_info_FIND_MY_LOGIN_INFO_BUTTON
rc = CLICK_FIND_MY_LOGIN_INFO_BUTTON_Forgot_Login_info_Forgot_Login_info(step6guiContext,step6guiData)
f_WriteToDriverLogFile("<Step 6>: <Creator 2 action:CLICK FIND MY LOGIN INFO BUTTON Forgot Login info Forgot Login info>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 6>: <Creator 2 action:CLICK FIND MY LOGIN INFO BUTTON Forgot Login info Forgot Login info>","--" & StepResult(rc)


' Covered requirement: Requirements/Forgot Password

f_WriteToDriverLogFile("Requirement Covered: Requirements/Forgot Password")

Reporter.ReportEvent micPass, "Requirement Covered:  Requirements/Forgot Password",""

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <7>: <VERIFY Transaction Error  ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>")

Dim step7user_actionData
Set step7user_actionData =  CreateObject("Scripting.Dictionary")
Dim Interface_step7
Interface_step7 =  "user"
Dim step7user_actionDataError
Dim step7user_actionDataError_VALUE_TYPE
step7user_actionDataError = "Your login information was located successfully. You are now logged in. User Name:XXX Password:YYY"
step7user_actionDataError_VALUE_TYPE = "[Value]"
step7user_actionData.Add "user_actionDataError",step7user_actionDataError
step7user_actionData.Add "user_actionDataError_VALUE_TYPE",step7user_actionDataError_VALUE_TYPE
rc = VERIFY_Transaction_Error__ACTION(Interface_step7,step7user_actionData)
f_WriteToDriverLogFile("<Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <2>: Step <8>: <VERIFY Account Services SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <2>: Step <8>: <Creator 2 action:VERIFY Account Services SCREEN>")


Dim step8guiData
Set step8guiData =  CreateObject("Scripting.Dictionary")
Dim step8guiContext
Set step8guiContext =  CreateObject("Scripting.Dictionary")
Dim step8Account_Services_Open_New_Account_HYPERLINK_STATUS
step8Account_Services_Open_New_Account_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Open_New_Account_HYPERLINK_STATUS",step8Account_Services_Open_New_Account_HYPERLINK_STATUS
Dim step8Account_Services_Account_Overview_HYPERLINK_STATUS
step8Account_Services_Account_Overview_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Account_Overview_HYPERLINK_STATUS",step8Account_Services_Account_Overview_HYPERLINK_STATUS
Dim step8Account_Services_Transfer_Funds_HYPERLINK_STATUS
step8Account_Services_Transfer_Funds_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Transfer_Funds_HYPERLINK_STATUS",step8Account_Services_Transfer_Funds_HYPERLINK_STATUS
Dim step8Account_Services_Bill_Pay_HYPERLINK_STATUS
step8Account_Services_Bill_Pay_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Bill_Pay_HYPERLINK_STATUS",step8Account_Services_Bill_Pay_HYPERLINK_STATUS
Dim step8Account_Services_Find_Transactions_HYPERLINK_STATUS
step8Account_Services_Find_Transactions_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Find_Transactions_HYPERLINK_STATUS",step8Account_Services_Find_Transactions_HYPERLINK_STATUS
Dim step8Account_Services_Update_Contact_Info_HYPERLINK_STATUS
step8Account_Services_Update_Contact_Info_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Update_Contact_Info_HYPERLINK_STATUS",step8Account_Services_Update_Contact_Info_HYPERLINK_STATUS
Dim step8Account_Services_Request_Loan_HYPERLINK_STATUS
step8Account_Services_Request_Loan_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Request_Loan_HYPERLINK_STATUS",step8Account_Services_Request_Loan_HYPERLINK_STATUS
Dim step8Account_Services_Log_Out_HYPERLINK_STATUS
step8Account_Services_Log_Out_HYPERLINK_STATUS = "[Dont care]"
step8guiData.Add "Account_Services_Log_Out_HYPERLINK_STATUS",step8Account_Services_Log_Out_HYPERLINK_STATUS
rc = VERIFY_Account_Services_SCREEN(step8guiContext,step8guiData)
f_WriteToDriverLogFile("<Step 8>: <Creator 2 action:VERIFY Account Services SCREEN>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 8>: <Creator 2 action:VERIFY Account Services SCREEN>","--" & StepResult(rc)

Call END_TEST_CASE(2,"Test Case 2")

