com.conformiq.creator.structure.v14
creator.gui.screen qml10787985be5d41d883c1d159ea0e1dda "Login"
{
	creator.gui.form qmlbfada75f47c74f6abf84708509f266d8 "User Info"
	{
		creator.gui.textbox qml249ffd7165004162b39417f7b0953613 "user name"
			type = String
			status = dontcare;
		creator.gui.textbox qml240d49a999854dd1b5cee10c16247e1e "password"
			type = String
			status = dontcare;
	}
	creator.gui.button qml175610fbd254496d91598b1ef52e019a "Sign in"
		status = dontcare;
}
creator.enum qmle0819bddbb3f4b2bacac7868cdeab9b8 "Account type"
{
	creator.enumerationvalue qmlc890cda2eee842e2a84d7ff7547daa8f "CHECKING";
	creator.enumerationvalue qml8ef9e6e7034d4af7844f5d1952fa6d94 "SAVINGS";
}
creator.gui.screen qml7f8bf4298ddb43e0801e7090c6d89d56 "Open New Account"
{
	creator.gui.form qmlb8b3d9e677e74ebb98b4c56f62e473a2 "New Account"
	{
		creator.gui.dropdown qml84b5999f83aa4343a72ab52b2fd6ff25 "Account Type"
			type = qmle0819bddbb3f4b2bacac7868cdeab9b8
			status = dontcare;
		creator.gui.dropdown qml72b221be2f6342e3b91271de26e1eff2 "Existing Account"
			type = qmlb643cffa17154deca03fcb12f5802bc9
			status = dontcare;
	}
	creator.gui.button qml93540caa943040a185b2dfe450c7b6ae "OPEN NEW ACCOUNT"
		status = dontcare;
}
creator.enum qmlb643cffa17154deca03fcb12f5802bc9 "Accounts"
{
	creator.enumerationvalue qml2fd9d15f3d0a49018e07c15fae40c162
	"Existing Account";
	creator.enumerationvalue qml4b145b0e58474e2d8b6da1e486c32c00
	"Checking Account";
	creator.enumerationvalue qml46af46812eac4dacb3488857601341a2
	"Savings Account";
}
creator.gui.screen qml24fa6d9b63ef4b3e892668e56795d2bf "Account Created"
{
	creator.gui.labelwidget qmla503ee012f5b481aa0eac61e6328bb40 "Account number"
		status = dontcare;
}