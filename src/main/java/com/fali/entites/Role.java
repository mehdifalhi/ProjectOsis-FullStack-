package com.fali.entites;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Role implements Serializable {
    @Id
    private Long id;
	private String role;
	private String description;
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Role(String role, String description) {
		super();
		this.role = role;
		this.description = description;
	}
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
