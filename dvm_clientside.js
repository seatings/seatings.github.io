
function client_dvm_initialize_filters_inputs() {
    $("#filter_qty").val(""), $("#filter_min_price").val(""), $("#filter_max_price").val("")
}
function sel_tri(t,v) {
    alert('выбран билет: ', v.value);
//  vtri = document.getElementById("formlist").elements.seltri.value,
//          param = "EventID=" + t + "&tri=" + vtri, sortqty = document.getElementById("formlist").elements.qtytri2.value,
//          sortminp = document.getElementById("formlist").elements.minprice2.value,
//          sortmaxp = document.getElementById("formlist").elements.maxprice2.value,
//          "all" != sortqty && (param = param + "&sortqty=" + sortqty),
//          "nomin" != sortminp && (param = param + "&sortminp=" + sortminp), 
//          "nomax" != sortmaxp && (param = param + "&sortmaxp=" + sortmaxp),
//          compar = document.getElementById("formlist").elements.compar.value,
//          "" != compar && (param = param + "&ticketscomp=" + compar), 
//          section = document.getElementById("formlist").elements.sectionsrt.value,
//          "" != section && (param = param + "&section=" + section),
//          param2 = param + "&val=nbr", client_dvm_reset_maps(!0),
//          ajax("new_listing/ajax_list_dvm.php", param, "tickets2")

    
}
function client_dvm_arg_filter(t) {
    //console.log(dvm_ticket_ids_by_filters(t));
//    $("#" + tickets_container + " .rowTicket").hide();
//    exit();
    if (is_static_map || (dvm_map_filter(t), list_ticket_id_filtred = dvm_ticket_ids_by_filters(t)), list_ticket_id_filtred && list_ticket_id_filtred.length > 0) {
        $("#" + tickets_container + " .rowTicket").hide();
       // alert('okk');
        for (var e in list_ticket_id_filtred){
        // alert( " Foor " +$("#" + tickets_container + " #" + list_ticket_id_filtred[e]))
            $("#" + tickets_container + " #" + list_ticket_id_filtred[e]).show()
        }
    } else{
        // alert("problmem"+list_ticket_id_filtred.length);
        $("#" + tickets_container + " .rowTicket").show()
    }
}
function client_dvm_reset_maps(t) {
    if (t = "undefined" != typeof t ? t : !0, t && client_dvm_initialize_filters_inputs(), is_static_map || dvm_reset_maps(t), checkboxes = $("#" + tickets_container + " input[type=checkbox]:checked"), checkboxes.length > 0)
        for (var e = 0; e < checkboxes.length; e++)
            checkboxes[e].checked = "";
    $("#" + tickets_container + " .rowTicket").show()
}
function client_dvm_compare_tickets(t) {
    
    if (client_dvm_initialize_filters_inputs(), t.length > 0) {
        $("#" + tickets_container + " .rowTicket").hide();
        for (var e in t)
            ticket_id = t[e], $("#" + tickets_container + " #" + ticket_id).show()
    }
    is_static_map || dvm_compare_tickets(t)
}
function addtocart(t, e, i, r) {
    qty = $("#" + DVM_map_params.tickets_container + " .rowTicket").filter("[data-ticketid=" + e + "]").find(".rowAvail").val(), zone = $("input[name=" + e + "]").val(), "" == zone && (zone = ""), vrf = parseInt(ajax_get("new_listing/ajax_list.php?add=cart&ticketsid=" + e + "&quantity=" + i + "&qty=" + qty + "&priced=" + r + "&eventid=" + t + "&zone=" + zone)), 2 == vrf && (window.location.href = "https://www.barrystickets.com/checkout.php")
}
function addtocart_mobil(t, e, i, r) {
    qty = $("#" + DVM_map_params.tickets_container + " .rowTicket").filter("[data-ticketid=" + e + "]").find(".rowAvail").val(), zone = $("input[name=" + e + "]").val(), "" == zone && (zone = ""), vrf = parseInt(ajax_get("new_listing/ajax_list.php?add=cart&ticketsid=" + e + "&quantity=" + i + "&qty=" + qty + "&priced=" + r + "&eventid=" + t + "&zone=" + zone)), 2 == vrf && (window.location.href = "http://m.barrystickets.com/test-chekout/checkout.php")
}
function addtocart1(t, e, i, r) {
    qty = $("#" + DVM_map_params.tickets_container + " .rowTicket").filter("[data-ticketid=" + e + "]").find(".rowAvail").val(), document.getElementById("formlist").elements.ticketsid.value = e, document.getElementById("formlist").elements.quantity.value = i, document.getElementById("formlist").elements.qty.value = qty, document.getElementById("formlist").elements.priced.value = r, document.getElementById("formlist").elements.eventid.value = t
}
function ajax(t, e, i) {
    var r = null;
    if (window.XMLHttpRequest)
        r = new XMLHttpRequest;
    else {
        if (!window.ActiveXObject)
            return void alert("Your browser don't support XMLHTTPRequest objects...");
        r = new ActiveXObject("Microsoft.XMLHTTP")
    }
    r.open("POST", t, !0), r.onreadystatechange = function () {
        "tickets2" == i && (document.getElementById(i).innerHTML = '<div style="margin-top: 13em; "><img src="http://www.barrystickets.com/images/ajax-loading.gif"></div>'), 4 == r.readyState && (document.getElementById(i).innerHTML = r.responseText)
    }, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(e)
}
function ajax_get(t) {
    if (window.XMLHttpRequest)
        xhr_object = new XMLHttpRequest;
    else {
        if (!window.ActiveXObject)
            return!1;
        xhr_object = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return xhr_object.open("GET", t, !1), xhr_object.send(null), 4 == xhr_object.readyState ? xhr_object.responseText : !1
}
function dvm_sel_tri(t) {
    vtri = document.getElementById("formlist").elements.seltri.value, param = "EventID=" + t + "&tri=" + vtri, sortqty = document.getElementById("formlist").elements.qtytri2.value, sortminp = document.getElementById("formlist").elements.minprice2.value, sortmaxp = document.getElementById("formlist").elements.maxprice2.value, "all" != sortqty && (param = param + "&sortqty=" + sortqty), "nomin" != sortminp && (param = param + "&sortminp=" + sortminp), "nomax" != sortmaxp && (param = param + "&sortmaxp=" + sortmaxp), compar = document.getElementById("formlist").elements.compar.value, "" != compar && (param = param + "&ticketscomp=" + compar), section = document.getElementById("formlist").elements.sectionsrt.value, "" != section && (param = param + "&section=" + section), param2 = param + "&val=nbr", client_dvm_reset_maps(!0), ajax("new_listing/ajax_list_dvm.php", param, "tickets2")
}
$("#new_map").on("click", ".reset_compare", function () {
    client_dvm_reset_maps()
}), $("#new_map").on("click", ".compare_tickets", function () {
   // console.log('9999ooo');
    var t = [];
    $("#" + tickets_container + " input[type=checkbox]:checked").each(function () {
        t.push($(this).val())
    }), client_dvm_compare_tickets(t)
}), $("#filters_orange").on("click", ".reset_compare", function () {
    client_dvm_reset_maps()
}), $("#filters_orange").on("change", "#filter_qty", function () {
 filter_vals = [], filter_vals.filter_min_price = $("#filter_min_price").val(), filter_vals.filter_max_price = $("#filter_max_price").val(), filter_vals.filter_qty = $("#filter_qty").val(), client_dvm_arg_filter(filter_vals)
}), $("#filters_orange").on("change", "#filter_min_price", function () {

filter_vals = [], filter_vals.filter_min_price = $("#filter_min_price").val(), filter_vals.filter_max_price = $("#filter_max_price").val(), filter_vals.filter_qty = $("#filter_qty").val(), client_dvm_arg_filter(filter_vals)
}), $("#filters_orange").on("change", "#filter_max_price", function () {
   filter_vals = [], filter_vals.filter_min_price = $("#filter_min_price").val(), filter_vals.filter_max_price = $("#filter_max_price").val(), filter_vals.filter_qty = $("#filter_qty").val(), client_dvm_arg_filter(filter_vals)
});
//$('input[type="checkbox"]').change(function(){
//console.log( '------------'+$( this ).val() ) ;
//});
//

//
//$('input[type=checkbox]').change(function() {
//var input = $( this );
//console.log( '------km------'+input )
//$( "p" ).html(
//".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
//".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
//".is( \":checked\" ): <b>" + $input.is( ":checked" ) ) + "</b>";
//}).change();
//-------------------------------------------------------------------------
// $('#check4').onClick(function() {
//console.log('-----------okk-----'+$(this).is(':checked'));
//        //$('#check4').val($(this).is(':checked'));
//    });
// $("#" + DVM_map_params.tickets_container + " input[type=checkbox]").click(function () {
////var $input = $( this );
//console.log('-----------okk-----');
//console.log($( this ));
//});
// $("#" + DVM_map_params.tickets_container + "input[type=checkbox]:checked").each( 
//    function() { 
//        console.log('-----------okk-----');
//console.log($( this ).attr("id"));
//       // InsГ©rer son code ici
//      // alert($(this).attr("id"));
//    } 
//);
//-------------------------------------------------------------------------
