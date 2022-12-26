package com.example;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

//import org.junit.jupiter.api.Test;
import org.junit.Test;
import org.junit.jupiter.api.AfterAll;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
public class BookstoreApplicationTests {
	
	@Autowired
    private MockMvc mockMvc;	
	 
	// Testing add Content
	@Test
    public void test_case1() throws Exception {
	String dataOne = "{\"content\":\"testing\"}";
	mockMvc.perform(MockMvcRequestBuilders.post("/add")
			.contentType(MediaType.APPLICATION_JSON)
			.content(dataOne)
			.accept(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andReturn();
    }
	 
	// Testing get all content
	 @Test
	 public void test_case2() throws Exception {

		 mockMvc.perform(MockMvcRequestBuilders.get("/getAllData")
				.accept(MediaType.APPLICATION_JSON))
	        	.andExpect(status().isOk())
	        	.andReturn();
	 }
	 
	 // Testing delete all content
	 @Test
	 public void test_case3() throws Exception {

		 mockMvc.perform(MockMvcRequestBuilders.get("/removeAllData")
				.accept(MediaType.APPLICATION_JSON))
	        	.andExpect(status().isOk())
	        	.andReturn();
	 }
}
