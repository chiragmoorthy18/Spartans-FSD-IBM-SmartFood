package com.spartans.base.Model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.Data;
@Data
public class FinalResponceModel {

	String uUuid;
	String uprUuid;
	int category;
	Float targetWeight;
	Long targetDate;
	List<String> cusines;
	public FinalResponceModel() {
		super();
	cusines=new ArrayList<String>();
	}
	


}
