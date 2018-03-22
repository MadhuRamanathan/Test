var depId = SupportUI.Departments.departments[0].depid;
var pname = SupportUI.CurrentPortal.portalName;
var test = {"firstName":"","lastName":"hacker","associatedDepartmentIds":["'+depId+'"],"perType":"AgentPublic","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"dagruxx24@gmail.com"};
test=JSON.parse(test);
$.post('https://desk.zoho.com/api/v1/agents?portalname="+pname+"',test);
