package com.bankapp.BankApp.models;

import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity
public class CDOffering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "offering_id")
    private Integer id;

    private Integer term;
    private double interestRate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cdOffering")
    private List<CDAccount> cdAccountList;

}

