function client_dvm_initialize_filters_inputs() {
    $("#filter_qty").val(""), $("#filter_min_price").val(""), $("#filter_max_price").val("")
}

function client_dvm_reset_maps(t) {
    if (t = "undefined" != typeof t ? t : !0, t && client_dvm_initialize_filters_inputs(), is_static_map || dvm_reset_maps(t), checkboxes = $("#" + tickets_container + " input[type=checkbox]:checked"), checkboxes.length > 0)
        for (var e = 0; e < checkboxes.length; e++)
            checkboxes[e].checked = "";
    $("#" + tickets_container + " .rowTicket").show()
}

