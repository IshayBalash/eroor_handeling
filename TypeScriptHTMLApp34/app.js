var grade1 = new grade;
var num1 = -5;
chekgrade(grade1, num1);
function chekgrade(grade, num) {
    try {
        grade.grade = num;
        document.write("the grade is: " + grade.grade + "<br/>");
    }
    catch (err) {
        document.write("erorr---" + err.name + "<br/>");
        if (err instanceof AboveGrade) {
            document.write("-------AboveGrade eroor-----<br/>");
            document.write(err.name + "<br/>" + err.message + "<br/>");
        }
        if (err instanceof undergrade) {
            document.write("-------undergrade eroor-----<br/>");
            document.write(err.name + "<br/>" + err.message + "<br/>");
        }
    }
    finally {
        document.write("the func is done<br/>");
    }
}
//# sourceMappingURL=app.js.map