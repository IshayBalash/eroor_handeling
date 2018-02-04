class AboveGrade extends Error { 
     constructor(){ 
        super();
        this.name = "AboveGrade erorr"
        this.message="the grade is above 100"
    }
}
class undergrade extends Error {
     constructor() {
        super();
        this.name = "undergrade erorr"
        this.message = "the grade is below 0"
    }
}
