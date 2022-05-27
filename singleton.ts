// private means the object can only be accessed from that class
// static means a property or method of the class that cannot be accessed through an object or instatiation.
// static: Class Members
// we Instantaite objects through the class because the member is static
// let logger = new Logger()

// Not Static: Object Members
// example: logger.loggedInuser1 can be instantiated from outside the class

class Logger{
    // There shd only be one logged in user at a time
    private static loggedInuser:object;
    private static userDetail = {}
    private constructor(user:object){
        Logger.userDetail = user
    }

    static login(user:object){
        if(Logger.loggedInuser != null){
            return Logger.loggedInuser
        }

        Logger.loggedInuser = new Logger(user)

    }

    static getLoggedInUser(){
        return Logger.userDetail
    }

    static logout(){
        Logger.loggedInuser = null;
    }

}   

// Logger.login({name:"kylie", password:"namugga"})
// console.log(Logger.getLoggedInUser())
// Logger.logout()


// Immediately invoked functions
(function testLogger(){
    Logger.login({name:"kylie", password:"namugga"})
    console.log(Logger.getLoggedInUser())
    Logger.logout()

    Logger.login({name:"Nina", password:"kenyonyozi"})
    console.log(Logger.getLoggedInUser())

     
})();


