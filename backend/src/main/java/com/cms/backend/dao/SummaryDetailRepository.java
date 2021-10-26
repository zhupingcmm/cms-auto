package com.cms.backend.dao;

import com.cms.backend.model.SummaryDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SummaryDetailRepository extends JpaRepository<SummaryDetail, Long>, JpaSpecificationExecutor<SummaryDetail> {

    @Query(nativeQuery = true, value = "select distinct test_set_name from lr_summary_detail")
    List<String> getTestNames();
}
