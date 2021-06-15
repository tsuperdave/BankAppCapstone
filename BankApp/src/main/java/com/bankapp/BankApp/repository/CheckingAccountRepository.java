package com.bankapp.BankApp.repository;

import com.bankapp.BankApp.models.PersonalCheckingAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckingAccountRepository extends JpaRepository<PersonalCheckingAccount, Integer> {
}
