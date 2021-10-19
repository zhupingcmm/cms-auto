package com.cms.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SummaryDetailDto {
    private Long id;

    private String testName;

    private String version;

    private Date startTime;

    private String transactionName;

    private Integer orderSeq;

    private BigDecimal average;

    private BigDecimal stdDeviation;

    private BigDecimal percent;

    private Integer pass;

    private Integer fail;

    private Integer stop;
}
