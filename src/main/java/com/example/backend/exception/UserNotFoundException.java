package com.example.backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(long id){
        super("Can't found user with id: " + id);
    }
}
