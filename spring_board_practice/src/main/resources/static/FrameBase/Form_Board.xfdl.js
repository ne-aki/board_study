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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "title","type" : "STRING","size" : "256"},{"id" : "writer","type" : "STRING","size" : "256"},{"id" : "regDate","type" : "DATETIME","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","99","72","641","308",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsBoardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"title\"/><Cell col=\"1\" text=\"writer\"/><Cell col=\"2\" text=\"regDate\"/></Band><Band id=\"body\"><Cell text=\"bind:title\"/><Cell col=\"1\" text=\"bind:writer\"/><Cell col=\"2\" text=\"bind:regDate\"/></Band></Format></Formats>");
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
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_onload,this);
        };
        this.loadIncludeScript("Form_Board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
