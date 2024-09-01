package com.ead_cw.items_backend_app.service;

import com.ead_cw.items_backend_app.data.Item;
import com.ead_cw.items_backend_app.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    public ItemRepository itemRepository;

    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public Item getItemById(int id){
        Optional<Item> item = itemRepository.findById(id);
        if(item.isPresent()){
            return item.get();
        }
        return null;
    }

    public Item createItem(Item item){
        return itemRepository.save(item);
    }

    public Item updateItem(Item item){
        return itemRepository.save(item);
    }

    public Item deleteItem(int id){
        Optional<Item> item = itemRepository.findById(id);
        if(item.isPresent()){
            itemRepository.deleteById(id);
        }
        return null;
    }

    public List<Item> getItemsByName(String name) {
        return itemRepository.findByName(name);
    }

    public List<Item> getItemsByCategory(String category) {
        return itemRepository.findByCategory(category);
    }

    public List<Item> getItemsByAvailability() {
        return itemRepository.findByAvailability();
    }
}
