package com.bankapp.BankApp.services;

import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.Transaction;
import com.bankapp.BankApp.models.WithdrawTransaction;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface TransactionService {
    public BankAccount postPersonalWithdraw(HttpServletRequest request, WithdrawTransaction withdrawTransaction, String txnType) throws Exception;
    public List<Transaction> getAllTransactions();
}
