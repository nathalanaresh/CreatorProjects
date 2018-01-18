com.conformiq.creator.structure.v13
creator.gui.screen qml3f30189df46d42ca930c9eef5c157c66 "Parabank Welcome"
{
	creator.gui.form qmlad381e3b2e3a40e9a0dad0914377926f "Customer Login"
	{
		creator.gui.textbox qml2f4c34a4aa024414a9bf32a2c59cb93d "Username"
			type = String
			status = dontcare;
		creator.gui.textbox qmla0728d6ad2b34b23a8d394b1ac850d49 "Password"
			type = String
			status = dontcare;
		creator.gui.button qmlf51e84e4894848a9ae47a99bbb4ac323 "LOG IN"
			status = dontcare;
		creator.gui.hyperlink qmlecb1b66888f3437b83a0daf9c25fc7ef "Register"
			status = dontcare;
		creator.gui.hyperlink qml742a5310240446b5bf851e601cf6ed9d
		"Forgot login info?"
			status = dontcare;
	}
	creator.gui.hyperlink qmlca11c27f6f3e4ce6a0eaea96a8ee7100 "Admin Page"
		status = dontcare;
}
creator.customaction qmld9b7f1e8c91244b5a25f1a03606d3450 "enter URL"
	interfaces = [ qml35ebfa258cab43ffadcecca0f7ddc4a4 ]
	shortform = "EU"
	direction = in
	tokens = [ reference qml2e0d4a6c4e074844972268aa998fb079 ]
{
	creator.primitivefield qml2e0d4a6c4e074844972268aa998fb079 "url"
		type = String;
}
creator.externalinterface qml35ebfa258cab43ffadcecca0f7ddc4a4 "url"
	direction = in;
creator.externalinterface qmlf066cb4407234020959998aca2fa3f1a "gdrg"
	direction = in
	deleted;
creator.externalinterface qml499d1d5c5a45496eae0ab8cdb62a03cf "dry"
	direction = in
	deleted;
creator.gui.screen qml01b699046524495b90d7999d1b457372 "Register"
{
	creator.gui.form qml55bbb3494835440ea90081514279e86e "Signup"
	{
		creator.gui.textbox qml75f96ccc20474f349a22b924a93b3803 "First Name"
			type = String
			status = dontcare;
		creator.gui.textbox qml365137f6a97e45d6bf26ba29aa5bd617 "Last Name"
			type = String
			status = dontcare;
		creator.gui.textbox qmlf8301b290fd14debba62da447924a17b "Address"
			type = String
			status = dontcare;
		creator.gui.textbox qmlb5178f8a87184c139ffcbee3e9af1de7 "City"
			type = String
			status = dontcare;
		creator.gui.textbox qmlefb1f149ce504e618d5e9b633ff3cdc5 "State"
			type = String
			status = dontcare;
		creator.gui.textbox qml5e4f0dc88e81447586ff19ee64e7ca01 "Zip Code"
			type = number
			status = dontcare;
		creator.gui.textbox qml9f1172c0f7ba4cb58b4929794c3cebcb "Phone"
			type = number
			status = dontcare;
		creator.gui.textbox qml268f15a6b3bd4077b87b8aa5d9dee0cf "SSN"
			type = String
			status = dontcare;
		creator.gui.textbox qml07848e4d95c1443fb56eced6ec56780c "Username"
			type = String
			status = dontcare;
		creator.gui.textbox qmla0b577457a104d61a244aa1be1d0a074 "Password"
			type = String
			status = dontcare;
		creator.gui.textbox qml2d51d3ab32a147629592d20b8bbd18cd "Confirm"
			type = String
			status = dontcare;
		creator.gui.button qml44b41355d3dd4d808b100d722e27808f "RIGISTER"
			status = dontcare;
		creator.gui.textbox qmlcdf8e389c54644738c68b33fce68f4ef "Dob"
			type = String
			status = dontcare;
		creator.gui.dropdown qml8d581bf9203a40699e703334cbab22b7 "unnamed"
			type = qml043ac6407ddf44c7a4461a3fce71e3b3
			status = dontcare
			deleted;
		creator.gui.dropdown qml665b7eb1097d4eb0ad50edb6fb7b8ce1 "unnamed"
			type = qmlfba2d64e084b4c788c4aa00abed4124e
			status = dontcare
			deleted;
		creator.gui.dropdown qmlfdf393ffb0ca429fa0009cb309e769e1 "unnamed"
			type = qmlb6d0fb1a2f4d4c5c9444f858aeac8429
			status = dontcare
			deleted;
	}
}
creator.gui.screen qmla813b445dcf640999904517c40143dac "Forgot Login info"
{
	creator.gui.form qml285a90d1600a47e7bc8d92fe4af99f30 "Forgot Login info"
	{
		creator.gui.textbox qmlc8d6d5510bc24c5097015d9bd8a88618 "First Name"
			type = String
			status = dontcare;
		creator.gui.textbox qml3ecba98c1d5442309094798ef12a8348 "Last Name"
			type = String
			status = dontcare;
		creator.gui.textbox qml0d8bb485aaaa43d5a1173b6263ff46ea "Address"
			type = String
			status = dontcare;
		creator.gui.textbox qmld982841905fe4fe7906cf5067612b526 "City"
			type = String
			status = dontcare;
		creator.gui.textbox qml79b06d097fe84de2b18bbac877fed608 "State"
			type = String
			status = dontcare;
		creator.gui.textbox qml5ee1d558380343f39ed30b5ccf783354 "Zip Code"
			type = number
			status = dontcare;
		creator.gui.textbox qml76d5467afcd14e8ba9b2092551e7d772 "SSN"
			type = String
			status = dontcare;
		creator.gui.button qml3da6c5465db14c01855efde150013727 "FIND MY LOGIN INFO"
			status = dontcare;
	}
}
creator.customaction qml3b1143b1446642148e1e75566ae6825c "Account Created"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "AC"
	direction = out
	tokens = [ reference qmlc2650154957f474d92f2afee7cda8599 ]
{
	creator.primitivefield qmlc2650154957f474d92f2afee7cda8599 "message"
		type = String;
}
creator.externalinterface qml948092665c1942d09efff40b4fd4210e "user"
	direction = out;
