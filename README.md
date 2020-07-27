# magicMind


if different db_name,host,password of database please change in .env file
api description
```
http:localhost:3000/signUpTeacher
methode:post
body{
userName:"abcd",
schoolId:"12345",
password:"password"
}
```
```
http:localhost:3000/loginTeacher
methode:post
body{
userName:"abcd",
password:"password"
}
response result contain token
```
```
http:localhost:3000/addStudent
header=>authorization:teacherToken
methode:post
body{
studentName:"abcd",
schoolId:"1234",
class:"10",
roll:"20",
TotalMarks:"60"
}
```
```
http:localhost:3000/getAllStudent
header=>authorization:teacherToken
methode:get
```
```
All other routes should be redirected to 404 start
```

```
test1 and test2 route communicating with each other via event
```
