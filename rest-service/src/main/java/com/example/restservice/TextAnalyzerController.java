package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class TextAnalyzerController {

    @GetMapping("/analyze")
    public TextAnalyzer textAnalyzer(@RequestParam(value = "text") String text, @RequestParam(value = "letterType") String letterType) {
        return new TextAnalyzer(text, letterType);
    }
}
