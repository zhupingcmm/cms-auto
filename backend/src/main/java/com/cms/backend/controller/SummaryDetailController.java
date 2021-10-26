package com.cms.backend.controller;

import com.cms.backend.dto.Response;
import com.cms.backend.service.ISummaryDetailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class SummaryDetailController {

    private final ISummaryDetailService summaryDetailService;

    public SummaryDetailController(ISummaryDetailService summaryDetailService) {
        this.summaryDetailService = summaryDetailService;
    }

    @ResponseBody
    @GetMapping("/testnames")
    public ResponseEntity<Response> getTestNames () {
        Response response = (Response) summaryDetailService.getTestNames();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
