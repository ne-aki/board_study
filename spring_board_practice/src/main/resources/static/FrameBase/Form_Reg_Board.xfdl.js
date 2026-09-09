(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Reg_Board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "title","type" : "STRING","size" : "256"},{"id" : "writer","type" : "STRING","size" : "256"},{"id" : "content","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staRegBoard","34","30","156","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시글 작성");
            obj.set_font("bold 24px/normal \"Malgun Gothic\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","52","90","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","52","120","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staWriter","50","150","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWriter","50","180","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staContent","50","210","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("taContent","50","240","230","70",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegBoard","50","350","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoList","150","350","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("목록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsBoard","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtWriter","value","dsBoard","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","taContent","value","dsBoard","content");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Reg_Board.xfdl", function() {

        this.Form_Reg_Board_onload = function(obj,e)
        {
        	this.dsBoard.clearData();
        	this.dsBoard.addRow();
        };

        this.btnRegBoard_onclick = function(obj,e)
        {
        	var isRegBoard = this.confirm("등록하시겠습니까?");
        	if (isRegBoard)
        	{
        		this.transaction(
        			"regBoard"
        			, "BoardSrv::regBoard.do"
        			, "dsBoard=dsBoard"
        			, ""
        			, ""
        			, "fnCallback"
        		);
        		this.alert("등록되었습니다.");
        		this.go("FrameBase::Form_Board.xfdl");
        	}
        };

        this.btnGoList_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Board.xfdl");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Reg_Board_onload,this);
            this.btnRegBoard.addEventHandler("onclick",this.btnRegBoard_onclick,this);
            this.btnGoList.addEventHandler("onclick",this.btnGoList_onclick,this);
        };
        this.loadIncludeScript("Form_Reg_Board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
