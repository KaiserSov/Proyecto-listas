package com.project.sofka.proyecto.repo;

import com.project.sofka.proyecto.model.Tarea;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TareaRepository extends MongoRepository<Tarea, String> {
}
