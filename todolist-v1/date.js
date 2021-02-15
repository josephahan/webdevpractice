//module created for date calculations
module.exports.getDate = getDate;
function getDate() {
    var today = new Date();
    //setting options for toLocaleDateString() method
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    return day;
}

//the above is a complicated way of defining a function, below is a cleaner more efficient way of defining a function
//also usefule to note that module.exports and exports is the same thing

//module.export is an object, we can define our own methods for the object using module.export.methodname
//in this case we defined a method for getDay(), the above code a method is defined for getDate()
exports.getDay = function() { 
    var today = new Date();
    var options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);

}

