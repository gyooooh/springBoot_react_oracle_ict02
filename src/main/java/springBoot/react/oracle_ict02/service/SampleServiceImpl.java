package springBoot.react.oracle_ict02.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.react.oracle_ict02.dao.SampleMapper;
import springBoot.react.oracle_ict02.dto.SampleDTO;

@Service
public class SampleServiceImpl implements SampleService {

	@Autowired
	private SampleMapper dao;
	
	// 상품목록
	@Override
	public List<SampleDTO> listAll() throws ServletException, IOException {
		System.out.println("서비스 - listAll");
		
		List<SampleDTO> list = dao.sampleList();
		System.out.println("list : " + list);
		return list;
	}

	// 상품등록
	@Override
	public int insertSample(SampleDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertSample");
		
		int insertCnt = dao.insertSample(dto);
		return insertCnt;
	}

	// 상품수정
	@Override
	public int updateSample(SampleDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateSample");
		System.out.println("dto----------" + dto.toString());
		int updateCnt = dao.updateSample(dto);
		return updateCnt;
	}
	
	// 상품삭제
	@Override
	public int deleteSample(int id) throws ServletException, IOException {
		System.out.println("서비스 - deleteSample");
		
		int deleteCnt = dao.deleteSample(id);
		return deleteCnt;
	}

	// 상품상세페이지
	@Override
	public SampleDTO findById(int id) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		SampleDTO dto = dao.findById(id);
		return dto;
	}

	
}
