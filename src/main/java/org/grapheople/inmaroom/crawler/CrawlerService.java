package org.grapheople.inmaroom.crawler;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class CrawlerService {
    public void crawlWeb(String url) {

        try {
            // Jsoup을 사용하여 웹페이지를 가져옴
            Document document = Jsoup.connect(url).get();

            // 예제: 웹페이지의 제목을 출력
            String webText = document.text();
            System.out.println("=============================");
            System.out.println(webText);
            System.out.println("=============================");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}