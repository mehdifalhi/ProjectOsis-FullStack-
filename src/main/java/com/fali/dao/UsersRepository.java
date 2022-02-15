package com.fali.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fali.entites.User;

public interface UsersRepository extends JpaRepository<User, Long>{

}
