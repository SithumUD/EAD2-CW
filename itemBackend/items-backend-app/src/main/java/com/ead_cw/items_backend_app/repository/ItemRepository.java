package com.ead_cw.items_backend_app.repository;

import com.ead_cw.items_backend_app.data.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    @Query("SELECT i FROM Item i WHERE i.name LIKE %:name%")
    List<Item> findByName(String name);

    @Query("SELECT i FROM Item i WHERE i.category LIKE %:category%")
    List<Item> findByCategory(String category);

    @Query("SELECT i FROM Item i WHERE i.quantity <> 0")
    List<Item> findByAvailability();


}
