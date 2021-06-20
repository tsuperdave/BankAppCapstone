package com.bankapp.BankApp.controller;

import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.Transaction;
import com.bankapp.BankApp.models.WithdrawTransaction;
import com.bankapp.BankApp.services.TransactionService;
//import io.swagger.annotations.ApiOperation;
//import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/Me/accounts")
@CrossOrigin
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @GetMapping(value = "/transactions")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAuthority('AccountHolder')")
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @PostMapping(value = "/")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAuthority('AccountHolder')")
    public BankAccount postPersonalCheckingWithdraw(HttpServletRequest request, @RequestBody WithdrawTransaction withdrawTransaction) throws Exception {
        return transactionService.postPersonalWithdraw(request, withdrawTransaction, "PersonalCheckingAccount");
    }
}
