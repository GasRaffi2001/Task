//1
class User{
	constructor(){
		this.name = prompt("Name")
		this.userName = prompt("UserName")
	}
	getFullName(){
		return this.name + " " + this.userName
	}
}

class Student extends User{
	constructor(){
		super(User)
		this.year = prompt("Year(2017-2021)")
	}
	getCourse(){
		super.getFullName()
		let date = new Date()
		if(this.year > 2016 && this.year < 2022){
			let getYear = date.getFullYear(this.year) - this.year + " kurs"
			return this.getFullName() + " " + getYear
		}
		else{
			return "Chka aydpisi ashakert!"
		}
		
	}
}

let userStudent = new Student()
console.log(userStudent.getCourse())

//2
/*class Person{
	constructor(){
		this.teach = prompt("Ararkayi Anun")
	}
	getTeach(){
		return this.teach
	}
}

class Teacher extends Person{
	constructor(){
		super(Person)
		this.subject = "Adam@ chi dasavandum "
	}
	teacH(){
		super.getTeach()
		console.log(this.subject + this.getTeach())
	}
}

let newTeacher = new Teacher()
newTeacher.teacH()*/