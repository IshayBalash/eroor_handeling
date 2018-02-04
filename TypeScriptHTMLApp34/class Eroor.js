var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AboveGrade = (function (_super) {
    __extends(AboveGrade, _super);
    function AboveGrade() {
        var _this = _super.call(this) || this;
        _this.name = "AboveGrade erorr";
        _this.message = "the grade is above 100";
        return _this;
    }
    return AboveGrade;
}(Error));
var undergrade = (function (_super) {
    __extends(undergrade, _super);
    function undergrade() {
        var _this = _super.call(this) || this;
        _this.name = "undergrade erorr";
        _this.message = "the grade is below 0";
        return _this;
    }
    return undergrade;
}(Error));
//# sourceMappingURL=class Eroor.js.map