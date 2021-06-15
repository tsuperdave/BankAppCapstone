package com.bankapp.BankApp.controller;

import com.bankapp.BankApp.exceptions.AccountNotFoundException;
import com.bankapp.BankApp.exceptions.ExceedsCombinedBalanceLimitException;
import com.bankapp.BankApp.exceptions.InvalidArgumentException;
import com.bankapp.BankApp.models.CDAccount;
import com.bankapp.BankApp.models.PersonalCheckingAccount;
import com.bankapp.BankApp.models.SavingsAccount;
import com.bankapp.BankApp.services.AccountHolderService;
import com.bankapp.BankApp.services.AccountsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accountholders/{id}")
public class AccountsController {

    @Autowired
    AccountsService accountsService;
    @Autowired
    AccountHolderService accountHolderService;

    // CHECKING ACCOUNTS
    @PostMapping(value = "/checkingaccounts")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAuthority('admin')")
    public PersonalCheckingAccount addCheckingAccount(@RequestBody PersonalCheckingAccount personalCheckingAccount, @PathVariable Integer id) throws AccountNotFoundException, ExceedsCombinedBalanceLimitException, InvalidArgumentException {
        return accountsService.addCheckingAccount(id, personalCheckingAccount);
    }

    @GetMapping(value = "/checkingaccounts")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAuthority('admin')")
    public PersonalCheckingAccount getCheckingAccounts(@PathVariable Integer id) throws InvalidArgumentException {
        return accountHolderService.getCheckingAccounts(id);
    }

    // SAVINGS ACCOUNTS
    @PostMapping(value = "/savingsaccounts")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAuthority('admin')")
    public SavingsAccount addSavingsAccount(@RequestBody SavingsAccount savingsAccount, @PathVariable Integer id) throws AccountNotFoundException, ExceedsCombinedBalanceLimitException, InvalidArgumentException {
        return accountsService.addSavingsAccount(id, savingsAccount);
    }

    @GetMapping(value = "/savingsaccounts")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAuthority('admin')")
    public SavingsAccount getSavingsAccounts(@PathVariable Integer id) throws AccountNotFoundException {
        return accountHolderService.getSavingsAccounts(id);
    }

    // CD ACCOUNTS
    @PostMapping(value = "/cdaccounts")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAuthority('admin')")
    public CDAccount addCDAccount(@RequestBody CDAccount cdAccount, @PathVariable Integer id) throws AccountNotFoundException, ExceedsCombinedBalanceLimitException, InvalidArgumentException {
        return accountsService.addCDAccount(id, cdAccount);
    }

    @GetMapping(value = "/cdaccounts")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAuthority('admin')")
    public List<CDAccount> getCDAccountsById(@PathVariable Integer id) throws AccountNotFoundException {
        return accountHolderService.getCDAccounts(id);
    }
}
