package springBoot.react.oracle_ict02.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.react.oracle_ict02.dto.SampleDTO;
import springBoot.react.oracle_ict02.service.SampleServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/samples")
public class SampleController {

	@Autowired
	private SampleServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(SampleController.class);
	
	// http://localhost:8081/samples
	// List
	@GetMapping
	public List<SampleDTO> sampleList(HttpServletRequest req, HttpServletResponse res, Model model)
			throws ServletException, IOException {
			logger.info("<<< url - sampleList >>>");
		
			return service.listAll();
	}
	
	// Insert
	@PostMapping
	public Map<String, Object> sampleInsert(@RequestBody SampleDTO dto)
			throws ServletException, IOException {
			logger.info("<<< url - sampleList >>>");
	
			
			
			return null;
	
	}
}
