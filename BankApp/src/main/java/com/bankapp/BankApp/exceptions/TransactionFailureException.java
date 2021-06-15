package com.bankapp.BankApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class TransactionFailureException extends Exception {
    public TransactionFailureException(String message) {
        super(message);
    }
}
