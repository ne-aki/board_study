package com.hcnc.spring_board_practice.board.controller;

import com.hcnc.spring_board_practice.board.dto.BoardDTO;
import com.hcnc.spring_board_practice.board.mapper.BoardMapper;
import com.hcnc.spring_board_practice.board.service.BoardService;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;

    @GetMapping("")
    public ResponseEntity<?> selectBoardList() {
        try {
            List<BoardDTO> boardList = boardService.selectBoardList();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(boardList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("목록 조회 중 오류가 발생하였습니다.");
        }
    }

    @PostMapping("")
    public ResponseEntity<?> regBoard(@RequestBody BoardDTO boardDTO) {
        try {
            boardService.regBoard(boardDTO);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("게시글 등록 중 오류가 발생하였습니다.");
        }
    }
}
