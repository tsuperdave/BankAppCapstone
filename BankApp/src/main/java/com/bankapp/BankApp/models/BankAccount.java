package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.*;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class BankAccount {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "accountHolder_id")
	private AccountHolder accountHolder;

	@Positive(message = "Balance must be above 0")
	private double balance;

	private LocalDateTime openedOn;
	String accountType;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "personalCheckingAccount", fetch = FetchType.LAZY)
	private List<Transaction> personalCheckingTxns;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sourceAccount", fetch = FetchType.LAZY)
	private List<Transaction> sourceAccountTxns;

	// TODO add targetAccountTxns

	// TODO add TXNs list for all types of accounts

	// ------ END INSTANCE VARS


	public BankAccount() {
		super();
	}

	@JsonBackReference(value = "accountHolder")
	public AccountHolder getAccountHolder() {
		return accountHolder;
	}

//	public void setPersonalCheckingAccountTransactions(List<Transaction> personalCheckingTxns) {
//		this.personalCheckingTxns = new ArrayList<Transaction>(personalCheckingTxns);
//	}

	@JsonBackReference(value = "sourceAccount")
	public List<Transaction> getSourceTransactions() {
		return sourceAccountTxns;
	}

//	public void setSourceAccountTransactions(List<Transaction> sourceAccountTxns) {
//		this.sourceAccountTxns = new ArrayList<Transaction>(sourceAccountTxns);
//	}

	public void withdraw(double amount) {
		this.balance -= amount;
	}

	//TODO add deposit method

}
