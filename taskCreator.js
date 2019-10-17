//Generates tasks from a list collector.
//cmdb_ci should be changed to match the list collector's table name.

var list_collect = current.variables.list_collector; // Variable name in your catalog item

var list_split = list_collect.toString().split(',');

for(var i=0; i<list_split.length;i++) 
{

	var gr = new GlideRecord("sc_task");

	gr.initialize();
	
	gr.cmdb_ci = list_split[i];

	gr.parent = current.sys_id;
	
	gr.short_description= "Task for: " + gr.cmdb_ci.name;
	
	gr.request=current.request;

	gr.request_item = current.sys_id;
	
	gr.assignment_group = current.assignment_group;

	gr.insert();

}
