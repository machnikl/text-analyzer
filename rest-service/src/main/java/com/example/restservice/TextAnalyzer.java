package com.example.restservice;

import java.util.HashMap;
import java.util.Objects;

public class TextAnalyzer {
    private String textInput;
    private String letterType;
    private HashMap<String, Integer> letterList = new HashMap<>();

    public TextAnalyzer(String textInput, String letterType) {
        this.textInput = textInput;
        this.letterType = letterType;
        this.countLetters();
    }

    public String getTextInput() {
        return textInput;
    }

    public String getLetterType() {
        return letterType;
    }

    public HashMap<String, Integer> getLetterList() {
        return letterList;
    }

    private void countLetters() {
        String uppercaseInput = this.textInput.toUpperCase().replaceAll("\\s+","");
        char[] chars = uppercaseInput.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            if (Objects.equals(letterType, "vowels") ? this.isVowel(chars[i]) : !this.isVowel(chars[i])) {
                this.addLetterToLetterList(String.valueOf(chars[i]));
            }
        }
    }

    private boolean isVowel(char c) {
        return "AEIOU".indexOf(c) != -1;
    }
    
    private void addLetterToLetterList(String letter) {
        Integer currentCount = this.letterList.get(letter) != null ? this.letterList.get(letter) : 0;
        this.letterList.put(letter, currentCount + 1);
    }
}
