/**
 * Short product info
 *
 * @copyright   09.11.13, Norsi-trans Ltd.
 * @version     $Id:$
 * @author:     ignat
 */


Ext.define('App.view.financeField',{

    extend: 'Ext.form.field.Text',
    alias : 'widget.finance',

    fieldLabel: 'Name',

    digitsToSplit: 3,

    sign: '',
    defaultSign : '$',

    splitter: '',
    defaultSplitter: ',',

    availableCurrencies: {
        'USD': '$',
        'EUR': 'E',
        'RUR': 'Ru'
    },

    initField: function (c) {
        console.info('init');

        var me = this;
        me.splitter      = me.splitter || me.defaultSplitter;
        me.digitsToSplit = me.digitsToSplit || me.defaultSplitter;
        me.sign = me.sign || me.defaultSign;

        Ext.apply(Ext.util.Format, {
            finance: function (value) {
                return me.convert(value, me.splitter, me.digitsToSplit);
            }
        });
        me.on('change', me.onChange, me);

    },
    onChange: function () {
        console.info('onChange');
        var me = this;
        me.setValue(Ext.util.Format.finance(me.getValue()));
    },
    /*initComponent:function(){
        var me = this;
        console.log('Call InitComponents');

        me.splitter      = me.splitter || me.defaultSplitter;
        me.digitsToSplit = me.digitsToSplit || me.defaultSplitter;

        me.sign = me.sign || me.defaultSign;

        Ext.apply(Ext.util.Format, {
            finance: function (value) {
                return me.convert(value, me.splitter, me.defaultSign);
            }
        });

        c.on('change', this.onChange, this);

      //  me.callParent(arguments);
    },*/
    /*listeners:{
        change: function(field, newValue){
            console.log('change', arguments);

//            http://www.sencha.com/forum/showthread.php?104128-Textfield-Auto-Mask-(Telephone)

            if (typeof newValue === 'string' && newValue != 'fanse'){

                var me = field;
                //var newValue = me.getValue();
                var t = me.convert(newValue, me.splitter, me.digitsToSplit);


            //me.setValue(t + me.sign, false);

                console.log('val = ', t);
            }
        },
        focus: function(){
            console.log('focus');
        }
    },*/



    convert: function( s, splitter, digits){
return;
        s = s.replace(splitter, '');
        var i = s.length % digits;
        var parts = i ? [ s.substr( 0, i ) ] : [];
        for( ; i < s.length ; i += digits )
        {
            parts.push( s.substr( i, digits ) );
        }
        return parts.join(',');

    }


});