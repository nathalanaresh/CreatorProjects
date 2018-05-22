com.conformiq.creator.structure.v14
creator.gui.screen qmlb4f47c5999234e9997fbe947b1df8ace "Webmail Start Page"
{
	creator.gui.form qmlfeddd19fd7334089b7b6a9bb57988d30 "Sign in"
	{
		creator.gui.textbox qml0f837a9cd8f146cea942333524a7bd99 "Username"
			type = String
			status = enabled;
		creator.gui.textbox qmlb6d3ab57ec8b4e23b832488c599f5b63 "Password"
			type = String
			status = enabled;
	}
	creator.gui.button qmlafe5bf951e224edf98a8fc9f318ba850 "Sign In"
		status = enabled;
}
creator.message qmlddbc221c4b954c6ba8fb1e38183e63a8 "Check processes"
	interfaces = [ qml53c933cd6da342c69254cbe9c301c09c ]
{
	creator.primitivefield qmle8615f5245ce4fbf8f5d476b853f6d97 "Server name"
		type = String;
}
creator.message qml67423982ac3a4eaab63a42c6ba1ae448 "Process report"
	interfaces = [ qmlc510771e986641fe8eccd8b56a55221a ]
{
	creator.primitivefield qmlc595296b10c84967a2a1bff6f9b391f1
	"Processes running"
		type = String;
	creator.primitivefield qml1f8d9be8e0af493da837bd849da20282
	"Processes not running"
		type = String;
}
creator.message qml3be6dcde2f1d4f99963a4b68e3c579f7 "Check log"
	interfaces = [ qml53c933cd6da342c69254cbe9c301c09c ]
{
	creator.primitivefield qml8ae92bb7a6244e7b89e1f587f8908664 "Server name"
		type = String;
	creator.primitivefield qmle87ff9aeb6f8473c9b9f25156f8101f1 "Log file"
		type = String;
}
creator.message qml00f8010fb7c24d7795f407152c672de4 "Log data"
	interfaces = [ qmlc510771e986641fe8eccd8b56a55221a ]
{
	creator.primitivefield qmle11f7dacd7834a43b394e44b85504a32 "User"
		type = String;
	creator.primitivefield qmld3df82b496354a06b2d65907297844c6 "Timestamp"
		type = String;
}
creator.externalinterface qmlc510771e986641fe8eccd8b56a55221a
"Backend Display"
	direction = out;
creator.externalinterface qml53c933cd6da342c69254cbe9c301c09c "Backend User"
	direction = in;
creator.message qml7850d154aabd4cbf9a270a0102326819
"Validate process information"
	interfaces = [ qml967013948cc348cb9c9729e5b9c48213 ]
{
	creator.primitivefield qmla517a56936fb44d583a0f892188e31d7 "Server name"
		type = String;
	creator.primitivefield qml719a2f00dc1942bba211cc617b6bdbb7
	"Processes running"
		type = String;
	creator.primitivefield qmld82e1ea88b1542b9b1e1fc4f2f27583e
	"Processes not running"
		type = String;
}
creator.message qmla60be2bd6e6c4858b4d480791e7b6942 "Validate log information"
	interfaces = [ qml967013948cc348cb9c9729e5b9c48213 ]
{
	creator.primitivefield qmlbf8e80023cc349218e6e886f1a00e36d "Server name"
		type = String;
	creator.primitivefield qml4868f7bfd77a4b6a9f1d0ff485654413 "Log file"
		type = String;
	creator.primitivefield qml89e42258107742d69bea338f2a00cd64 "User"
		type = String;
	creator.primitivefield qml2bd6fb6baad34f8b99ebe1c8c1cc97cb "Timestamp"
		type = String;
}
creator.externalinterface qml967013948cc348cb9c9729e5b9c48213
"Backend Validation"
	direction = out;