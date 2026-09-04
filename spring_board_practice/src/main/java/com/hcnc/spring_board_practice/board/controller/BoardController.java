package com.hcnc.spring_board_practice.board.controller;

import com.hcnc.spring_board_practice.board.dto.BoardDTO;
import com.hcnc.spring_board_practice.board.mapper.BoardMapper;
import com.hcnc.spring_board_practice.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;

    @GetMapping("")
    public List<BoardDTO> selectBoardList() {
        return boardService.selectBoardList();
    }
}
