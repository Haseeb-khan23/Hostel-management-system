package org.Haseeb.project.Hostelmanagement.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//@Entity
//public class Student {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//
//    private String name;
//    private String room;}
@Entity
@Getter
@Setter

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int room;

    // Optional but good
//    private String course;
//    private String phone;

    // getters & setters

    //REQUIRED
    public Student() {}

    //REQUIRED
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getRoom() { return room; }
    public void setRoom(int room) { this.room = room; }
}