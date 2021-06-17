package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
//@Table
public class CDAccount extends BankAccount {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cdOffering_id")
    private CDOffering cdOffering;

    public CDAccount() {
        super();
        accountType = "CDAccount";
    }

    @JsonBackReference(value = "cdAccount")
    public CDOffering getCdOffering() {
        return cdOffering;
    }
}
