package com.bankapp.BankApp.services;

import com.bankapp.BankApp.exceptions.AccountNotFoundException;
import com.bankapp.BankApp.exceptions.ExceedsCombinedBalanceLimitException;
import com.bankapp.BankApp.exceptions.InvalidArgumentException;
import com.bankapp.BankApp.models.CDAccount;
import com.bankapp.BankApp.models.PersonalCheckingAccount;
import com.bankapp.BankApp.models.SavingsAccount;

public interface AccountsService {

    public PersonalCheckingAccount addCheckingAccount(int id, PersonalCheckingAccount personalCheckingAccount)
            throws AccountNotFoundException,
            ExceedsCombinedBalanceLimitException,
            InvalidArgumentException;

    public SavingsAccount addSavingsAccount(int id, SavingsAccount savingsAccount)
            throws AccountNotFoundException,
            ExceedsCombinedBalanceLimitException,
            InvalidArgumentException;

    public CDAccount addCDAccount(int id, CDAccount cdAccount)
            throws AccountNotFoundException,
            ExceedsCombinedBalanceLimitException,
            InvalidArgumentException;

}
