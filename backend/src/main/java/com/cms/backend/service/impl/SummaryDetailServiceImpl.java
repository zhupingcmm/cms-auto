package com.cms.backend.service.impl;

import com.cms.backend.dao.SummaryDetailRepository;
import com.cms.backend.dto.Response;
import com.cms.backend.model.SummaryDetail;
import com.cms.backend.service.ISummaryDetailService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
public class SummaryDetailServiceImpl implements ISummaryDetailService<Response> {
    private final SummaryDetailRepository repository;

    public SummaryDetailServiceImpl(SummaryDetailRepository repository) {
        this.repository = repository;
    }

    @Override
    public Response getTestNames() {
        List<String> testNames = repository.getTestNames();
        Response response = new Response();
        response.setData(testNames);
        return response;
    }


}
