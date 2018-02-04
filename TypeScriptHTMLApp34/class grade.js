var grade = (function () {
    function grade() {
    }
    Object.defineProperty(grade.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        set: function (grade) {
            if (grade > 100) {
                throw new AboveGrade();
            }
            else if (grade < 0) {
                throw new undergrade();
            }
            else {
                this._grade = grade;
            }
        },
        enumerable: true,
        configurable: true
    });
    return grade;
}());
//# sourceMappingURL=class grade.js.map