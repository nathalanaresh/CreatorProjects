com.conformiq.creator.structure.v14
creator.externalinterface qml884302eb0a5d47b3a8539fcedfcfb36b "REST in"
	direction = in;
creator.externalinterface qmlabae35641e254806a75bcf8832064051 "REST out"
	direction = out;
creator.externalinterface qml7ef47118c3f64fab860a1185fc24709e "User Database"
	direction = out;
creator.externalinterface qmld492f0c48b5f47b9ae7d98284dc48ea7 "Debug"
	direction = out;
creator.message qml4bb42029087b412ea736e56c2f553a7b "POST User Request"
	interfaces = [ qml884302eb0a5d47b3a8539fcedfcfb36b ]
	mapping = [
	creator.datamapping qml498697871d274a12a7e501c05cbb0609 ""
		source = qml4bb42029087b412ea736e56c2f553a7b
		target = qml1e34ba5453db4894b367fd663541f4ca;
]
{
	creator.primitivefield qmleddcad24138543a39f158d1ca8561511 "Name"
		type = String;
	creator.enumerationfield qmlae9ec436d27045069029165a87218de5 "Gender"
		type = qmlfc7292cb6ec147489365a077c516c623;
}
creator.enum qmlfc7292cb6ec147489365a077c516c623 "Gender"
{
	creator.enumerationvalue qmla54d172fcbd245e78cb5eff835edce56 "Male";
	creator.enumerationvalue qml1a3118bf137e4c85a9ba8f6091278709 "Female";
}
creator.message qml1ac3548f24ae403ab6ada480341d813d "POST User Response"
	interfaces = [ qmlabae35641e254806a75bcf8832064051 ]
{
	creator.enumerationfield qmld336817cdc9e4182933f29209a4a6525 "Status"
		type = qml6ca31e0f184049658d36ea20283d8a10;
}
creator.enum qml6ca31e0f184049658d36ea20283d8a10 "Status"
{
	creator.enumerationvalue qml4e03a6a112bb441a9eb23b7c8b0d486b "Negative";
	creator.enumerationvalue qml393cfc4bebc74bc8b7926198552f1958 "Positive";
}
creator.message qmlb9446088175741e08d2ba72668c62a86 "Validate User Info"
	interfaces = [ qml7ef47118c3f64fab860a1185fc24709e ]
{
	creator.primitivefield qml9c6edfe1636d4434817571455a190cbc "Name"
		type = String;
	creator.enumerationfield qml7be95a9f07f2466f864904583544acb7 "Gender"
		type = qmlfc7292cb6ec147489365a077c516c623;
}
creator.message qmlbc15f67e68004f7bb4184992d3f23612 "GET User Request"
	interfaces = [ qml884302eb0a5d47b3a8539fcedfcfb36b ]
	mapping = [
	creator.datamapping qmlf6da23365d4c466a8a6bdbb09416cdb3 ""
		source = qmlbc15f67e68004f7bb4184992d3f23612
		target = qml1e34ba5453db4894b367fd663541f4ca;
]
{
	creator.primitivefield qml1457a32506ec4984abd585acf2b3dd0f "Name"
		type = String;
}
creator.message qmld99420f393f1465497a0b6b95b2e863d "PUT User Request"
	interfaces = [ qml884302eb0a5d47b3a8539fcedfcfb36b ]
	mapping = [
	creator.datamapping qml5cf5f727ba7d45f09c0e3ffe2e24126f ""
		source = qmld99420f393f1465497a0b6b95b2e863d
		target = qml1e34ba5453db4894b367fd663541f4ca;
]
{
	creator.primitivefield qml761012f6aa664bea8402c62a0782a82a "Name"
		type = String;
	creator.enumerationfield qmle76fae2512124277abef0a1562b7b0f0 "Gender"
		type = qmlfc7292cb6ec147489365a077c516c623;
}
creator.message qml89e0deca87554da4bb324c362cf27326 "GET User Response"
	interfaces = [ qmlabae35641e254806a75bcf8832064051 ]
{
	creator.primitivefield qml7f7ab732fc8343e197122bcdf657ce64 "Name"
		type = String;
	creator.enumerationfield qml373bcdd1f62b400696664b72a690be40 "Gender"
		type = qmlfc7292cb6ec147489365a077c516c623;
}
creator.message qml1aebdc8fb4e346c39e08c74ba2de95f4 "PUT User Response"
	interfaces = [ qmlabae35641e254806a75bcf8832064051 ]
{
	creator.enumerationfield qmlfba43fca09e743a19be269031c0b034c "Status"
		type = qml6ca31e0f184049658d36ea20283d8a10;
}
creator.message qml04fc2ddc0b5049baabf343ff46770798 "Debug"
	interfaces = [ qmld492f0c48b5f47b9ae7d98284dc48ea7 ]
{
	creator.primitivefield qml4fb2fa7eb25a4c77a8516d0c87697db8 "Text"
		type = String;
}
creator.datatable qml038bb70f25e84eb08a4a1ecf504e90f1 "Methods Run"
{
	creator.primitivecell qmle75ab284ca4b43c3ba4faf3e01aff157 "Name"
		type = String;
}
creator.datatable qml1e34ba5453db4894b367fd663541f4ca "Users Table"
{
	creator.primitivecell qml32f5045e7a4344b6985e4d1fc2af8351 "Name"
		type = String;
	creator.enumerationcell qmlc7241b322b32454a95dd1b59d8e9db9a "Gender"
		type = qmlfc7292cb6ec147489365a077c516c623;
}
