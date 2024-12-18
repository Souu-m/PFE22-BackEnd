const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"SITE",
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			CODE_WILAYA: {
				type: DataTypes.STRING(20),
				allowNull: false,
				references: {
					model: "WILAYA",
					key: "CODE_WILAYA",
				},
			},
			CODE_BR: {
				type: DataTypes.STRING(3),
				allowNull: false,
				references: {
					model: "BRANCHE",
					key: "CODE_BR",
				},
			},
			CODE_SITE: {
				type: DataTypes.STRING(9),
				allowNull: false,
				primaryKey: true,
			},
			DESIGNATION_STRUCTURE: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			LATITUDE: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			LONGITUDE: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "SITE",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "APPARTIENT_FK",
					fields: [{ name: "CODE_BR" }],
				},
				{
					name: "PK_SITE",
					unique: true,
					fields: [{ name: "CODE_SITE" }],
				},
				{
					name: "SITUER_FK",
					fields: [{ name: "CODE_WILAYA" }],
				},
			],
		}
	);
};
