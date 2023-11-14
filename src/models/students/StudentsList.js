export class studentsList {
    constructor(){
        this.students=[]
    }
    getAllStudents(){
        return this.students;
    }
    getStudentsById(id){
        return this.students.find(students => students.id === id)
    }
    createStudent(student){
        this.students.push(student)
    }
    upDateStudent(id, name, email, idade){
        const student= this.getAllStudents(id)

        if(!student){
            return null
        }

        student.name= name
        student.email= email
        student.idade= idade

        return student;
    }
    removeStudents(studentid){
        this.students =  this.students.filter(student => student.id !== studentid)
    }
}