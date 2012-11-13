function bottomBar(tableSize, windowSize){
	if( (windowSize - tableSize) <= 128 ) {
		$('div.action').css({
			position: "fixed",
			width: "99.7%",
			bottom: "0"
		});
		$('table').css('margin', '0 0 42px 0');
	}
	else {
		$('div.action').css({
			position: "static",
			width: "auto",
			bottom: "auto"
		});
		$('table').css('margin', '0 0 0 0');
	}	
}


/*
  Test if a name is valid and popup errors to the user.  
  Return true if the name is valid and false otherwise.
*/
function is_valid_name(name) {
    // Don't let the user supply a blank name or all whitespace.
    // If they do that then there will be no link to click on in the breadcrumb.
    if(/^\s*$/.test(name)) {
        if(name) {
            alert("Your name cannot be all whitespace.");
        }
        else {
            alert("You must supply a name.");
        }
        return false;
    }
    else if(/^\s+/.test(name)) {
        alert("Your name cannot begin with whitespace");
        return false;
    }

    return true;
}


/* 
  Given a string, if it is longer than the specified 'length' shorten it and tack on '...'.
*/
function shorten_long_name(name, length, escape) {
    new_name = name;
    if (name.length > length) {
        new_name = name.substr(0,length-1) + "...";
    }

    if(escape) {
        new_name = new_name.replace(/</g, '&lt;');
        new_name = new_name.replace(/>/g, '&gt;');
        // Add any further replacements here if other characters are problematic
    }

    return new_name;
}

/*
  element - a DOM element
  tip     - OPTIONAL: the text of the tooltip
  length  - OPTIONAL: this is only used if 'tip' is specified.  If this is also supplied the
            tooltip will only be applied if tip.length is greater than the supplied length
*/
function apply_tooltip(element, tip, length) {
    if(tip) {
        if(tip.length < length) {
			if ('object' === typeof $(element).data('tooltip'))
				element.tooltip({ disabled: true });
            return false;
        }
        new_tip = tip.replace(/</g, '&lt;');
        new_tip = new_tip.replace(/>/g, '&gt;');
        element.attr("title", " - " + new_tip);
    }

    element.tooltip({ 
	    positionLeft:true,
	    delay: 0, 
	    showURL: false, 
	    showBody: " - ", 
	    fade: 250 
	});
}

/* 
  Calls jQuery cuteTime function to create a well formatted timestamp.
    time - An epoch timestamp
 */
function cute_time(time) {
    var d = new Date();
    d.setTime(time);
    return $.cuteTime({}, d.toUTCString());
}
