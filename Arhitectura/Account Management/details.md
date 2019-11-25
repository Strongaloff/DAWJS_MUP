# Account Management

> ## General Description
>

 Account Manager is a service meant to run user operations like registering, logging in, regaining a lost password, but also to provide useful information for other services that is necessary for certain functionalities like: userId and username



> ## Database

### User Data:

- Id
- Username
- Email
- Password
- DeviceId



> ## EndPoints

### Register

**POST** /register

 Request Body: {"username", "email", "password"}

### Login

**POST** /login

 Request Body: {"username","password" }

### Forgot Password

**GET** /password/{email}

### Get By User Id

**GET** /user/{id}

### Get By User Name

**GET** /user/{name}