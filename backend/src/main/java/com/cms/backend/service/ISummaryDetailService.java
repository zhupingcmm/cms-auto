package com.cms.backend.service;

import com.cms.backend.model.SummaryDetail;

import java.util.List;

public interface ISummaryDetailService {

    List<SummaryDetail> findByTestName(String testName);
}
