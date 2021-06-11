package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Data
@Entity(name="BankAccount")
@Inheritance
public abstract class BankAccount {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "accountHolder_id")
	private AccountHolder accountHolder;

	private double balance;
	private LocalDateTime openedOn;
	String accountType;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sourceAccount", fetch = FetchType.LAZY)
	private List<Transaction> sourceAccountTxns;

	// TODO add targetAccountTxns

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "personalCheckingAccount", fetch = FetchType.LAZY)
	private List<Transaction> personalCheckingTxns;

	// TODO add TXNs list for all types of accounts


	// ------ END INSTANCE VARS


	public BankAccount() {
		super();
	}

	@JsonBackReference(value = "accountHolder")
	public AccountHolder getAccountHolder() {
		return accountHolder;
	}

	@JsonBackReference(value = "sourceAccount")
	public List<Transaction> getSourceTransactions() {
		return sourceAccountTxns;
	}

	public void withdraw(double amount) {
		this.balance -= amount;
	}

	//TODO add deposit method

}
