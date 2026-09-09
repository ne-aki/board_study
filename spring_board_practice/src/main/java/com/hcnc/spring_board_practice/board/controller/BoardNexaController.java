package com.hcnc.spring_board_practice.board.controller;

import com.hcnc.spring_board_practice.board.dto.BoardDTO;
import com.hcnc.spring_board_practice.board.service.BoardService;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardNexaController {
    private final BoardService boardService;

    @GetMapping("/selectBoardList.do")
    public NexacroResult selectBoardList() {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsBoardList", boardService.selectBoardList());
        return result;
    }

    @PostMapping("/regBoard.do")
    public NexacroResult regBoard(@ParamDataSet(name = "dsBoard") BoardDTO dsBoard) {
        NexacroResult result = new NexacroResult();

        BoardDTO param = new BoardDTO();

        param.setTitle(dsBoard.getTitle());
        param.setWriter(dsBoard.getWriter());
        param.setContent(dsBoard.getContent());

        boardService.regBoard(param);

        return result;
    }
}
