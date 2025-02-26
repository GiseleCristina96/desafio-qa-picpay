package com.sre.challenge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sre.challenge.entities.InstallmentEntity;

@Repository
public interface IInstallmentRepository extends JpaRepository<InstallmentEntity, Long> {
    
}
