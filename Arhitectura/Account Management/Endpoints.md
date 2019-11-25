## EndPoints

# Account Management

### Register

**POST** /register

​	Request Body: {"username", "email", "password"}

### Login

**POST** /login

​	Request Body: {"username","password" }

### Forgot Password

**GET** /password/{email}

### Get User Id

**GET** /user/{id}

### Get User Name

**GET** /user/{name}