package com.fali.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.fali.entites.User;
import com.fali.web.dto.UserRegistrationDto;



public interface UserService extends UserDetailsService{
	User save(UserRegistrationDto registrationDto);
}
