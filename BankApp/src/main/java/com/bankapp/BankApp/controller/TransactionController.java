package com.bankapp.BankApp.controller;

import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.WithdrawTransaction;
import com.bankapp.BankApp.services.TransactionService;
//import io.swagger.annotations.ApiOperation;
//import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/Me/accounts/")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping(value = "/")
//    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwt")})
    public BankAccount postPersonalCheckingWithdraw(HttpServletRequest request, @RequestBody WithdrawTransaction withdrawTransaction) throws Exception {
        return transactionService.postPersonalWithdraw(request, withdrawTransaction, "PersonalCheckingAccount");
    }
}
