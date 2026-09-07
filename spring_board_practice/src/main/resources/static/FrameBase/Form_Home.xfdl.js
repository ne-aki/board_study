(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Home");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staHome","69","60","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("홈 화면");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoBoard","129","184","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시판 가기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Home.xfdl", function() {

        this.btnGoBoard_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Board.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnGoBoard.addEventHandler("onclick",this.btnGoBoard_onclick,this);
        };
        this.loadIncludeScript("Form_Home.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
