package com.bankapp.BankApp.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;

@Data
@Entity
@NoArgsConstructor
public class AccountHolder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    String firstName;
    String middleName;
    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    String lastName;
    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    @Length(min = 9, max = 9)
    String ssn;

    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private List<PersonalCheckingAccount> personalCheckingAccountList = new ArrayList<>();
    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private List<SavingsAccount> savingsAccountsList = new ArrayList<>();
    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private List<CDAccount> cdAccountList = new ArrayList<>();

    @OneToOne (fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "accountHolder")
    @JoinColumn(name = "account_holder_contact_details_id")
    private AccountHolderContactDetails accountHolderContactDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    private double combinedBal;

    public AccountHolder(String firstName, String middleName, String lastName, String ssn) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.ssn = ssn;
    }

    public double getNumberOfCheckingAccounts() {
        if(personalCheckingAccountList != null) {
            return personalCheckingAccountList.size();
        }
        return 0;
    }

    public double getNumberOfSavingsAccounts() {
        if(personalCheckingAccountList != null) {
            return savingsAccountsList.size();
        }
        return 0;
    }

    public double getNumberOfCDAccounts() {
        if(personalCheckingAccountList != null) {
            return cdAccountList.size();
        }
        return 0;
    }

    public double getCheckingBalance() {
        double total = 0;
        if(personalCheckingAccountList != null) {
            for(PersonalCheckingAccount ca: personalCheckingAccountList) {
                total += ca.getBalance();
            }
            return total;
        }
        return 0;
    }

    public double getSavingsBalance() {
        double total = 0;
        if(personalCheckingAccountList != null) {
            for(SavingsAccount sa: savingsAccountsList) {
                total += sa.getBalance();
            }
            return total;
        }
        return 0;
    }

    public double getCDBalance() {
        double total = 0;
        if(cdAccountList != null) {
            for(CDAccount cda: cdAccountList) {
                total += cda.getBalance();
            }
            return total;
        }
        return 0;
    }

    public double getCombinedAccountBalance() {
        combinedBal = getCheckingBalance() + getSavingsBalance() + getCDBalance();
        return combinedBal;
    }

    @Override
    public String toString() {
        return lastName + "," + middleName + "," + firstName + "," + ssn;
    }

}
