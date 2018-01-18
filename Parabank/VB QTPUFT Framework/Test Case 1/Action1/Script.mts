'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''
'' Conformiq designed and generated test case.
''
'' Date 2017/11/17 20:39:05
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'' Test Suite: DC
'' Test case: Test Case 1
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

''Test Description : ""
'' This test case does not link to any requirements.
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

Call f_WriteToDriverLogFile("Test Case <1>:<Test Case 1>")
Reporter.ReportEvent micPass, "Test Case <1>:<Test Case 1>","--Started"
Call START_TEST_CASE(1,"Test Case 1")

'External Circumstances

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <1>: Step <1>: <PERFORM enter URL ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <1>: <Creator 2 action:PERFORM enter URL ACTION>")

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

'f_WriteToDriverLogFile("Test Case <1>: Step <2>: <VERIFY Parabank Welcome SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <2>: <Creator 2 action:VERIFY Parabank Welcome SCREEN>")


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

'f_WriteToDriverLogFile("Test Case <1>: Step <3>: <CLICK Admin Page HYPERLINK Parabank Welcome>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <3>: <Creator 2 action:CLICK Admin Page HYPERLINK Parabank Welcome>")


Dim step3guiData
Set step3guiData =  CreateObject("Scripting.Dictionary")
Dim step3guiContext
Set step3guiContext =  CreateObject("Scripting.Dictionary")
Dim step3Parabank_Welcome_Admin_Page_HYPERLINK
step3Parabank_Welcome_Admin_Page_HYPERLINK = "Admin Page"
step3guiContext.Add "Parabank_Welcome_Admin_Page_HYPERLINK",step3Parabank_Welcome_Admin_Page_HYPERLINK
rc = CLICK_Admin_Page_HYPERLINK_Parabank_Welcome(step3guiContext,step3guiData)
f_WriteToDriverLogFile("<Step 3>: <Creator 2 action:CLICK Admin Page HYPERLINK Parabank Welcome>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 3>: <Creator 2 action:CLICK Admin Page HYPERLINK Parabank Welcome>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <1>: Step <4>: <VERIFY Administration SCREEN>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <4>: <Creator 2 action:VERIFY Administration SCREEN>")


Dim step4guiData
Set step4guiData =  CreateObject("Scripting.Dictionary")
Dim step4guiContext
Set step4guiContext =  CreateObject("Scripting.Dictionary")
Dim step4Administration_Application_Setting_Loan_Provider_DROPDOWN 
step4Administration_Application_Setting_Loan_Provider_DROPDOWN = "Dont care"
Dim step4Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE
step4Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN",step4Administration_Application_Setting_Loan_Provider_DROPDOWN
step4guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE",step4Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE
Dim step4Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS
step4Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS = "ENABLED"
step4guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS",step4Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS
Dim step4Administration_Application_Setting_Loan_Processor_DROPDOWN 
step4Administration_Application_Setting_Loan_Processor_DROPDOWN = "Dont care"
Dim step4Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE
step4Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN",step4Administration_Application_Setting_Loan_Processor_DROPDOWN
step4guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE",step4Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE
Dim step4Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS
step4Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS",step4Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS
Dim step4Administration_Application_Setting_Threshold_TEXTBOX
step4Administration_Application_Setting_Threshold_TEXTBOX = 20
Dim step4Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE
step4Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE = "[Value]"
step4guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX",step4Administration_Application_Setting_Threshold_TEXTBOX
step4guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE",step4Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE
Dim step4Administration_Application_Setting_Threshold_TEXTBOX_STATUS
step4Administration_Application_Setting_Threshold_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX_STATUS",step4Administration_Application_Setting_Threshold_TEXTBOX_STATUS
Dim step4Administration_Application_Setting_Initial_Balance_TEXTBOX
step4Administration_Application_Setting_Initial_Balance_TEXTBOX = "Intial Balance"
Dim step4Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE
step4Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE = "[Value]"
step4guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX",step4Administration_Application_Setting_Initial_Balance_TEXTBOX
step4guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE",step4Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE
Dim step4Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS
step4Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS",step4Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS
Dim step4Administration_Application_Setting_Min_Balance_TEXTBOX
step4Administration_Application_Setting_Min_Balance_TEXTBOX = "Min Balance"
Dim step4Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE
step4Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE = "[Value]"
step4guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX",step4Administration_Application_Setting_Min_Balance_TEXTBOX
step4guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE",step4Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE
Dim step4Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS
step4Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS",step4Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS
Dim step4Administration_Application_Setting_SUBMIT_BUTTON_STATUS
step4Administration_Application_Setting_SUBMIT_BUTTON_STATUS = "[Dont care]"
step4guiData.Add "Administration_Application_Setting_SUBMIT_BUTTON_STATUS",step4Administration_Application_Setting_SUBMIT_BUTTON_STATUS
rc = VERIFY_Administration_SCREEN(step4guiContext,step4guiData)
f_WriteToDriverLogFile("<Step 4>: <Creator 2 action:VERIFY Administration SCREEN>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 4>: <Creator 2 action:VERIFY Administration SCREEN>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <1>: Step <5>: <FILL Application Setting FORM Administration>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <5>: <Creator 2 action:FILL Application Setting FORM Administration>")


