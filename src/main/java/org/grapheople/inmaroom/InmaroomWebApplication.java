package org.grapheople.inmaroom;


import org.grapheople.inmaroom.crawler.CrawlerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

//@SpringBootApplication
public class InmaroomWebApplication {
    public static void main(String[] args) {
//        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
//        SpringApplication.run(InmaroomWebApplication.class, args);
        CrawlerService crawlerService = new CrawlerService();
        crawlerService.crawlWeb("https://www.granfondokorea.com/0101_prologue.htm");
    }
}