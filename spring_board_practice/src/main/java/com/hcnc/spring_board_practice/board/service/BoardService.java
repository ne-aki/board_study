package com.hcnc.spring_board_practice.board.service;

import com.hcnc.spring_board_practice.board.dto.BoardDTO;
import com.hcnc.spring_board_practice.board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;

    public List<BoardDTO> selectBoardList() {
        return boardMapper.selectBoardList();
    }

    public void regBoard(BoardDTO boardDTO) {
        boardMapper.regBoard(boardDTO);
    }
}
