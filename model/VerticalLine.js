/**
 * Define component for vertical line (like splitter in toolbar) to split form objects.
 *
 * Use xtype: 'Vline'
 *
 * @copyright   16.07.2013, icemanovich
 */

Ext.define("App.model.VerticalLine",{
        extend:"Ext.container.Container",
        alias:"widget.Vline",

        defaultSizes:{
            width: 15,
            height: 22
        },

        initComponent: function(){
            var me = this,
                width  = me.width  || 0,
                height = me.height || 0;

            if (!width) { me.setWidth(me.defaultSizes.width);}
            if (!height){ me.setHeight(me.defaultSizes.height);}

            me.update('<div style="display:block;margin:0 auto;width:2px;height:100%;border-left:1px solid #CCCCCC;border-right:1px solid white;"></div>');
            me.callParent(arguments);
        }
    }
);