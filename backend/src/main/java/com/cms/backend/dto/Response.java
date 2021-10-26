package com.cms.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Response {

    private Integer errorCode = 0;

    private String message;

    private Object data;

    public Response(Object data) {
        this.data = data;
    }
}
