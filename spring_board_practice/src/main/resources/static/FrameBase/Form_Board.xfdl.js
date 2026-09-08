(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "No","type" : "INT","size" : "256"},{"id" : "title","type" : "STRING","size" : "256"},{"id" : "writer","type" : "STRING","size" : "256"},{"id" : "regDate","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdBoard","19","70","641","308",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsBoardList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:writer\"/><Cell col=\"3\" text=\"bind:regDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoHome","390","390","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("홈화면");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoRegBoard","540","390","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시글 작성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board.xfdl", function() {
        this.Form_Board_onload = function(obj,e)
        {
        	this.transaction(
        		"selectBoardList"
        		, "BoardSrv::selectBoardList.do"
        		, ""
        		, "dsBoardList=dsBoardList"
        		, ""
        		, "fnCallback"
        		, false
        	);

        	this.fn_setBoardList();

        	//console.log(this.dsBoardList.getColumn(0, "No"));
        	//console.log(this.dsBoardList.rowcount);
        };

        // setBoardList의 No컬럼 세팅
        this.fn_setBoardList = function ()
        {
        	this.dsBoardList.addColumn("No", "STRING", 256);

        	var rowcount = this.dsBoardList.getRowCount();
        	//console.log("loop 진입, rowcount:", rowcount);

        	for (var i = 0; i < rowcount; i++)
        	{
        		var val = rowcount - i;
        		this.dsBoardList.setColumn(i, "No", val);
        		//console.log(rowcount);
        		//console.log(val);
        	}
        };

        this.btnGoHome_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Home.xfdl");
        };

        this.btnGoRegBoard_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Reg_board.xfdl")
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_onload,this);
            this.btnGoHome.addEventHandler("onclick",this.btnGoHome_onclick,this);
            this.btnGoRegBoard.addEventHandler("onclick",this.btnGoRegBoard_onclick,this);
        };
        this.loadIncludeScript("Form_Board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
