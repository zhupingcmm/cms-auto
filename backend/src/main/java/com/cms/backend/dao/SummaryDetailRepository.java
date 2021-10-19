package com.cms.backend.dao;

import com.cms.backend.model.SummaryDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SummaryDetailRepository extends JpaRepository<SummaryDetail, Long>, JpaSpecificationExecutor<SummaryDetail> {

    List<SummaryDetail> findByTestName(String testName);
}
