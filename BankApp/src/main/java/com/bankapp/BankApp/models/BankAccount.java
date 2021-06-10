package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Data
//@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class BankAccount {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private static long nextAccountNumber = 1;

	@ManyToOne
	@JoinColumn(name = "accountHolder_id")
	private AccountHolder accountHolder;

	private double balance;
	private LocalDateTime openedOn;
	String accountType;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "source_account_txns", fetch = FetchType.LAZY)
	private List<Transaction> sourceAccountTransactions;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "personalCheckingAccount", fetch = FetchType.LAZY)
	private List<Transaction> personalCheckingTxns;

	public BankAccount() {
		super();
	}

	@JsonBackReference(value = "account_holder")
	public AccountHolder getAccountHolder() {
		return accountHolder;
	}

	@JsonBackReference(value = "source_account")
	public List<Transaction> getSourceTransactions() {
		return sourceAccountTransactions;
	}

	public void withdraw(double amount) {
		this.balance -= amount;
	}

	//TODO add deposit method

}
