package com.cms.backend.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "lr_summary_detail")
@Data
public class SummaryDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "test_set_name", columnDefinition = "text")

    private String testName;

    @Column(name = "version_build_name", columnDefinition = "text")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String version;

    @Column(name = "test_start_time", columnDefinition = "timestamp")
    private Date startTime;

    @Column(name = "transaction_name", columnDefinition = "text")
    private String transactionName;

    @Column(name = "order_seq", columnDefinition = "smallint(64)")
    private Integer orderSeq;

    @Column(name = "minimum", columnDefinition = "numeric")
    private Integer minimum;

    @Column(name = "average", columnDefinition = "numeric")
    private BigDecimal average;

    @Column(name = "std_deviation", columnDefinition = "numeric")
    private BigDecimal stdDeviation;

    @Column(name = "percent_90", columnDefinition = "numeric")
    private BigDecimal percent;

    @Column(name = "pass", columnDefinition = "smallint(64)")
    private Integer pass;

    @Column(name = "fail", columnDefinition = "smallint(64)")
    private Integer fail;

    @Column(name = "stop", columnDefinition = "smallint(64)")
    private Integer stop;

}
