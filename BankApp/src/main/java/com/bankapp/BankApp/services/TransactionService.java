package com.bankapp.BankApp.services;

import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.WithdrawTransaction;

import javax.servlet.http.HttpServletRequest;

public interface TransactionService {
    public BankAccount postPersonalWithdraw(HttpServletRequest request, WithdrawTransaction withdrawTransaction, String txnType) throws Exception;
}
