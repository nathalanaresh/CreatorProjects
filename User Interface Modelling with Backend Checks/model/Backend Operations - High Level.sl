com.conformiq.creator.structure.v14
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
