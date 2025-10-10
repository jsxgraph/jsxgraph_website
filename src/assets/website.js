//////////////////////////////////////////
///               helpers              ///
//////////////////////////////////////////

function copyToClipboard(
    content,
    successAnchor = undefined,
    successType = undefined,
    successMessage = undefined,
    successDuration = 1800,
) {
    let el, successFunc = function () { };

    if (JXG.exists(successAnchor) && JXG.exists(successMessage)) {
        successFunc = function () {
            let obj, backup;

            switch (successType) {
                case 'bg-color':
                    obj = $(successAnchor);

                    if (obj.attr('data-copy-blocked') === 'true')
                        return;
                    obj.attr('data-copy-blocked', 'true');
                    obj.addClass(successMessage);
                    window.setTimeout(() => {
                        obj.removeClass(successMessage);
                        obj.attr('data-copy-blocked', 'false');
                    }, successDuration);
                    break;

                case 'popup':
                case 'tooltip':
                    obj = bsAddOns.enableTooltips(successAnchor, {
                        title: successMessage,
                        trigger: 'manual',
                        placement: 'top',
                    })[0];
                    obj.show();
                    window.setTimeout(() => {
                        obj.hide();
                    }, successDuration);
                    break;

                case 'text':
                    obj = $(successAnchor);
                    backup = obj.text();
                    if (obj.attr('data-copy-blocked') === 'true')
                        return;
                    obj.attr('data-copy-blocked', 'true');
                    obj.text(successMessage);
                    window.setTimeout(() => {
                        obj.text(backup);
                        obj.attr('data-copy-blocked', 'false');
                    }, successDuration);
                    break;

                case 'html':
                    obj = $(successAnchor);
                    backup = obj.html();
                    if (obj.attr('data-copy-blocked') === 'true')
                        return;
                    obj.attr('data-copy-blocked', 'true');
                    obj.html(successMessage);
                    window.setTimeout(() => {
                        obj.html(backup);
                        obj.attr('data-copy-blocked', 'false');
                    }, successDuration);
                    break;

                case 'append':
                    obj = $(successAnchor);
                    backup = obj.html();
                    if (obj.attr('data-copy-blocked') === 'true')
                        return;
                    obj.attr('data-copy-blocked', 'true');
                    obj.html(backup + successMessage);
                    window.setTimeout(() => {
                        obj.html(backup);
                        obj.attr('data-copy-blocked', 'false');
                    }, successDuration);
                    break;

                case 'off':
                    obj = $(successAnchor);
                    obj.removeClass('off');
                    window.setTimeout(() => {
                        obj.addClass('off');
                    }, successDuration);
                    break;
            }
        };
    }

    if (!navigator || !navigator.clipboard || !navigator.clipboard.write || !ClipboardItem) {
        console.log('Copied to clipboard via textarea');
        el = document.createElement('textarea');
        el.value = string;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        successFunc();

    } else if (JXG.isString(content)) {
        console.log('Copied to clipboard via navigator text');
        navigator.clipboard.writeText(content)
            .then(function () {
                successFunc();
            })
            .catch(function (e) {
                /*
                Workaround:
                Safari needs to have navigator.clipboard.write in an eventhandler directly.
                 */
                console.warn(e);
            });
    } else {
        console.log('Copied to clipboard via navigator ClipboardItem');
        navigator.clipboard.write([new ClipboardItem({[content.type]: content})])
            .then(function () {
                successFunc();
            })
            .catch(function () {
                /*
                Workaround:
                Safari needs to have navigator.clipboard.write in an eventhandler directly.
                 */
                console.warn(e);
            });
    }
}