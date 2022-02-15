package com.fali.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.jpa.repository.Query;

import com.fali.entites.Commande;
//@RepositoryRestResource
public interface CommandeRepository extends JpaRepository<Commande, Long>{

	@Query("SELECT p FROM Commande p WHERE CONCAT(p.nameCommande, p.prixCommande, p.designation) LIKE %?1%")
	public List<Commande> search(String keyword);
	

}
