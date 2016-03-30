(function ($, window, undefined) {

    'use strict';

    $.pluginFactory(
        'FadeBox',
        {
            overFlowClassName: 'fade-box-overflow',
            expandClassName: 'fade-box-expand',
            contentSelector: '.fade-box-content',
            fixedHeightClassName: 'fade-box-fixed-height',
            oneClick: false
        },
        function () {
            var _self = this;

            // Cache fade box content element
            _self.$content = _self.$element.find(_self.options.contentSelector);
            _self.content = _self.$content.get(0);

            _self.$element.addClass('fade-box');
            _self.$content.addClass('fade-box-content');

            $(window)
                .on('resize', $.proxy(_self.fit, _self));

            _self.$content
                .on('click', $.proxy(_self.toggleContent, _self));

            _self.fit();
        },
        {
            fit: function (e) {
                var _self = this;

                // Reset toggle settings
                _self.disabled = false;

                _self.$element
                    .removeClass(_self.options.overFlowClassName)
                    .removeClass(_self.options.expandClassName);

                // Temporary add fixed height class in order to get fixed height value
                _self.$element.addClass(_self.options.fixedHeightClassName);

                // Get fixed height
                _self.fixedHeight = _self.element.clientHeight;

                // Removed temporary added fixed height class
                _self.$element.removeClass(_self.options.fixedHeightClassName);

                // No toggle if box isn't overflowing
                _self.shouldToggle = _self.isOverFlowing();

                // Add fixed height class if element is higher than fixed height
                _self.$element
                    .toggleClass(
                        _self.options.fixedHeightClassName,
                        _self.shouldToggle
                    )
                    .toggleClass(
                        _self.options.overFlowClassName,
                        _self.shouldToggle
                    );

            },
            isOverFlowing: function () {
                var _self = this;
                return _self.element.clientHeight > _self.fixedHeight;
            },
            toggleContent: function () {
                var _self = this;

                if (_self.shouldToggle && _self.disabled === false) {
                    _self.$element.toggleClass(_self.options.expandClassName);
                }

                if(_self.options.oneClick){
                    // Disable click once fade is removed
                    _self.disabled = true;
                }
            }
        }
    );


})(jQuery, window);
