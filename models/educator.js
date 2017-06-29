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
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,25],
                isEmail:true
            }
        },
        school: {
            type:DataTypes.STRING,
            allowNull:false
        }
    },{

         classMethods: {
            associate: function(models) {
                Educator.hasMany(models.EdReqeust, {
                    onDelete: "cascade"
                });

            }
   
         }
    })
    return Educator;
}