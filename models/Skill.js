module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {

        type: {
            type: DataTypes.STRING
        },

    }, {

        classMethods: {
            associate: function(models) {

                Skill.belongsTo(models.Expert, {
                    foreignKey: {
                        allowNull: false
                    }
                });

                Skill.belongsTo(models.EdRequest, {
                    foreignKey: {
                        allowNull: false
                    }
                });
               
            }
        }
    });
    return Skill;
    };