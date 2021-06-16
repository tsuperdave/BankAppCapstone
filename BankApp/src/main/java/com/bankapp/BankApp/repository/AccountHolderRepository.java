package com.bankapp.BankApp.repository;

import com.bankapp.BankApp.models.AccountHolder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountHolderRepository extends JpaRepository<AccountHolder, Integer> {
//    Optional<AccountHolder> findByUsername(String username);
}
