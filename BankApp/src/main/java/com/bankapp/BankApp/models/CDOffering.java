package com.bankapp.BankApp.models;

import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "CDOffering")
@Table(name = "PersonalCheckingAccount")
public class CDOffering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    Integer term;
    double interestRate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cdOffering", fetch = FetchType.LAZY)
    private List<CDAccount> cdAccountList;

}

