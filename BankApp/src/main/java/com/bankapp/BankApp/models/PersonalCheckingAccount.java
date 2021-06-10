package com.bankapp.BankApp.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
public class PersonalCheckingAccount extends BankAccount{
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;

	double interestRate = 0.0001;

	public PersonalCheckingAccount() {
		super();
		accountType = "PersonalCheckingAccount";
	}
	
}
