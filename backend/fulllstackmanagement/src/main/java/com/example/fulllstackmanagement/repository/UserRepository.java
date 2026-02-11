package com.example.fulllstackmanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fulllstackmanagement.model.User;

public interface UserRepository  extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
    
}
