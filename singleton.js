// class Logger
// private means the object can only be accessed from that class
// static means a property or method of the class that cannot be accessed through an object or instatiation.
// static: Class Members
// we Instantaite objects through the class because the member is static
// let logger = new Logger()
// Not Static: Object Members
// example: logger.loggedInuser1
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.userDetail = user;
    }
    Logger.login = function (user) {
        if (Logger.loggedInuser != null) {
            return Logger.loggedInuser;
        }
        Logger.loggedInuser = new Logger(user);
    };
    Logger.getLoggedInUser = function () {
        return Logger.userDetail;
    };
    Logger.logout = function () {
        Logger.loggedInuser = null;
    };
    Logger.userDetail = {};
    return Logger;
}());
Logger.login({ name: "kylie", password: "kimono" });
console.log(Logger.getLoggedInUser());
Logger.logout();
