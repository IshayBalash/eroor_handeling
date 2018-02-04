class grade{
    private _grade: number;
    public set grade(grade: number) {
        if (grade > 100) {
            throw new AboveGrade();
        }
        else if (grade < 0) {
            throw new undergrade();
        }
        else {
            this._grade = grade;
        }   
    }
    public get grade(): number {
        return this._grade;
    }
}
