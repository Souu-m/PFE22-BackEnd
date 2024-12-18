const db = require("../models");

const handleLogout = async (req, res) => {
	// On client, also delete the accessToken

	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(204); //No content
	const refreshToken = cookies.jwt;

	const foundUser = await db.UsersAccount.findOne({
		where: { refreshToken: refreshToken },
	});
	if (!foundUser) {
		res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "None",
			// secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		return res.sendStatus(204);
	}

	// Delete refreshToken in db
	foundUser.refreshToken = "";
	const result = await foundUser.save();

	res.clearCookie("jwt", {
		httpOnly: true,
		sameSite: "None",
		// secure: true,
		maxAge: 24 * 60 * 60 * 1000,
	});
	res.sendStatus(204);
};

module.exports = { handleLogout };
