jQuery(document).ready((function(e){e(".editable").editable().on("hidden",(function(o,t){var r=e(event.currentTarget).data("locale");if("save"===t&&e(event.currentTarget).removeClass("status-0").addClass("status-1"),"save"===t||"nochange"===t){var a=e(event.currentTarget).closest("tr").next().find(".editable.locale-"+r);setTimeout((function(){a.editable("show")}),300)}})),e(".group-select").on("change",(function(o){var t=e(o.currentTarget).val();window.location.href=t?route("translations.index")+"?group="+encodeURI(e(o.currentTarget).val()):route("translations.index")})),e(".box-translation").on("click",".button-import-groups",(function(o){o.preventDefault();var t=e(o.currentTarget);t.addClass("button-loading");var r=t.closest("form");e.ajax({url:r.prop("action"),type:"POST",data:r.serialize(),success:function(e){t.removeClass("button-loading"),e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),r.removeClass("dirty"))},error:function(e){t.removeClass("button-loading"),Botble.handleError(e)}})})),e(document).on("click",".button-publish-groups",(function(o){o.preventDefault(),e("#confirm-publish-modal").modal("show")})),e("#confirm-publish-modal").on("click","#button-confirm-publish-groups",(function(o){o.preventDefault();var t=e(o.currentTarget);t.addClass("button-loading");var r=e(".button-publish-groups").closest("form");e.ajax({url:r.prop("action"),type:"POST",data:r.serialize(),success:function(e){t.removeClass("button-loading"),e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),r.removeClass("dirty")),t.closest(".modal").modal("hide")},error:function(e){t.removeClass("button-loading"),Botble.handleError(e)}})}))}));
