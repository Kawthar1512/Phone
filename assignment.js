

function homework() {
    var myfirst, mysecond, mythird, Result;
    myfirst = document.getElementById('first').value;
    myfirst = parseInt(myfirst);
    mysecond = document.getElementById('second').value;

    mythird = document.getElementById('third').value;
    mythird = parseInt(mythird);

    if (mysecond == "+") {
        Result = myfirst + mythird
    }
    else if (mysecond == "-") {
        Result = myfirst - mythird
    }
    else if (mysecond == "*") {
        Result = myfirst * mythird
    }
    else if (mysecond == "%") {
        Result = myfirst % mythird
    } else if (mysecond == "/") {
        Result = myfirst / mythird
    }
    else if (mysecond == "^") {
    Result = myfirst ** mythird
    }else {
    Result = "Invalid Operator!"
}
document.getElementById('myres').innerHTML ="Result: " + Result;


}