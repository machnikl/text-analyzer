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
        String uppercaseInput = this.textInput.toUpperCase();
        char[] chars = uppercaseInput.toCharArray();

        if (Objects.equals(letterType, "vowels")) {
            for (int i = 0; i < chars.length; i++) {
                if (this.isVowel(chars[i])) {
                    this.addLetterToLetterList(String.valueOf(chars[i]));
                }
            }
        } else if (Objects.equals(letterType, "consonants")) {
            for (int i = 0; i < chars.length; i++) {
                if (!this.isVowel(chars[i])) {
                    this.addLetterToLetterList(String.valueOf(chars[i]));
                }
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
