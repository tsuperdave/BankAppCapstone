package com.bankapp.BankApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NegativeAmountException extends Exception {
    public NegativeAmountException(String message) {
        super(message);
    }

}
