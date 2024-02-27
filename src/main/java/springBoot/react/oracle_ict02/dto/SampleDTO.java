package springBoot.react.oracle_ict02.dto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity    
@Table(name="mvc_sample_tbl") // 생략시 table or view not found
public class SampleDTO {

	   private int id;			// PK
	   private String name;
	   private String brand;
	   private String madein;
	   private int price;
	   
	   
	   // @GeneratedValue(strategy=GenerationType.IDENTITY)  // PK(id)를 AUTO_INCREMENT로 생성한 경우
	   @Id
	   public int getId() {
	      return id;
	   }
	   
	   public void setId(int id) {
	      this.id = id;
	   }
	   
	   public String getName() {
	      return name;
	   }
	   
	   public void setName(String name) {
	      this.name = name;
	   }
	   
	   public String getBrand() {
	      return brand;
	   }
	   
	   public void setBrand(String brand) {
	      this.brand = brand;
	   }
	   
	   public String getMadein() {
	      return madein;
	   }
	   
	   public void setMadein(String madein) {
	      this.madein = madein;
	   }
	   
	   public int getPrice() {
	      return price;
	   }
	   
	   public void setPrice(int price) {
	      this.price = price;
	   }
}
