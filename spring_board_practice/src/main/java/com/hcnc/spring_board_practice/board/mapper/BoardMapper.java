package com.hcnc.spring_board_practice.board.mapper;

import com.hcnc.spring_board_practice.board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardDTO> selectBoardList();
    void regBoard(BoardDTO boardDTO);
}
