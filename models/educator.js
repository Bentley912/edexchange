module.exports = function(sequelize, DataTypes){
    var Educator = sequelize.define("Educator", {
        firstname: {
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
        type:DataTypes.STRING,
        allowNull:false
        },
        school: {
            type:DataTypes.STRING,
            allowNull:false
        }
    },{

         classMethods: {
            associate: function(models) {
                Educator.hasMany(models.EdRequest, {
                    onDelete: "cascade"
                });
                Educator.belongsTo(models.User, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
            }
            
         }
    
 }
    
    )
    return Educator;
}