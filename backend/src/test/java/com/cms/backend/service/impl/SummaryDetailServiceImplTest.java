package com.cms.backend.service.impl;

import com.cms.backend.dto.Response;
import com.cms.backend.model.SummaryDetail;
import com.cms.backend.service.ISummaryDetailService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
public class SummaryDetailServiceImplTest {
    @Autowired
    private ISummaryDetailService service;

    @Test
    public void findByTestNameTest () {
        Response response = (Response) service.getTestNames();
        System.out.println(response);
    }

}
