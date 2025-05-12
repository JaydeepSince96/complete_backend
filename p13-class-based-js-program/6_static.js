class User {
    static id = 1;
    constructor(userName, age){
        this.userName = userName;
        this.age = age;
        this.id = User.id ++ // We can access the prooperties something like this
    }
    static sortByAge(user1,user2){
        return user1.age - user2.age;
    }
}

const jay = new User("Jaydeep",30)
const john = new User("John", 33)
const jane = new User("Jane",18);

const users = [jay,john,jane]
// We can call the static method something like this ( We have to call the Class name and then we can call the static methods)
const ageOrder = users.sort(User.sortByAge)
console.log(ageOrder)