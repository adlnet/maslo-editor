// Help window functionality - currently no-op
function help() {
	if ($("#dialog-help").length == 0) {
	var divTag = $('<div id="dialog-help" title="About Maslo"></div>');
	var text = "<h4>MASLO Frequently Asked Questions</h4>\
	\
	Q: What is MASLO?\
	<br />\
	A: MASLO stands for Mobile Access to Supplemental Learning Objects.\
	It is an open source software system for authoring packages of\
	supplemental learning materials and distributing them to mobile\
	devices.\
\
	<br />\
	<br />\
	Q: What platforms does MASLO deliver content to?\
	A: MASLO will publish to the iOS and Android platforms. As it is\
	an open source project, developers are free to adapt the authoring\
	software to publish to other platforms.\
\
	<br />\
	<br />\
	Q: Does MASLO publish to tablet devices?\
	<br />\
	A: MASLO is not designed to publish to tablet devices (i.e. iPad,\
	Galaxy Tab, etc.) at this time.\
\
	<br />\
	<br />\
	Q: Is MASLO a learning management system (LMS)?\
	<br />\
	A: MASLO is not an LMS. It is designed to deliver supplemental\
	materials for learners rather than hosting access to a full course.\
	For this reason, the MASLO system does not support the delivery of\
	traditional documents and presentations (i.e. .pdf, .doc, .ppt,\
	etc.). Instead it is designed to deliver content in formats that\
	are particularly well suited for smartphones and other handheld\
	mobile devices.\
\
	<br />\
	<br />\
	Q: What kinds of supplemental learning materials does the MASLO\
	system support?\
	<br />\
	A: Currently MASLO supports the creation and distribution of text,\
	image, audio, video, and quiz items.\
\
	<br />\
	<br />\
	Q: What do I need in order to set up the MASLO system for teachers\
	and learners in my organization or institution?\
	<br />\
	A: While the MASLO authoring tool only requires you to have Adobe\
	AIR installed on your personal computer, in order to distribute\
	content with the MASLO system you need to have the technical capacity\
	to stand up your own instance of the iOS and Android applications\
	in the iTunes App Store and Android Market, and establish an instance\
	of the cloud distribution system. For more information on these\
	technical requirements see insert link to appropriate section when\
	available.\
\
	<br />\
	<br />\
	Q: Can MASLO be utilized to create learner generated content?\
	<br />\
	A: There are no technical features of MASLO designed to limit the\
	production of learner generated content. However, because MASLO is\
	designed to deliver content through in app purchasing your institution\
	will need to develop a system that allows learners to populate\
	content within your versions of the player apps if you want learner\
	generated content in your system.";
	
	divTag.append(text);
	$("body").append(divTag);
	}
	$( "#dialog-help" ).dialog({
		height:600,
		width:550,
		modal: true,
		buttons: {			
			Close: function() {
				$( this ).dialog( "close" );
			}
		}
	});	
	return false;
}