package springBoot.react.oracle_ict02.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

import springBoot.react.oracle_ict02.dto.SampleDTO;

public interface SampleService {

	// 상품목록
	public List<SampleDTO> listAll()
			throws ServletException, IOException;
	
	// 상품등록
	public int insertSample(SampleDTO dto)
			throws ServletException, IOException;
	
	
	// 상품수정
	public int updateSample(SampleDTO dto)
			throws ServletException, IOException;	
	
	// 상품삭제
	public int deleteSample(int id)
			throws ServletException, IOException;	
	
	// 상품상세페이지
	public SampleDTO findById(int id)
			throws ServletException, IOException;	
	
}