Dim step5guiData
Set step5guiData =  CreateObject("Scripting.Dictionary")
Dim step5guiContext
Set step5guiContext =  CreateObject("Scripting.Dictionary")
Dim step5Administration_Application_Setting_Loan_Provider_DROPDOWN 
step5Administration_Application_Setting_Loan_Provider_DROPDOWN = "Dont care"
Dim step5Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE
step5Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN",step5Administration_Application_Setting_Loan_Provider_DROPDOWN
step5guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE",step5Administration_Application_Setting_Loan_Provider_DROPDOWN_VALUE_TYPE
Dim step5Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS
step5Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS",step5Administration_Application_Setting_Loan_Provider_DROPDOWN_STATUS
Dim step5Administration_Application_Setting_Loan_Processor_DROPDOWN 
step5Administration_Application_Setting_Loan_Processor_DROPDOWN = "Dont care"
Dim step5Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE
step5Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN",step5Administration_Application_Setting_Loan_Processor_DROPDOWN
step5guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE",step5Administration_Application_Setting_Loan_Processor_DROPDOWN_VALUE_TYPE
Dim step5Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS
step5Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS",step5Administration_Application_Setting_Loan_Processor_DROPDOWN_STATUS
Dim step5Administration_Application_Setting_Threshold_TEXTBOX
step5Administration_Application_Setting_Threshold_TEXTBOX = 20
Dim step5Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE
step5Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX",step5Administration_Application_Setting_Threshold_TEXTBOX
step5guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE",step5Administration_Application_Setting_Threshold_TEXTBOX_VALUE_TYPE
Dim step5Administration_Application_Setting_Threshold_TEXTBOX_STATUS
step5Administration_Application_Setting_Threshold_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Threshold_TEXTBOX_STATUS",step5Administration_Application_Setting_Threshold_TEXTBOX_STATUS
Dim step5Administration_Application_Setting_Initial_Balance_TEXTBOX
step5Administration_Application_Setting_Initial_Balance_TEXTBOX = "Intial Balance"
Dim step5Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE
step5Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX",step5Administration_Application_Setting_Initial_Balance_TEXTBOX
step5guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE",step5Administration_Application_Setting_Initial_Balance_TEXTBOX_VALUE_TYPE
Dim step5Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS
step5Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS",step5Administration_Application_Setting_Initial_Balance_TEXTBOX_STATUS
Dim step5Administration_Application_Setting_Min_Balance_TEXTBOX
step5Administration_Application_Setting_Min_Balance_TEXTBOX = "Min Balance"
Dim step5Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE
step5Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE = "[Value]"
step5guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX",step5Administration_Application_Setting_Min_Balance_TEXTBOX
step5guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE",step5Administration_Application_Setting_Min_Balance_TEXTBOX_VALUE_TYPE
Dim step5Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS
step5Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS = "[Dont care]"
step5guiData.Add "Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS",step5Administration_Application_Setting_Min_Balance_TEXTBOX_STATUS
rc = FILL_Application_Setting_FORM_Administration(step5guiContext,step5guiData)
f_WriteToDriverLogFile("<Step 5>: <Creator 2 action:FILL Application Setting FORM Administration>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 5>: <Creator 2 action:FILL Application Setting FORM Administration>","--" & StepResult(rc)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <1>: Step <6>: <CLICK SUBMIT BUTTON Administration>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <6>: <Creator 2 action:CLICK SUBMIT BUTTON Administration>")


Dim step6guiData
Set step6guiData =  CreateObject("Scripting.Dictionary")
Dim step6guiContext
Set step6guiContext =  CreateObject("Scripting.Dictionary")
Dim step6Administration_SUBMIT_BUTTON
step6Administration_SUBMIT_BUTTON = "SUBMIT"
step6guiContext.Add "Administration_SUBMIT_BUTTON",step6Administration_SUBMIT_BUTTON
rc = CLICK_SUBMIT_BUTTON_Administration(step6guiContext,step6guiData)
f_WriteToDriverLogFile("<Step 6>: <Creator 2 action:CLICK SUBMIT BUTTON Administration>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step 6>: <Creator 2 action:CLICK SUBMIT BUTTON Administration>","--" & StepResult(rc)


' Covered requirement: Requirements/Adminstritation

f_WriteToDriverLogFile("Requirement Covered: Requirements/Adminstritation")

Reporter.ReportEvent micPass, "Requirement Covered:  Requirements/Adminstritation",""

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'f_WriteToDriverLogFile("Test Case <1>: Step <7>: <VERIFY Transaction Error  ACTION>")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

f_WriteToDriverLogFile("Test Case <1>: Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>")

Dim step7user_actionData
Set step7user_actionData =  CreateObject("Scripting.Dictionary")
Dim Interface_step7
Interface_step7 =  "user"
Dim step7user_actionDataError
Dim step7user_actionDataError_VALUE_TYPE
step7user_actionDataError = "Settings saved successfully."
step7user_actionDataError_VALUE_TYPE = "[Value]"
step7user_actionData.Add "user_actionDataError",step7user_actionDataError
step7user_actionData.Add "user_actionDataError_VALUE_TYPE",step7user_actionDataError_VALUE_TYPE
rc = VERIFY_Transaction_Error__ACTION(Interface_step7,step7user_actionData)
f_WriteToDriverLogFile("<Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>"& StepResult(rc))
Reporter.ReportEvent rc, "<Step <7>: <Creator 2 action:VERIFY Transaction Error  ACTION>","--" & StepResult(rc)

Call END_TEST_CASE(1,"Test Case 1")

