'use strict';

(function ($, window, undefined) {

    // Create prototype

    function FadeBox(element) {
        var _self = this;

        _self.options = {
            overFlowClassName: 'fade-box-overflow',
            expandClassName: 'fade-box-expand',
            contentSelector: '.fade-box-content'
        };

        _self.element = element;
        _self.$element = $(element);
        _self.$content = $(element).find(_self.options.contentSelector);
        _self.content = _self.$content.get(0);

        $(window)
            .on('resize', $.proxy(_self.fit, _self));

        _self.$content
            .on('click', $.proxy(_self.toggleContent, _self));

        _self.fit();

    }

    FadeBox.prototype = {
        fit: function (e) {
            var _self = this;

            _self.shouldToggle = _self.isOverFlowing();

            _self.$element
                .removeClass(_self.options.overFlowClassName)
                .removeClass(_self.options.expandClassName);

            _self.$element.toggleClass(_self.options.overFlowClassName, _self.shouldToggle);

        },
        isOverFlowing: function () {
            var _self = this,
                curOverflow = _self.content.style.overflow;

            if (!curOverflow || curOverflow === "visible") {
                _self.content.style.overflow = "hidden";
            }

            var isOverflowing = _self.content.clientWidth < _self.content.scrollWidth
                || _self.content.clientHeight < _self.content.scrollHeight;

            _self.content.style.overflow = curOverflow;

            return isOverflowing;
        },
        toggleContent: function () {
            var _self = this;

            if (_self.shouldToggle) {
                _self.$element.toggleClass(_self.options.expandClassName);
            }
        }
    };

    // Create jQuery plugin
    $.fn.fadeBox = function () {
        return this.each(function () {
            var _self = this,
                $_self = $(_self);

            if (typeof $_self.data('fadeBox') !== 'object') {
                // Bind object to element dataset
                $_self.data('fadeBox', new FadeBox(_self));
            }
        });
    };

})(jQuery, window);
