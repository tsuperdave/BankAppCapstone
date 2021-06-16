package com.bankapp.BankApp.models;

import lombok.Data;

@Data
public class UserDTO {

    private String jwt;
    private String roles;
    private Integer userId;

    public UserDTO(String jwt, String roles, Integer userId) {
        this.jwt = jwt;
        this.roles = roles;
        this.userId = userId;
    }
}
