module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
       email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    },
        password: {
      type: DataTypes.STRING,
      allowNull: false
    },
        
    },{

         classMethods: {
            associate: function(models) {
                User.hasOne(models.Educator, {
                    onDelete: "cascade"
                });

            }
   
         }
    })
    return User;
}