package com.bankapp.BankApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidArgumentException extends Exception{
    public InvalidArgumentException(String message) {
        super(message);
    }
}
