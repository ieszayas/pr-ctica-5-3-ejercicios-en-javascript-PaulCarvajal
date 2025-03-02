package com.miapi.championsapi.controller;

import com.miapi.championsapi.model.Champion;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/champions")
@CrossOrigin(origins = "*") 
public class ChampionController {
    private List<Champion> champions = new ArrayList<>();

    public ChampionController() {
        champions.add(new Champion(2025, "Lisboa", "Barça", "Liverpool", "3 - 1"));
        champions.add(new Champion(2024, "Londres", "Real Madrid", "Dortmund", "2 - 0"));
        champions.add(new Champion(2023, "Estambul", "Manchester City", "Inter de Milán", "1 - 0"));
        champions.add(new Champion(2022, "París", "Madrid", "Liverpool", "1 - 0"));
    }

   @GetMapping // Define un endpoint para obtener la lista
    public List<Champion> getChampions() {
        return champions;
    }
    
    
  @PostMapping
    public Champion addChampion(@RequestBody Champion newChampion) {
        // Aquí agregas el campeón a la base de datos
        champions.add(newChampion);
        return newChampion; 
    }

@DeleteMapping("/{year}")
public ResponseEntity<String> deleteChampion(@PathVariable int year) {
    boolean removed = champions.removeIf(champion -> champion.getYear() == year);
    if (removed) {
        return ResponseEntity.ok("Campeón eliminado correctamente");
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Campeón no encontrado");
    }
}

  
    
    
}
