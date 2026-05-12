package org.Haseeb.project.Hostelmanagement.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column(nullable = false)
    @NotBlank (message = "Name is required")
    private String name;

    //@Column(nullable = false, unique = true)
    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp="^[0-9]{10}$", message="Mobile number must be 10 digit")
    private String mobileNo;

    //@Column(nullable = false)
    @Min(value=1, message="Room number must be positive")
    private int room;

    @NotBlank(message = "Course is required")
    private String course;

    @NotBlank(message = "Address is required")
    private String address;

    public Student() {
    }
}