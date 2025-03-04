package com.miapi.championsapi.model;

public class Champion {
    private int year;
    private String sede;
    private String campeon;
    private String subcampeon;
    private String resultado;

    // Constructor, getters y setters
    public Champion(int year, String sede, String campeon, String subcampeon, String resultado) {
        this.year = year;
        this.sede = sede;
        this.campeon = campeon;
        this.subcampeon = subcampeon;
        this.resultado = resultado;
    }

    // Getters y Setters (Usa Lombok si lo añadiste como dependencia)
    public int getYear(){
        return year;
    }
    
    public void setYear(int year){
        this.year = year;
    }
    
    public String getSede(){
        return sede;
    }
    
     public void setSede(String sede){
        this.sede = sede;
    }
     
     public String getCampeon(){
        return campeon;
    }
    
     public void setCampeon(String campeon){
        this.campeon = campeon;
    }
     
     public String getSubcampeon(){
        return subcampeon;
    }
    
     public void setSubcampeon(String subcampeon){
        this.subcampeon = subcampeon;
    }
     
     public String getResultado(){
        return resultado;
    }
    
     public void setResultado(String resultado){
        this.resultado = resultado;
    }
    
}

