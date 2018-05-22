com.conformiq.creator.structure.v14
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
