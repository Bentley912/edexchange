var bcrypt = require("bcrypt-nodejs");

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

                User.hasOne(models.Expert, {
                    onDelete: "cascade"
                });
            }
         },

         
            instanceMethods: {
                validPassword: function(password) {
                    return bcrypt.compareSync(password, this.password);
                }
            },
                // Hooks are automatic methods that run during various phases of the User Model lifecycle
                // In this case, before a User is created, we will automatically hash their password
            hooks: {
                beforeCreate: function(user, options) {
                   console.log(user, options )
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                
                }
            }


         

         
    })
    return User;
}