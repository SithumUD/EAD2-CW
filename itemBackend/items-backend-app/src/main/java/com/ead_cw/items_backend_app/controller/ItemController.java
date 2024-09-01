package com.ead_cw.items_backend_app.controller;

import com.ead_cw.items_backend_app.data.Item;
import com.ead_cw.items_backend_app.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(path="")
    public List<Item> findAllItems(){
        return itemService.getItems();
    }

    @GetMapping (path="/{id}")
    public Item findItemById(@PathVariable int id){
        return itemService.getItemById(id);
    }

    @PostMapping(path= "")
    public Item createItem(@RequestBody Item item){
        return itemService.createItem(item);
    }

    @PutMapping (path = "")
    public Item updateItem(@RequestBody Item item){
        return itemService.updateItem(item);
    }

    @DeleteMapping (path = "/{id}")
    public Item deleteItem(@PathVariable int id){
        return itemService.deleteItem(id);
    }

    @GetMapping(value = "", params = "name")
    public List<Item> findItemsByName(@RequestParam String name) {
        return itemService.getItemsByName(name);
    }

    @GetMapping(value = "", params = "category")
    public List<Item> findItemsByCategory(@RequestParam String category) {
        return itemService.getItemsByCategory(category);
    }

    @GetMapping("/available-items")
    public List<Item> findAvailableItems() {
        return itemService.getItemsByAvailability();
    }

}

