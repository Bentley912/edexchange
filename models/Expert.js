module.exports = function(sequelize, DataTypes){
    var Expert = sequelize.define("Expert", {
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
        skill:{
            type:DataTypes.STRING
        },
        description: {
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Expert;
}