package com.bankapp.BankApp.repository;

import com.bankapp.BankApp.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
//    List<Transaction> findByLocation(String location);
}
