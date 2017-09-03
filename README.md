# Oracle APEX Dynamic Action Plugin -  Copy Down
Oracle Apex plug-in for implementing the functions up, down and copy down in tabular forms.

The plug-in delivers the following functionality in tabular forms:
- [Up] move up to previous row
- [Down] move down to next row
- [Ctrl] + [Down] copy content of current cell to cell below and set focus to this cell
- [Ctrl] + [Up] copy content of current cell to cell above and set focus to this cell
- [Ctrl] + [Shift] + [C] copy content of current cell to cell below and set focus to this cell ( needed for Select items because they have another function for [Down] )

## Change history
- V1.0    Initial version

## Requirements
The plugin can be used with Apex 5.0 and Apex 5.1. 

## Install
- Import plugin file "dynamic_action_plugin_nl_detora_apex_copydown.sql" from source directory into your application
- Create a Page load dynamic action in which you call the plugin

## Plugin Settings
No settings are needed.

## Demo Application
http://www.speech2form.com/ords/f?p=OPFG:COPYDOWN

## Preview
![](https://raw.githubusercontent.com/dickdral/apex-copy_to_clipboard/master/copydown_example.gif?raw=true)
---