creator.message qml330e6a9c163a4f1ea09fc788ce2e9dd8 "Invalid Credentials"
	deleted
{
}
creator.customaction qml75da3bcb4a384169837297d2eb2f9dc6 "Invalid Credentials"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "IC"
	direction = out
	tokens = [ reference qml663600a69cc84e5bb51bb2eae9220560 ]
{
	creator.primitivefield qml663600a69cc84e5bb51bb2eae9220560 "message"
		type = String;
}
creator.gui.screen qml95023eab5b7549658f27e1acd1787968 "Administration"
{
	creator.gui.form qml7495d02eda4c4ed3b72cd1f066f66850 "Application Setting"
	{
		creator.gui.dropdown qmld8bb96365cc349a6bcd46f5206925396 "Loan Provider"
			type = qmlfdb4b4b1923e4f1eae9b23631d4d36f9
			status = enabled;
		creator.gui.dropdown qml15d9f6cc3ac44b1a873961ce90ee9ee5 "Loan Processor"
			type = qml5768f1ad2b4b49a2b71ac958ba6c9020
			status = dontcare;
		creator.gui.textbox qmlea8241f911e0470e96517ad68f8906e0 "Threshold"
			type = number
			status = dontcare
			initialized
			default = "20";
		creator.gui.textbox qmlff050afee9e64175acf18ddfc3f46be6 "Initial Balance"
			type = String
			status = dontcare
			initialized
			default = "Intial Balance";
		creator.gui.textbox qml3f77ec00709d4847a058dd7003993170 "Min Balance"
			type = String
			status = dontcare
			initialized
			default = "Min Balance";
	}
	creator.gui.button qml502ff9d83d974ce28c1e60a0d00f79dc "SUBMIT"
		status = dontcare;
	creator.gui.form qmlcafdfa6bb8194ee6912881c69d67e6ef "unnamed"
		deleted
	{
	}
}
creator.enum qmlfdb4b4b1923e4f1eae9b23631d4d36f9 "LoanProvider"
{
	creator.enumerationvalue qml2d131a410b2744b982947e99e48a8201 "JMS";
	creator.enumerationvalue qml4b8e028166134deea5d7b0a407a5fa4d "WebService";
	creator.enumerationvalue qmlec1c76faaee245c9bcc4123fce35ed8a "Local";
}
creator.enum qmlbbae824a5c3342f0b30507842b8d5954 "unnamed"
	deleted
{
}
creator.enum qml5768f1ad2b4b49a2b71ac958ba6c9020 "Loan Processor"
{
	creator.enumerationvalue qml4ad84560fdc2465ca7dff92731016dbc
	"Available Funds";
	creator.enumerationvalue qmlba941f96c0af4e9ebb46500fd0694ad4 "Down Payments";
	creator.enumerationvalue qml154a54b197d04167b6dded43993ebb8a "Combined";
}
creator.gui.screen qml6c0c99d94fea4b0f81cd919ff1039efe "Accounts Overview"
	deleted
{
	creator.gui.uitable qmlc3ec43fb53af4516afb1dc499141936b "unnamed"
		deleted
	{
	}
}
creator.customaction qmld4f18c1df29844839797ea7fc99f9708 "Accounts Overview"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "AO"
	direction = out
	tokens = [ reference qml3270ed30c1544251a8662f404b994a67 reference
qmla0079782bf144181a71c308f54a2e5a1 reference
qml41715b6ddd1f4bc586c2bf727e515e26 ]
{
	creator.primitivefield qml3270ed30c1544251a8662f404b994a67 "Account"
		type = String
		initialized
		default = "Account Number";
	creator.primitivefield qmla0079782bf144181a71c308f54a2e5a1 "Balance"
		type = String
		initialized
		default = "Balance";
	creator.primitivefield qml41715b6ddd1f4bc586c2bf727e515e26 "Available Amount"
		type = String
		initialized
		default = "Available Amount";
}
creator.customaction qmlf9f4491cda8f44e6acb12bb05f6867fc "Invalid Register"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "IR"
	direction = out
	tokens = [ reference qml349b55eb1670431e958fb6403a556d67 ]
{
	creator.primitivefield qml349b55eb1670431e958fb6403a556d67 "Invalid Register"
		type = String
		initialized
		default = "All Fields should not be empty";
	creator.primitivefield qml6094fecadd374bf9a1d491a4f2b85db9 ""
		type = String
		deleted;
}
creator.customaction qml36afad560a164b61abb68e55fba736d0 "Reject Register"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "RR"
	direction = out
	tokens = [ reference qmlfd9f3beda0474b75add7064245937256 reference
qml829f31e0bf4d48fdaea6856e00616ec0 reference
qmlff9ad8b33ad54662863d8b39261775f4 reference
qml1b7c4adbf52b4835a3cf1e80791a91cd reference
qml03c0f02af9a043b4a69a487aa345fb7b reference
qml1fab90744b0e4555ba1155d2d2ab8643 reference
qml72383ea524ad4b3b9deded108872742c reference
qmld4e12617b08547939988758c84cb8874 reference
qmlf0cf5eccff1d4595ae3677b9763528b2 reference
qmlf8e2ddb695ad4f7d969547a47c298146 reference
qml6494dc53c82449b4a3077910ea7877f6 ]
{
	creator.primitivefield qmlfd9f3beda0474b75add7064245937256 "First Name"
		type = String;
	creator.primitivefield qml829f31e0bf4d48fdaea6856e00616ec0 "Last Name"
		type = String;
	creator.primitivefield qmlff9ad8b33ad54662863d8b39261775f4 "Adress"
		type = String;
	creator.primitivefield qml1b7c4adbf52b4835a3cf1e80791a91cd "City"
		type = String;
	creator.primitivefield qml03c0f02af9a043b4a69a487aa345fb7b "State"
		type = String;
	creator.primitivefield qml1fab90744b0e4555ba1155d2d2ab8643 "Zip Code"
		type = String;
	creator.primitivefield qml72383ea524ad4b3b9deded108872742c "Phone"
		type = String;
	creator.primitivefield qmld4e12617b08547939988758c84cb8874 "SSN"
		type = String;
	creator.primitivefield qmlf0cf5eccff1d4595ae3677b9763528b2 "UserName"
		type = String;
	creator.primitivefield qmlf8e2ddb695ad4f7d969547a47c298146 "Password"
		type = String;
	creator.primitivefield qml6494dc53c82449b4a3077910ea7877f6 "Confirm"
		type = String;
}
creator.gui.screen qmlc7e04ab10e794859a3cf4b2b940e8a36 "Open New Account"
{
	creator.gui.form qmlc79b134444404b2593c78ac659c10900 "New Account"
	{
		creator.gui.dropdown qml575890676bc143db9ce578e50e42e3cb "Account Type"
			type = qml53893d9239e34136b7cd20457de0d434
			status = dontcare;
		creator.gui.dropdown qmld26969f64cfe4d5f8bf8a9835ad2bb9e "Existing Account"
			type = qml0749d18a4cfe4a8598fa7a3bc2ed6963
			status = dontcare;
	}
	creator.gui.button qml0ceb061daeec452f85c53a8d1b7df7f1 "Open New Account"
		status = dontcare;
	creator.gui.hyperlink qmld9e39bf9de7a4ea4bdb5480e16d0d879 "Account Overview"
		status = dontcare;
	creator.gui.hyperlink qml80f8e1e69fff411e9351d6c51411474c "Request Loan"
		status = dontcare;
}
creator.enum qml53893d9239e34136b7cd20457de0d434 "Accoun type"
{
	creator.enumerationvalue qml14c9de9e71814d2b8b0d35221ec00c27 "Checking";
	creator.enumerationvalue qmlbc0792d52fe649b099ed7cd1e1e2d425 "Savings";
}
creator.enum qml0749d18a4cfe4a8598fa7a3bc2ed6963 "Existing Accounts"
{
	creator.enumerationvalue qml9152648745794bc483b3a3b1e41f391c
	"Existing Account";
}
creator.gui.screen qml070de05004064f56a7592b991c8c6073 "Accounts Overview"
	deleted
{
}
creator.customaction qml53031df112704fd48d2232daa2211680 "Transfer Funds"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "TF"
	direction = out
	tokens = [ reference qml730de2026d9d4f3ba54b3c408958676b reference
qml7ac1e6e5025841f4a5a7a86b288dfa9d reference
qml3c26634a26fd485e94bd46963814df93 ]
{
	creator.primitivefield qml730de2026d9d4f3ba54b3c408958676b "Amount"
		type = String;
	creator.primitivefield qml458acd9819b9419f999eb587c7d14a4a "From Account"
		type = String
		deleted;
	creator.primitivefield qmle2de526c5f9143a995be1e2c77318909 "Available Amount"
		type = String
		deleted;
	creator.enumerationfield qml3c26634a26fd485e94bd46963814df93 "From Account"
		type = qml37ac8eb6ca47468fa55a794e924d8dff
		initialized
		default =
	qml37ac8eb6ca47468fa55a794e924d8dff.qml7c8d3fb9dffd4a0db753a333a2dd0b74;
	creator.enumerationfield qml7ac1e6e5025841f4a5a7a86b288dfa9d "To Account"
		type = qml7d8fb9b3fe9049d18f3d7a51c0d0e157
		initialized
		default =
	qml7d8fb9b3fe9049d18f3d7a51c0d0e157.qml80eeac740b8e4b0580ad5af7edfc4263;
	creator.primitivefield qmlb515b12d3ecf4289b6bed9589afb9e98 "unnamed"
		type = String
		deleted;
}
creator.enum qml37ac8eb6ca47468fa55a794e924d8dff "From Account"
{
	creator.enumerationvalue qml7c8d3fb9dffd4a0db753a333a2dd0b74 "From Account";
}
creator.enum qml7d8fb9b3fe9049d18f3d7a51c0d0e157 "To Account"
{
	creator.enumerationvalue qml80eeac740b8e4b0580ad5af7edfc4263 "To Account";
}
creator.gui.screen qmld3497ab85ab6434cb3677e504604314d "Bill Payment Service"
{
	creator.gui.form qmlf9407fdf8b0c4cdb9a09d49a339b3639 "Payee Information"
	{
		creator.gui.textbox qml821a514965c74ddeb3e7cdcd1e7f1d60 "Payee Name"
			type = String
			status = dontcare;
		creator.gui.textbox qml24f4f94859e247b6a03bbec9d4159d16 "Address"
			type = String
			status = dontcare;
		creator.gui.textbox qmle333ef0c904e44c79c215813c6d41455 "City"
			type = String
			status = dontcare;
		creator.gui.textbox qml343801b3ae934cde93c700653e7d2b25 "State"
			type = String
			status = dontcare;
		creator.gui.textbox qml237a80eeb5f545879b9256fc4207cbae "Zip Code"
			type = String
			status = dontcare;
		creator.gui.textbox qmla46ba5b3dc7941dd87af68206e71e121 "Phone"
			type = String
			status = dontcare;
		creator.gui.textbox qmle8c70229e6e1478b9402df7f70098302 "Account"
			type = String
			status = dontcare;
		creator.gui.textbox qml38bc400b76344c78a8b0e299d7186da3 "Verify Account"
			type = String
			status = dontcare;
		creator.gui.textbox qmlc41c5e2f9b0a4ff78bd93a3d9da57ec8 "Amount"
			type = String
			status = dontcare;
		creator.gui.dropdown qml1cf6813a54e14b68815fe83718f62418 "From Account"
			type = qml37ac8eb6ca47468fa55a794e924d8dff
			status = dontcare;
	}
	creator.gui.button qml3952114ee0134981b6664fb14da4494e "SEND PAYMENT"
		status = dontcare;
}
creator.enum qml32390851c79844f789d052529b3d5ce4 "From Account"
	deleted
{
	creator.enumerationvalue qmlf37584ef5c8848a2b60197796ca45095 "Accounts"
		deleted;
}
creator.gui.screen qml6e81aa00a70f4e81ab2a49fe7a483631 "Update Profile"
{
	creator.gui.form qml34dede92d4954076a3c027f05c06f456 "Profile"
	{
		creator.gui.textbox qml06847921436145b9b46984a551534abd "First Name"
			type = String
			status = dontcare;
		creator.gui.textbox qmla3eda9ad509749e2932a4fa60dacbc18 "Last Name"
			type = String
			status = dontcare;
		creator.gui.textbox qml2f0944d994c14913889f6288083fa027 "Address"
			type = String
			status = dontcare;
		creator.gui.textbox qmlfdd4a22b19144f788481b6911a4eec38 "City"
			type = String
			status = dontcare;
		creator.gui.textbox qml97f2fa59099940408933abc8f94a5bdf "State"
			type = String
			status = dontcare;
		creator.gui.textbox qml1d0f403973a542918c6ff8f4702bf75b "Zip Code"
			type = String
			status = dontcare;
		creator.gui.textbox qmla77a0d2e565142fc8de624ceb2dab4c4 "Phone"
			type = String
			status = dontcare;
	}
	creator.gui.button qml50cfd3ccbc164743a8286a0e896d9fa2 "UPDATE PROFILE"
		status = dontcare;
}
creator.gui.screen qmlf05a850045e94245bcd6176901bfcd94 "Find Transactions"
{
	creator.gui.form qml08734ef0ef4c43a8881a0b95141c5522 "Transaction"
	{
		creator.gui.dropdown qmle71b3f9c534b46e580d43ed67b2f456e "Select an account"
			type = qml8d3d2e13564b422a895e84c2a1a6a12b
			status = dontcare;
		creator.gui.textbox qml1487dc2270f1430aa378a648f490dc47
		"Find by Transaction ID"
			type = String
			status = dontcare
			deleted;
		creator.gui.textbox qml4e706eb791d34065837b5c85131d01bc "Find By Date"
			type = String
			status = dontcare
			deleted;
	}
	creator.gui.form qml9e210c5873564c508294a39723f8defb "Transaction ID"
	{
		creator.gui.textbox qml4e24fa80e8b2407c85c0d1b92450c96c
		"Find By Transaction ID"
			type = String
			status = dontcare;
		creator.gui.button qmlfbb48977d4c346c7b602e8fd001eeeee "Find Transactions"
			status = dontcare;
	}
	creator.gui.form qmlac9f8e406f0c49578860884e42317e8a "Transaction Date"
		deleted
	{
		creator.gui.textbox qmlae2b1b1ad8954aae963816b4e797f22f "Find By Date"
			type = String
			status = dontcare
			deleted;
		creator.gui.button qml15edbbc3877f46c7930df7e5c1ca7e23
		"Find Transactions (1)"
			status = dontcare
			deleted;
		creator.gui.button qml1ef8c574f88f48969b84e8d467acfad6
		"Find Transactions (2)"
			status = dontcare
			deleted;
		creator.gui.button qml83f7e2df3b184019a05d44df9c147769 "Find Transactions"
			status = dontcare
			deleted;
	}
	creator.gui.form qml6573d3d39cf54a5f9d624e1e27294d6d "Date Range"
	{
		creator.gui.textbox qml8883eae976e34ba1a0f433bdffc54b15 "Between"
			type = String
			status = dontcare;
		creator.gui.textbox qml2ca04aa62e2640be8912ad96b641dce8 "And"
			type = String
			status = dontcare
			deleted;
		creator.gui.textbox qml0a699fbd1ca646a68e9881759b86a334 "And"
			type = String
			status = dontcare
			deleted;
		creator.gui.button qmlb1f9a834b3574c97b2f1fef36876d0c9
		"Find Transactions (1)"
			status = dontcare
			deleted;
		creator.gui.button qml9da347e5e32d4152912a0405ac6de907 "Find Transactions"
			status = dontcare;
		creator.gui.textbox qml992e7bdf10fc40e8a20c602dbfbec1de "And"
			type = String
			status = dontcare;
	}
	creator.gui.form qml968a6a0083d0417fb5aa18e046582626 "Find By Amount"
	{
		creator.gui.textbox qmlabfb7b03498a4c4bb69dbe78b77be1a0 "Find By Amount"
			type = String
			status = dontcare;
		creator.gui.button qml34fd49750f4e419c92abb169d721ce4d "Find Transactions"
			status = dontcare;
	}
	creator.gui.form qml091a27e9aa2d4362bc0a073961813369 "Transaction By Date"
	{
		creator.gui.textbox qml71cc2f320f5644af8a5868a6fd8a9832 "Find By Date"
			type = String
			status = dontcare;
		creator.gui.button qmlcd42b3d69a1f448f89c9b89a5897ba1e "Find Transactions"
			status = dontcare;
	}
}
creator.enum qml8d3d2e13564b422a895e84c2a1a6a12b "Account"
{
	creator.enumerationvalue qml834ebfe39e0d49a7a5e66e39f8a92836 "Accounts";
}
creator.customaction qml3fb37c6c1d2547f3ba0dacb486442fac "Transaction Result"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e
	deleted ]
	shortform = "TR"
	direction = out
	tokens = [ reference qmle51b275b67684677b624f3225f6c1550 reference
qmlc375a6a5ddd447b3952d3fe2e0d50e48 reference
qml0aef0913b68840a19f5e8434d32447d0 reference
qmla949b6acdf4a4816a4ac6df9c7c68f23 ]
	deleted
{
	creator.primitivefield qmle51b275b67684677b624f3225f6c1550 "Date"
		type = String
		deleted;
	creator.primitivefield qmlc375a6a5ddd447b3952d3fe2e0d50e48 "Transaction"
		type = String
		deleted;
	creator.primitivefield qml0aef0913b68840a19f5e8434d32447d0 "Debit"
		type = String
		deleted;
	creator.primitivefield qmla949b6acdf4a4816a4ac6df9c7c68f23 "Credit"
		type = String
		deleted;
}
creator.gui.screen qmle77154bf3bfd443f85b9d2a28963c293 "Apply for a Loan"
{
	creator.gui.form qml005894e1ab9b4349a2961bf5f4b06291 "Loan"
	{
		creator.gui.textbox qmlccf4795b97b74321b5eb3dacc59dfc26 "Loan Amount"
			type = String
			status = dontcare;
		creator.gui.textbox qmlf5bcf89ad64c4a54b9b2e64b1215a070 "Down Payment"
			type = String
			status = dontcare;
		creator.gui.dropdown qml9f622dd72eab43e9b4fb2a4588e88c3c "From Account"
			type = qmlac90755b7d03478eb1da67ea8c7dee5d
			status = dontcare
			initialized
			default =
		qmlac90755b7d03478eb1da67ea8c7dee5d.qml795aead201ac41bf952ebd819177d968;
	}
	creator.gui.button qmlb203bc92c5f2450d9f653fb0c1791345 "Apply Now"
		status = dontcare;
	creator.gui.hyperlink qml42ce033a16cd4b2d84e36b9adf864ccc "Account Overview"
		status = dontcare;
}
creator.enum qmlac90755b7d03478eb1da67ea8c7dee5d "From Accounts"
{
	creator.enumerationvalue qml795aead201ac41bf952ebd819177d968
	"Existing Accounts";
}
creator.gui.screen qml3b0340bbc0424f38b84c699d648d64f3 "Account Services"
{
	creator.gui.hyperlink qml171f10ef06bf4330831f03c53c56731f "Open New Account"
		status = dontcare;
	creator.gui.hyperlink qml333d7d03e7b24723ba1ff8fac666fb4a "Account Overview"
		status = dontcare;
	creator.gui.hyperlink qml7dd02eff50c64635a2014d2f3744b856 "Transfer Funds"
		status = dontcare;
	creator.gui.hyperlink qmlca7693690d4441d2a660e8b3b89a31a0 "Bill Pay"
		status = dontcare;
	creator.gui.hyperlink qml2a1b30d4520f481a8a3b48b7ad25e778 "Find Transactions"
		status = dontcare;
	creator.gui.hyperlink qmld3bfe7dfd65f48889636a7293880b9fb
	"Update Contact Info"
		status = dontcare;
	creator.gui.hyperlink qmlfe9a9c960b264d5cb61cf646e63fa9c3 "Request Loan"
		status = dontcare;
	creator.gui.hyperlink qml6a795e98ff9b44749db8d3c2b6f9a930 "Log Out"
		status = dontcare;
}
creator.customaction qml3dba82dede954f28839ca72e7663f43e
"Bill Payment Complete"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "BP"
	direction = out
	tokens = [ reference qmle2c78a1b40b540848a15855488a0bb9c ]
{
	creator.primitivefield qmle2c78a1b40b540848a15855488a0bb9c "Bill Payment"
		type = String;
}
creator.gui.screen qmldb32a3b1e6134c63b93701c35ab05c51 "Transfer Funds"
{
	creator.gui.form qmle3b51b7247634abe906050425e982e49 "Transfer Funds"
	{
		creator.gui.textbox qmlf2a10b09d55e4e5a9a061a49a559c028 "Amount"
			type = String
			status = dontcare;
		creator.gui.dropdown qmlc3124cb20b1a4e9fa625452d207c7266 "From Account"
			type = qml37ac8eb6ca47468fa55a794e924d8dff
			status = dontcare;
		creator.gui.dropdown qml07bbde0b41b54018be9ae7985317b901 "To Account"
			type = qml7d8fb9b3fe9049d18f3d7a51c0d0e157
			status = dontcare;
	}
	creator.gui.button qml40869ea100b849849cbbd5ea68de87e2 "TRANSFER"
		status = dontcare;
}
creator.customaction qml350f0c44a9e14106a42e5bfb5e642b3e "New Account"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "NA"
	direction = out
	tokens = [ reference qml887ea32f070247f98489c01097fb3d88 reference
qml9235abbdf8224c78851d8b62d09e5a1f ]
{
	creator.enumerationfield qml9dbe28f098d2472b802b057fd82dc2de "Message"
		deleted;
	creator.primitivefield qml887ea32f070247f98489c01097fb3d88 "message"
		type = String
		initialized
		default = "";
	creator.primitivefield qml9235abbdf8224c78851d8b62d09e5a1f "Account Number"
		type = String;
}
creator.customaction qml1b126f79fe2c49869055ff8e35bf43cc "Account Overviews"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "AS"
	direction = out
	tokens = [ reference qmla357f8b622e440dcb127df4d2d585f07 reference
qml76492c6522194e9d94c5cc4f4bd940be reference
qmlc1131c8775ea4db186a5f2573b4e5e14 reference
qml8313a4fafdf4459a92535dcdb80015a5 reference
qml81cc3472355b439985407a40db82c694 reference
qml396cdb327f734cd0b3b29b108412bff3 reference
qmlc99ccd5068b84550bad97db72239a2f9 ]
{
	creator.primitivefield qmla357f8b622e440dcb127df4d2d585f07 "Account1"
		type = String
		initialized
		default = "Account Numbers";
	creator.primitivefield qml76492c6522194e9d94c5cc4f4bd940be
	"Balance of Account1"
		type = String
		initialized
		default = "Two account Balance";
	creator.primitivefield qmlc1131c8775ea4db186a5f2573b4e5e14
	"Available Amount of Account 1"
		type = String
		initialized
		default = "Available Amount";
	creator.primitivefield qmlc60ff914aadc48219ce3a0cc59dac118 "Account2"
		type = String
		deleted;
	creator.primitivefield qml8313a4fafdf4459a92535dcdb80015a5 "Account2"
		type = String;
	creator.primitivefield qml81cc3472355b439985407a40db82c694 "Balance Account2"
		type = String;
	creator.primitivefield qml396cdb327f734cd0b3b29b108412bff3
	"Avilable Amount of Account2"
		type = String;
	creator.primitivefield qmlc99ccd5068b84550bad97db72239a2f9 "Total Amount"
		type = String;
}
creator.customaction qml8b8c7a91c75d44098c9dc737c597d785 "Profile Updated"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "PF"
	direction = out
	tokens = [ reference qml833f8d53ce524b48a10d924cdc8a7301 ]
{
	creator.primitivefield qml833f8d53ce524b48a10d924cdc8a7301 "message"
		type = String;
}
creator.customaction qmld99b68e54f384e7f8a58250a32ae44e9
"Loan Request Processed"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "LR"
	direction = out
	tokens = [ reference qml01957a27f3de45feaa28f738d2fef4bb reference
qml4589e50dce414ec081f990f68da8b946 reference
qml2579cf203d78432d8a78713027fb22f5 reference
qmldae8f07de7a94925ad7acc36c7edd2de reference
qml3b7be46f9c434384b8431418e102c6d7 ]
{
	creator.primitivefield qml01957a27f3de45feaa28f738d2fef4bb "Loan Provider"
		type = String;
	creator.primitivefield qml4589e50dce414ec081f990f68da8b946 "Date"
		type = String;
	creator.primitivefield qml2579cf203d78432d8a78713027fb22f5 "Status"
		type = String;
	creator.primitivefield qmldae8f07de7a94925ad7acc36c7edd2de "message"
		type = String;
	creator.primitivefield qml3b7be46f9c434384b8431418e102c6d7 "Account Number"
		type = String;
}
creator.customaction qmlb7dd74c8ef684da0b4cde93e29083f3b
"Account Overviews for Loan"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "AS"
	direction = out
	tokens = [ reference qml15266a6fa7554bf5b16dfdfe711a607d reference
qml40a248a2c24945a4b0086365d5955d11 reference
qml19f065afb4eb4cc0bf8d5dbf674c9c74 reference
qmldd086ed6cd4649fcbe731bd5026a4060 reference
qml16a1b81afa6f44cea3e9be2fb7409eda reference
qml9d714132e6574601aa4449e502f4f531 reference
qml64bf5ccef6c04033b492899a3ec5762c ]
{
	creator.primitivefield qml15266a6fa7554bf5b16dfdfe711a607d "Account1"
		type = String
		initialized
		default = "Account Numbers";
	creator.primitivefield qml40a248a2c24945a4b0086365d5955d11
	"Balance of Account1"
		type = String
		initialized
		default = "Two account Balance";
	creator.primitivefield qml19f065afb4eb4cc0bf8d5dbf674c9c74
	"Available Amount of Account 1"
		type = String
		initialized
		default = "Available Amount";
	creator.primitivefield qmlccf8caa3a4864e2aaf2f34e417d0cd89 "Account2"
		type = String
		deleted;
	creator.primitivefield qmldd086ed6cd4649fcbe731bd5026a4060 "Account2"
		type = String;
	creator.primitivefield qml16a1b81afa6f44cea3e9be2fb7409eda "Balance Account2"
		type = String;
	creator.primitivefield qml9d714132e6574601aa4449e502f4f531
	"Avilable Amount of Account2"
		type = String;
	creator.primitivefield qml64bf5ccef6c04033b492899a3ec5762c "Total Amount"
		type = String;
}
creator.gui.screen qmld21c006fb79644c18062aa7ab646bb1a "Transaction Result"
{
	creator.gui.uitable qml422207ad1e1144a58174b9be83d4cdc4 "Result" datatable =
	qml4366ef519ebb4e558523e7eaf2767c21
	{
	}
}
creator.datatable qml4366ef519ebb4e558523e7eaf2767c21 "Transaction Results"
{
	creator.primitivecell qmlac2230683dd44965b13c8966734d6b96 "Date"
		type = String;
	creator.primitivecell qmlbb59a79b2757455d8bbcdaf7f9ac3403 "Transaction"
		type = String;
	creator.primitivecell qml0b5c9c463c464c13a67e4bee7dbf456b "Debit"
		type = String;
	creator.primitivecell qml0a924ba30a9041468897fa9ac668dcaa "Credit"
		type = String;
	creator.primitivecell qml14b4c1930cd94502a3bb068b377834d8 "unnamed"
		type = String
		deleted;
}
creator.customaction qmleb2e966335394b7ea1ba5ea5fb18cd5c "Click Transaction"
	interfaces = [ qml35ebfa258cab43ffadcecca0f7ddc4a4
qml948092665c1942d09efff40b4fd4210e
	deleted ]
	shortform = "CT"
	direction = in
	tokens = [ reference qml4cee08d3232a44a19c986b1a74d7c2e9 ]
{
	creator.primitivefield qml4cee08d3232a44a19c986b1a74d7c2e9 "Click"
		type = String;
}
creator.customaction qmlddfe49418d9b4d6f93b1996b2fdc02ea "Transaction Details"
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "TD"
	direction = out
	tokens = [ reference qml9c2f9ca3a40a4db191e3105813d7998a reference
qml0831066a4125488583d20dfc2535d102 reference
qml1bff9ed69e524c1ca7ce3a1df7c9bcd8 reference
qmlcfcb2d51c0a4462dbb31514e53b67b8d reference
qml24dc457d8dba429f909a0f480de00e9d ]
{
	creator.primitivefield qml9c2f9ca3a40a4db191e3105813d7998a "Transaction ID"
		type = String
		initialized
		default = "Transaction ID";
	creator.primitivefield qml0831066a4125488583d20dfc2535d102 "Date"
		type = String
		initialized
		default = "Transaction Date";
	creator.primitivefield qml1bff9ed69e524c1ca7ce3a1df7c9bcd8 "Description"
		type = String
		initialized
		default = "Transaction Description";
	creator.primitivefield qmlcfcb2d51c0a4462dbb31514e53b67b8d "Type"
		type = String
		initialized
		default = "Transaction Type";
	creator.primitivefield qml24dc457d8dba429f909a0f480de00e9d "Amount"
		type = String
		initialized
		default = "Transaction Amount";
}
creator.customaction qml0327dcab1d8043e6b75b597c307b0284 "Transaction Error "
	interfaces = [ qml948092665c1942d09efff40b4fd4210e ]
	shortform = "TE"
	direction = out
	tokens = [ reference qmlc3734b451e6142ceabd6aedbcd655080 ]
{
	creator.primitivefield qmlc3734b451e6142ceabd6aedbcd655080 "Error"
		type = String;
}
creator.enum qml043ac6407ddf44c7a4461a3fce71e3b3 "unnamed"
	deleted
{
}
creator.enum qmlfba2d64e084b4c788c4aa00abed4124e "unnamed"
	deleted
{
}
creator.message qml40f0e76ec3a840c18ecdcd1001599261 "unnamed"
	deleted
{
	creator.enumerationfield qml0f37229dd4d943549a2e3c016d23a90b "unnamed"
		deleted;
}
creator.enum qmlb6d0fb1a2f4d4c5c9444f858aeac8429 "unnamed"
	deleted
{
}